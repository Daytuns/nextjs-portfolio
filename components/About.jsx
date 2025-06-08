import React from 'react';
import Chihuahua from './ChihuahuaPopover';
import { ThingsILikeTable } from './ThingsILikeTable';

const TldrBadge = ({ label }) => (
  <div className="bg-zinc-900/60 backdrop-blur-sm border border-[#2a2a2a] text-zinc-400 text-xs tracking-wide px-4 py-1 rounded-full w-fit transition-all hover:scale-[1.02] hover:bg-zinc-800/60 hover:border-[#444] cursor-default">
    {label}
  </div>
);

const About = () => {
  return (
    <div className="mt-20 mb-10 text-[#777a81]">
      {/* About me heading */}
      <div className="mb-10">
        <p className="text-white">
          About me.<span className="text-[#777a81]"> A little bit about who I am and the things I like.</span>
        </p>
      </div>

      {/* Flex content area */}
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* LEFT COLUMN */}
        <div className="flex-[2] space-y-16">
          <section className="space-y-6">
            <p>
              <span className="">Curiosity. Persistence. Adaptability.</span> These three words drive how I approach life, learning, and problem-solving.
            </p>
            <p>
              Whether it’s through code, circuits, or conversations, I’m always seeking to grow, connect, and contribute.
            </p>
          </section>

          <section className="space-y-4" id="education">
            <h3 className="text-white">Education</h3>
            <p>
              I graduated from <span className="text-gray-300">John Brown University</span> in Siloam Springs, Arkansas, where I earned a Bachelor of Science in <span className="text-gray-300">Electrical Engineering</span> with a minor in <span className="text-gray-300">Computer Science</span>. I explored a wide range of topics from embedded systems to creative design.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-white">Outside of work</h3>
            <p>
              I find joy in the simple and meaningful things: playing and watching soccer, working out, spending time with my three energetic <Chihuahua />, and having conversations that dive into people’s passions. I'm also captivated by visual art and how it communicates emotion and ideas. This shapes how I think about both technology and design.
            </p>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-[1] space-y-4 sticky top-32 self-start">
          <TldrBadge label="Curious, persistent, adaptable" />
          <TldrBadge label="Build. Connect. Grow." />
          <TldrBadge label="EE + CS @ JBU" />
          <TldrBadge label="Soccer. Art. Gym. Dogs." />
          <TldrBadge label="Fueled by coffee" />
        </div>
      </div>

      {/* Things I Like Table */}
      <div className="mt-20" id="thingsIlike">
        <ThingsILikeTable />
      </div>
    </div>
  );
};

export default About;
