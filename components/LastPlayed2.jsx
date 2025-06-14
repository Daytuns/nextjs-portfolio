"use client"

import React, { useEffect, useState } from "react"
import { Music } from "lucide-react"
import Image from "next/image"

const LastPlayed2 = () => {
  // Uncomment to use currently playing logic
  // const [track, setTrack] = useState(null)
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   async function fetchCurrentlyPlaying() {
  //     try {
  //       const res = await fetch("/api/currently-playing")
  //       if (!res.ok) throw new Error("Failed to fetch currently playing track")
  //       const data = await res.json()
  //       if (data.track) {
  //         setTrack({ ...data.track, timestamp: Date.now() })
  //       }
  //     } catch (err) {
  //       setError(err.message)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   fetchCurrentlyPlaying()
  // }, [])

  const [track, setTrack] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchLastPlayed() {
      try {
        const res = await fetch("/api/last-played")
        if (!res.ok) throw new Error("Failed to fetch last played track")
        const data = await res.json()
        if (data.items && data.items.length > 0) {
          setTrack(data.items[0])
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchLastPlayed()
  }, [])

  if (loading) return <p className="text-sm text-gray-400">Loading...</p>
  if (error) return <p className="text-red-500">Error: {error}</p>
  if (!track) return <p className="text-sm text-gray-400 mb-18">No recent track found.</p>

  return (
    <a
      href={track.track.external_urls.spotify}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group rounded-2xl overflow-hidden w-[170px] h-[200px] hover:scale-[1.02] transition-all duration-300 mb-18"
    >
      {/* Blurred background */}
      <Image
        src={track.track.album.images[0].url}
        alt="Album cover"
        fill
        className="object-cover blur-lg z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Glassy content box */}
      <div className="relative z-20 p-4 backdrop-blur-md bg-black/30 rounded-2xl shadow-lg flex flex-col justify-between h-full text-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 text-[10px] uppercase text-green-100 font-semibold">
          <span>Last Played</span>
          <Music size={11} />
        </div>

        {/* Track Info */}
        <div className="text-center">
          <div className="w-18 h-18 mx-auto mb-2 rounded-lg overflow-hidden shadow-md">
            <Image
              src={track.track.album.images[0].url}
              alt="Album cover"
              width={72}
              height={72}
              className="object-cover w-full h-full"
              style={{imageRendering: 'crisp-edges'}}
              quality={95}
            />
          </div>
          <h3 className="text-xs font-semibold line-clamp-2 truncate">{track.track.name}</h3>
          <p className="text-xs text-white/70 truncate">{track.track.artists.map(artist => artist.name).join(", ")}</p>
        </div>

        {/* Footer */}
        <div className=" text-[11px] text-white/60 mt-2 flex justify-between items-center">
          <span className="truncate">{new Date(track.played_at).toLocaleTimeString()}</span>
          <span className="text-[11px] font-medium bg-white/20 hover:bg-white/30 transition px-3 py-1 rounded-full">
            Listen
          </span>
        </div>
      </div>
    </a>
  )
}

export default LastPlayed2
