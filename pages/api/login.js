// pages/api/login.js
const client_id = process.env.SPOTIFY_CLIENT_ID;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;

export default function handler(req, res) {
  const scope = [
    "user-read-recently-played",
    "user-read-playback-state",
    "user-read-currently-playing",
  ].join(" ");

  const authURL = "https://accounts.spotify.com/authorize?" +
    new URLSearchParams({
      response_type: "code",
      client_id,
      scope,
      redirect_uri,
    });

  res.redirect(authURL);
}
