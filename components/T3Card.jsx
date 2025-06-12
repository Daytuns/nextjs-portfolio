import React from 'react';
import Image from 'next/image';

const T3Card = () => {
  return (
    <a
      href="https://create.t3.gg"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between w-40 h-65 rounded-2xl overflow-hidden shadow-xl bg-[#2f0271] transition-transform hover:scale-[1.02] mb-18"
    >
      {/* Top Section with Text */}
      <div className="px-5 pt-5 text-white">
        <h3 className="text-lg font-semibold">A Stack I Like</h3>
        <p className="text-xs/relaxed text-white/80 mt-1">Next.js tRPC Tailwind <br/><span>create t3-app@latest</span></p>
      </div>

      {/* Image Section */}
      <div className="relative h-40 w-full">
        <Image
          src="/t3.png"
          alt="T3 Stack"
          fill
          className="object-contain object-bottom"
        />
      </div>
    </a>
  );
};

export default T3Card;
