import React, { useEffect, useState } from "react";

export const ThingsILikeTable = () => {
  const thingsILike = [
    "Efficiency",
    "Using coffee shops as my office",
    "Good music",
    "Swiss design",
    "Night coding sessions",
    "When the gym is empty",
    "Minimalism and dark mode",
    "Documentation rabbit holes",
  ];

  const [highlighted, setHighlighted] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * thingsILike.length);
      setHighlighted(randomIndex);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mb-3">
        <h2 className="mt-15 text-white">Things I like.</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mb-15 text-sm">
        {thingsILike.map((thing, index) => {
          const isHighlighted = highlighted === index;

          const baseClasses =
            "p-3 rounded-xl bg-zinc-950 shadow transition duration-300 ease-in-out";
          const highlightedClasses = isHighlighted
            ? "text-white scale-105 border border-white cursor-default"
            : "text-[#777a81] cursor-default";

          if (thing === "Good music") {
            return (
              <a
                key={index}
                href="https://open.spotify.com/user/d4ytom?si=c99300b215a94353"
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseClasses} text-white cursor-pointer ${highlightedClasses}`}
              >
                🎧{thing}
              </a>
            );
          }

          return (
            <div
              key={index}
              className={`${baseClasses} ${highlightedClasses}`}
            >
              {thing}
            </div>
          );
        })}
      </div>
    </>
  );
};
