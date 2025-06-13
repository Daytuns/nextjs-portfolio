import React from 'react';
import Footer from './Footer';

const VibeHex = () => {
  return (
    <div className='max-w-xl mx-auto px-2 pt-20 text-white'>
    <div className="space-y-12">
      <h1 className="text-xl font-semibold">
        AI Powered Color Palette Generator — <span className="bg-gradient-to-r from-[#FF00D0] to-[#FF7C09] bg-[length:200%] bg-clip-text text-transparent animate-gradient-move">VibeHex</span>
      </h1>

      <p className="text-gray-400">
        A minimalist web app that uses AI to generate color palettes from a prompt. You type a vibe—Gemini returns hex codes. Built with vanilla JavaScript and hosted on free-tier infrastructure.
      </p>

      <div>
        <h2 className="text-sm text-gray-500 mb-2">DEMO</h2>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/_F39sx4CTzY"
            title="VibeHex Demo"
            allowFullScreen
          />
        </div>
      </div>

      <div>
        <h2 className="text-sm text-gray-500 mb-2">WHY</h2>
        <p className="text-gray-400">
          I needed a palette that matched a specific vibe—and couldn’t find anything that worked from pure text prompts. So I built one myself.
        </p>
      </div>

      <div>
        <h2 className="text-sm text-gray-500 mb-2">HOW</h2>
        <p className="text-gray-400">
          I designed the interface in Figma and implemented the frontend with vanilla JS, skipping frameworks for simplicity. The input prompt is sent to a backend (Node.js), which queries Gemini Flash 2.0. It returns five hex codes, styled into color blocks with readable contrast. You can copy a hex by clicking. Frontend and backend are deployed on free-tier platforms, so initial load may be slow.
        </p>
      </div>

      <div>
        <h2 className="text-sm text-gray-500 mb-2">COMMENTS</h2>
        <p className="text-gray-400">
          This project was a way to revisit DOM manipulation and prompt design. It also let me practice lightweight deployments and UI decisions around color accessibility.
        </p>
      </div>

      <div className="pt-6 mb-15">
        <a
          href="https://github.com/Daytuns/vibehex-ai-palette-generator"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline font-medium"
        >
          View code
        </a>
        <a
          href="https://daytuns.github.io/vibehex-frontend-live/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 px-6 hover:underline font-medium"
        >
          Try it live
        </a>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default VibeHex;
