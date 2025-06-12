import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const CACHE_FILE = path.join(process.cwd(), 'cache', 'lastTrack.json');

// Get new access token using refresh token
async function getAccessToken() {
  const basic = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64');

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(`Failed to refresh token: ${err.error_description}`);
  }

  const data = await response.json();
  return data.access_token;
}

// Save track to cache file
function saveTrackToCache(track) {
  const withTimestamp = { ...track, timestamp: Date.now() };
  fs.writeFileSync(CACHE_FILE, JSON.stringify(withTimestamp, null, 2));
  return withTimestamp;
}

// Read cached track from file
function readTrackFromCache() {
  if (!fs.existsSync(CACHE_FILE)) return null;
  const raw = fs.readFileSync(CACHE_FILE);
  return JSON.parse(raw);
}

export default async function handler(req, res) {
  try {
    const accessToken = await getAccessToken();

    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const cached = readTrackFromCache();

    if (response.status === 204 || response.status >= 400) {
      // Nothing playing — return cached last played
      return res.status(200).json({ isPlaying: false, track: cached });
    }

    const data = await response.json();
    if (!data || !data.item) {
      return res.status(200).json({ isPlaying: false, track: cached });
    }

    const newTrack = {
      name: data.item.name,
      artist: data.item.artists.map((a) => a.name).join(', '),
      album: data.item.album.name,
      image: data.item.album.images[0].url,
      url: data.item.external_urls.spotify,
    };

    // Update cache only if the track changed
    if (!cached || cached.name !== newTrack.name || cached.artist !== newTrack.artist) {
      saveTrackToCache(newTrack);
    }

    return res.status(200).json({ isPlaying: true, track: { ...newTrack, timestamp: Date.now() } });
  } catch (error) {
    const cached = readTrackFromCache();
    return res.status(200).json({ isPlaying: false, track: cached, error: error.message });
  }
}
