import fetch from 'node-fetch'

export default async function handler(req, res) {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

  if (!refresh_token) {
    return res.status(400).json({ error: 'No refresh token provided.' })
  }

  const basicAuth = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64')

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return res.status(response.status).json(errorData)
    }

    const data = await response.json()
    res.status(200).json(data) // contains access_token & expires_in
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
