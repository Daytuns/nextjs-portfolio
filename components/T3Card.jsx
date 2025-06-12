import React from 'react';
import Image from 'next/image';

const T3Card = () => {
  return (
    <a
      href="https://create.t3.gg"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-end w-40 h-65 rounded-2xl overflow-hidden shadow-xl bg-[#16121d] transition-transform hover:scale-[1.02] mb-18"
    >
      {/* Background Logo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/t3.png"
          alt="T3 Stack"
          fill
          className="object-cover opacity-100"
        />
      </div>

      {/* Glass Top Section */}
      <div className="relative z-10 px-5 py-4 backdrop-blur-md bg-black/30 text-white rounded-b-2xl">
        <h3 className="text-lg font-semibold">A Go-To Stack</h3>
        <p className="text-xs/relaxed text-white/80 mt-1 leading-snug">
          Next.js tRPC Tailwind <br />
          <span className="text-white/60">create-t3-app@latest</span>
        </p>
      </div>
    </a>
  );
};

export default T3Card;
