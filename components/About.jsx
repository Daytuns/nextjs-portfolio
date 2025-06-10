import React from 'react';
import Chihuahua from './ChihuahuaPopover';
import { ThingsILikeTable } from './ThingsILikeTable';
import EducationCard from './EducationCard';
import { CheckCircle } from "lucide-react";
import { Tabs, Tab } from "@heroui/react";
import { AboutCards } from './AboutCards';

const About = () => {
  const aboutSections = [
  {
    title: "What",
    content:
      "Today, I’m a developer. I build for the web because it’s fast, expressive, and fun. Whether front‑end or full‑stack, I’m drawn to the creativity and impact of shipping real things to users.",
  },
  {
    title: "How",
    content:
      "I navigate life and work through curiosity, persistence, and adaptability. I build solutions that are technically sound yet thoughtfully designed.",
  },
  {
    title: "Why",
    content:
      "Understanding and creating gives me purpose—whether a circuit, code, or idea, I’m wired to explore and refine.",
  },
  {
    title: "Degree",
    content: (
      <EducationCard
        imageSrc="/jbu.png"
        altText="John Brown University"
        title="Bachelor of Science in Electrical Engineering"
        subtitle="Minor in Computer Science"
        detail="John Brown University"
      />
    ),
  },
  {
    title: "What my chihuahuas say",
    content:
      '“Always chasing goals—unless we <Chihuahua /> loud enough to distract me.”',
  },
];

  const gradientBackgrounds = [
  "radial-gradient(circle at top left, rgba(168,85,247,0.2), transparent)",     // purple
  "radial-gradient(circle at top left, rgba(190,242,100,0.2), transparent)",    // lime
  "radial-gradient(circle at top left, rgba(251,191,36,0.2), transparent)",     // amber
  "radial-gradient(circle at top left, rgba(34,211,238,0.2), transparent)",     // cyan
  "radial-gradient(circle at top left, rgba(236,72,153,0.2), transparent)",     // pink
];



  const wrapperStyle =
    "mt-4 p-6 rounded-xl border border-zinc-800/50 bg-transparent backdrop-blur-sm shadow-inner transition-all duration-300";

  return (
    <div className="mt-20 mb-10 text-[#777a81]">
      <div className='w-full flex flex-col justify-center mb-10'>
          <h2 className='text-xl text-white font-semibold mb-2'>
            About Me
          </h2>
          <h3 className='text-[#777a81] text-large '>And the things I do.</h3>

        </div>

      {/* <AboutCards /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-transparent p-0">
  {/* Top Left – Black + Orange Radial Glow */}
  <div className="relative p-6 min-h-[280px] flex flex-col justify-end overflow-hidden">
    {/* Angular orange glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage:
          "conic-gradient(from 180deg at center, rgba(251, 146, 60, 0.08), transparent 75%)",
        filter: "blur(40px)",
      }}
    />
    <div className="relative z-10">
      <h3 className="text-white text-xl font-semibold mb-2">What</h3>
      <p className="text-zinc-300 text-sm leading-relaxed">
        Today, I’m a developer. I build for the web because it’s fast, expressive, and fun. Whether front‑end or full‑stack, I’m drawn to the creativity and impact of shipping real things to users.
      </p>
    </div>
  </div>


  {/* Top Right – Black + Soft Blue Radial Glow */}
  <div className="relative p-6 min-h-[280px] flex flex-col justify-end overflow-hidden">
    {/* Diagonal blue gradient */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(147, 197, 253, 0.06), transparent 70%)",
        filter: "blur(36px)",
      }}
    />
    <div className="relative z-10">
      <h3 className="text-white text-xl font-semibold mb-2">How</h3>
      <p className="text-zinc-300 text-sm leading-relaxed">
        I navigate life and work through curiosity, persistence, and adaptability. I build solutions that are technically sound yet thoughtfully designed.
      </p>
    </div>
  </div>


  {/* Bottom Left – Transparent + Optional Glow */}
  <div className="relative p-6 min-h-[280px] flex flex-col justify-end overflow-hidden">
    {/* Offset radial blue glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage:
          "radial-gradient(circle at top left, rgba(96, 165, 250, 0.08), transparent 70%)",
        filter: "blur(32px)",
      }}
    />
    <div className="relative z-10">
      <h3 className="text-white text-xl font-semibold mb-2">Why</h3>
      <p className="text-zinc-300 text-sm leading-relaxed">
        Understanding and creating gives me purpose—whether a circuit, code, or idea, I’m wired to explore and refine.
      </p>
    </div>
  </div>



  {/* Bottom Right – Sky Gradient → Transparent */}
  <div className="relative p-6 min-h-[280px] flex flex-col justify-end overflow-hidden">
  {/* Richer glow with more personality */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage:
        "radial-gradient(circle at bottom right, rgba(192, 132, 252, 0.15), transparent 70%)", // Tailwind's purple-400 equivalent
      filter: "blur(48px)",
    }}
  ></div>

  <div className="relative z-10">
    <h3 className="text-white text-xl font-semibold mb-2">
      What my chihuahuas say
    </h3>
    <p className="text-zinc-400 text-sm leading-relaxed">
      “Always chasing goals—unless we <Chihuahua /> loud enough to distract me.”
    </p>
  </div>
</div>




</div>








      {/* <Tabs
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
      </Tabs> */}

      <div className="mt-20" id="thingsIlike">
        <ThingsILikeTable />
      </div>
    </div>
  );
};

export default About;
