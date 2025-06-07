import React from "react";

export const ThingsILikeTable = () => {
  const thingsILike = [
    "",
    "Efficiency",
    "Using coffee shops as my office",
    "Good music",
    "Swiss design",
    "Night coding sessions",
    "When the gym is empty",
    "Documentation rabbit holes",
    ""
  ];

  return (
    <>
      <div className="mb-3">
        <h2 className="text-large mt-15">Things I like</h2>
      </div>
      <div className="max-w-2xl mb-15 mr-2">
        <div className="bg-gray-900/30 rounded-3xl border border-gray-800/50">
          {thingsILike.map((thing, index) => {
            if (thing === "Good music") {
              return (
                <a
                  key={index}
                  href="https://open.spotify.com/user/d4ytom?si=c99300b215a94353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 block text-blue-500 hover:text-blue-400 transition-colors duration-200 cursor-pointer last:border-b-0"
                >
                  {thing}
                </a>
              );
            } else {
              return (
                <div
                  key={index}
                  className="px-6 py-2 text-gray-200 cursor-default"
                >
                  {thing}
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};
