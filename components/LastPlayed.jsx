import React, { useEffect, useState } from 'react';

const LastPlayed = () => {
  const [lastPlayedItem, setLastPlayedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLastPlayed() {
      try {
        const res = await fetch('/api/last-played');
        if (!res.ok) throw new Error('Failed to fetch last played track');
        const data = await res.json();
        if (data.items && data.items.length > 0) {
          setLastPlayedItem(data.items[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchLastPlayed();
  }, []);

  if (loading) return <p className="text-sm text-gray-400">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!lastPlayedItem) return <p className="text-sm text-gray-400">No recently played track.</p>;

  return (
    <div className="mt-10 mb-20">
      <p className="mb-2 font-semibold text-large">Last Played</p>
      <div className="flex gap-3 items-center">
        <img
          src={lastPlayedItem.track.album.images[0].url}
          alt={lastPlayedItem.track.name}
          style={{
            width: '65px',
            height: '65px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
        <div className="flex flex-col gap-0">
          <p className="text-sm font-medium">{lastPlayedItem.track.name}</p>
          <p className="text-sm text-gray-400">
            by {lastPlayedItem.track.artists.map(artist => artist.name).join(', ')}
          </p>
          <p className="text-xs text-gray-500">
            Played at: {new Date(lastPlayedItem.played_at).toLocaleString()}
          </p>
          <a
            href={lastPlayedItem.track.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:text-blue-400 transition-colors duration-200"
          >
            Listen on Spotify
          </a>
        </div>
      </div>
    </div>
  );
};

export default LastPlayed;
