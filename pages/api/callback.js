export default async function handler(req, res) {
  const code = req.query.code;

  const authOptions = {
    method: "POST",
    headers: {
      "Authorization": "Basic " + Buffer.from(
        process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET
      ).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    }),
  };

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", authOptions);
    const data = await response.json();

    if (data.access_token) {
      // Send tokens to the browser for now (we'll store later)
      res.status(200).json({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_in: data.expires_in,
      });
    } else {
      res.status(400).json({ error: "Failed to retrieve access token", details: data });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error });
  }
}
