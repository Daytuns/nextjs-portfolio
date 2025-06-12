import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const LastPlayed2 = () => {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCurrentlyPlaying() {
      try {
        const res = await fetch('/api/currently-playing');
        if (!res.ok) throw new Error('Failed to fetch currently playing track');
        const data = await res.json();
        if (data.track) {
          setTrack({ ...data.track, timestamp: Date.now() });
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCurrentlyPlaying();
  }, []);

  if (loading) return <p className="text-sm text-gray-400">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!track) return <p className="text-sm text-gray-400 mb-18">No recent track found.</p>;

  return (
  <a
    href={track.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group cursor-pointer relative block w-40 h-65 rounded-xl overflow-hidden shadow-lg text-white bg-black/20 mb-18"
  >
    <img
      src={track.image}
      alt={track.name}
      className="absolute w-full h-full object-cover"
    />

    <Image
      src={track.image}
      alt="Song Cover"
      width={160}
      height={160}
      className="rounded-t-xl absolute"
    />

    <div className="absolute top-2 left-2 text-xs uppercase font-bold bg-black/70 text-white px-2 py-0.5 rounded">
      Last Played
    </div>

    <div className="absolute bottom-0 left-0 w-full px-4 py-3 backdrop-blur-md bg-black/40">
      <p className="text-sm font-semibold truncate">{track.name}</p>
      <p className="text-sm text-white/70 truncate">by {track.artist}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-white/70">
          {new Date(track.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
        <span
          className="text-sm font-medium bg-white/20 group-hover:bg-white/30 transition px-3 py-1 rounded-full"
        >
          Listen
        </span>
      </div>
    </div>
  </a>
);

};

export default LastPlayed2;
