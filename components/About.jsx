import React from 'react';
import Chihuahua from './ChihuahuaPopover';
import { ThingsILikeTable } from './ThingsILikeTable';
import EducationCard from './EducationCard';
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="mt-20 mb-10 text-[#777a81]">
      {/* About me heading */}
      <div className="mb-10">
        <p className="text-white">About me. <span>And the things I do.</span></p>
      </div>

      {/* Flex content area */}
      <div className="flex flex-col md:flex-row gap-10">

        {/* LEFT COLUMN */}
        <div className="flex-[2] space-y-16">
          <section className="space-y-15 text-[#777a81]" id="education">
            <div>
              <p className="text-white text-sm">What</p>
              <p className='text-sm'>
                Today, I’m a developer. I build for the web because it’s fast, expressive, and fun. Whether front-end or full stack, I’m drawn to the creativity and impact that come with shipping real things to real users.
              </p>
            </div>

            <div>
              <p className="text-white text-sm">How</p>
              <p className='text-sm'>
                I navigate life and work with curiosity, persistence, and adaptability. Whether learning a new tool or tackling a tough problem, I approach it with depth and resilience. I enjoy building solutions that are not only technically sound but thoughtfully designed.
              </p>
            </div>

            <div>
              <p className="text-white text-sm">Why</p>
              <p className='text-sm'>
                Because understanding and creating things gives me purpose. Whether it’s a circuit, a piece of code, or a new idea, I’m wired to explore it, refine it, and make it work better.
              </p>
            </div>

            <div className="space-y-2 gap-0">
              <p className='text-white text-sm'>Degree</p>
              <EducationCard
                imageSrc="/jbu.png"
                altText="John Brown University"
                title="Bachelor of Science in Electrical Engineering"
                subtitle="Minor in Computer Science"
                detail="John Brown University"
              />
            </div>

            <div>
              <p className="text-white text-sm">What my <Chihuahua /> say</p>
              <p className='text-sm'>
                “Always chasing goals—unless we bark loud enough to distract him.”
              </p>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-[1] sticky top-32 self-start space-y-6 text-sm text-[#a1a1aa]">

          {/* Stats & Traits */}
          <div className="space-y-2">
            <p className="text-white font-medium">Stats & Traits</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs bg-blue-950 text-blue-300 border border-blue-800 hover:bg-blue-900 transition-all">Curious</span>
              <span className="px-3 py-1 rounded-full text-xs bg-neutral-800 text-zinc-300 border border-neutral-700 hover:bg-neutral-700 transition-all">Persistent</span>
              <span className="px-3 py-1 rounded-full text-xs bg-sky-950 text-sky-300 border border-sky-800 hover:bg-sky-900 transition-all">Adaptable</span>
              <span className="px-3 py-1 rounded-full text-xs bg-red-950 text-red-300 border border-red-800 hover:bg-red-900 transition-all">Debug Mode</span>
              <span className="px-3 py-1 rounded-full text-xs bg-green-950 text-green-300 border border-green-800 flex items-center gap-1 hover:bg-green-900 transition-all">
                <CheckCircle className="w-3 h-3" /> FE Certified
              </span>
            </div>
          </div>

          {/* Vitals */}
          <div className="space-y-2">
            <p className="text-white font-medium">Vitals</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs bg-blue-950 text-blue-200 border border-blue-800">EE + CS @ JBU</span>
              <span className="px-3 py-1 rounded-full text-xs bg-purple-950 text-purple-200 border border-purple-800">Soccer</span>
              <span className="px-3 py-1 rounded-full text-xs bg-amber-950 text-amber-300 border border-amber-800">Gym</span>
              <span className="px-3 py-1 rounded-full text-xs bg-pink-950 text-pink-200 border border-pink-800">3 Tiny Dogs</span>
              <span className="px-3 py-1 rounded-full text-xs bg-neutral-700 text-white border border-neutral-600">Coffee</span>
            </div>
          </div>

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
