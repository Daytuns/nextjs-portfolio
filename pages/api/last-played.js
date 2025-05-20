import fetch from 'node-fetch';

const getAccessToken = async () => {
  const basicAuth = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Token refresh failed: ${errorData.error_description}`);
  }

  const data = await response.json();
  return data.access_token;
};

export default async function handler(req, res) {
  try {
    const access_token = await getAccessToken();

    const spotifyRes = await fetch(
      'https://api.spotify.com/v1/me/player/recently-played?limit=1',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (!spotifyRes.ok) {
      const error = await spotifyRes.json();
      return res.status(spotifyRes.status).json(error);
    }

    const data = await spotifyRes.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
