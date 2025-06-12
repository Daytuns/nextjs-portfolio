import React from 'react';
import { Code } from '@heroui/react';

const favoriteTools = [
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/white' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/white' },
  { name: 'shadcn/ui', icon: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4' },
  { name: 'Prisma', icon: 'https://cdn.simpleicons.org/prisma/white' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/white' },
  { name: 'Express', icon: 'https://cdn.simpleicons.org/express/white' },
];

const TechGrid = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="w-full flex flex-col">
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-2">What I Build With</h2>
          <h3 className="text-[#777a81]">A solid stack of tools I trust.</h3>
        </div>

        {/* Apple-style tools bar */}
        <div className="flex gap-6 flex-wrap justify-begin items-center mb-16">
          {favoriteTools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center justify-center rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:bg-white/10 transition-all backdrop-blur-md"
            >
              <img src={tool.icon} alt={tool.name} className="w-10 h-10 mb-2" />
              <span className="text-white/80 font-semibold text-center leading-tight">{tool.name}</span>
            </div>
          ))}
        </div>

        {/* Console demo block */}
        <div className="flex w-[75%] mb-16">
          <div className="relative bg-gradient-to-br from-[#0e0e0f] via-[#1a1a1d] to-[#0e0e0f] rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-white/10 font-mono text-xs text-white backdrop-blur-sm">
            <div className="flex space-x-2 mb-4">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <pre className="whitespace-pre-wrap leading-relaxed text-white/90 text-xs sm:text-sm">
              <Code>
                npm create t3-app@latest
                <br />
                ? What will your project be called? <span className="text-blue-400">my-t3-app</span>
                <br />
                ? Will you be using JavaScript or TypeScript? <span className="text-blue-400">TypeScript</span>
                <br />
                <span className="text-green-400">Good choice! Using TypeScript!</span>
                <br />
                ? Which packages would you like to enable? <span className="text-blue-400">nextAuth, prisma, tailwind, trpc</span>
                <br />
                ? Initialize a new git repository? <span className="text-blue-400">No</span>
                <br />
                <span className="text-green-400">Sounds good! You can come back and run git init later.</span>
                <br />
                ? Would you like us to run npm install? <span className="text-blue-400">Yes</span>
                <br />
                <span className="text-green-400">Alright. We'll install the dependencies for you!</span>
              </Code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechGrid;
