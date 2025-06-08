import React from 'react';
import Chihuahua from './ChihuahuaPopover';
import { ThingsILikeTable } from './ThingsILikeTable';
import EducationCard from './EducationCard';
import { CheckCircle } from "lucide-react";
import { Tabs, Tab } from "@heroui/react";

const About = () => {
  const wrapperStyle =
    "mt-4 p-6 rounded-xl border border-zinc-800/50 bg-transparent backdrop-blur-sm shadow-inner transition-all duration-300";

  return (
    <div className="mt-20 mb-10 text-[#777a81]">
      <div className="mb-10">
        <p className="text-white" id="education">
          About me. <span className="text-[#777a81]">And the things I do.</span>
        </p>
      </div>

      <Tabs
        variant="underlined"
        aria-label="About sections"
        className="text-sm text-zinc-400"
        classNames={{
          tab: "px-3 py-2 transition-all border-b-2 border-transparent hover:border-zinc-600 hover:text-zinc-300 data-[selected=true]:border-white data-[selected=true]:text-white"
        }}
      >
        <Tab key="what" title="What">
          <div className={wrapperStyle}>
            <p>
              Today, I’m a developer. I build for the web because it’s fast, expressive, and fun.
              Whether front‑end or full‑stack, I’m drawn to creativity and impact of shipping real things to users.
            </p>
          </div>
        </Tab>

        <Tab key="how" title="How">
          <div className={wrapperStyle}>
            <p>
              I navigate life and work through curiosity, persistence, adaptability. I build solutions that are technically sound yet thoughtfully designed.
            </p>
          </div>
        </Tab>

        <Tab key="why" title="Why">
          <div className={wrapperStyle}>
            <p>
              Understanding and creating gives me purpose—whether a circuit, code, or idea, I’m wired to explore and refine.
            </p>
          </div>
        </Tab>

        <Tab key="degree" title="Degree">
          <div className={wrapperStyle}>
            <EducationCard
              imageSrc="/jbu.png"
              altText="John Brown University"
              title="Bachelor of Science in Electrical Engineering"
              subtitle="Minor in Computer Science"
              detail="John Brown University"
            />
          </div>
        </Tab>

        <Tab key="dogs" title={<span>What my chihuahuas say</span>}>
          <div className={wrapperStyle}>
            <p>
              “Always chasing goals—unless we <Chihuahua /> loud enough to distract me.”
            </p>
          </div>
        </Tab>
      </Tabs>

      <div className="mt-20" id="thingsIlike">
        <ThingsILikeTable />
      </div>
    </div>
  );
};

export default About;
