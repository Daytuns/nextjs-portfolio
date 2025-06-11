import React from 'react';
import Chihuahua from './ChihuahuaPopover';
import { ThingsILikeTable } from './ThingsILikeTable';
import EducationCard from './EducationCard';
import { CheckCircle } from "lucide-react";
import { Tabs, Tab } from "@heroui/react";
import { AboutCards } from './AboutCards';
import AboutLink from './AboutLink';

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
  {/* CARD TEMPLATE */}
  {[
    {
      title: "What",
      glow: "conic-gradient(from 180deg at center, rgba(251, 146, 60, 0.12), transparent 75%)",
      blur: "blur(40px)",
      content:
        "I build for the web because it’s expressive, fast, and real. From front-end to full-stack, I thrive on creativity and shipping ideas into people’s hands.",
    },
    {
      title: "How",
      glow: "linear-gradient(135deg, rgba(147, 197, 253, 0.12), transparent 70%)",
      blur: "blur(36px)",
      content:
        "With curiosity, persistence, and adaptability. I build systems that work as beautifully as they look.",
    },
    {
      title: "Why",
      glow: "radial-gradient(circle at top left, rgba(96, 165, 250, 0.14), transparent 70%)",
      blur: "blur(32px)",
      content:
        "I’m wired to understand and create—from code to circuits to ideas. Building things gives me purpose.",
    },
    {
      title: "What my chihuahuas say",
      glow: "radial-gradient(circle at bottom right, rgba(192, 132, 252, 0.2), transparent 70%)",
      blur: "blur(48px)",
      content:
        "“Always chasing goals—unless we <Chihuahua /> loud enough to distract him.”",
    },
  ].map((card, i) => (
    <div
      key={i}
      className="relative p-6 min-h-[280px] flex flex-col justify-end overflow-hidden rounded-2xl bg-white/2 border border-white/10 backdrop-blur-md shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-[1.015]"
    >
      {/* Glow inside the glass */}
      <div
        className="absolute inset-0 z-0 rounded-2xl"
        style={{
          backgroundImage: card.glow,
          filter: card.blur,
        }}
      />
      <div className="relative z-10">
        <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
          {card.title}
        </h3>
        <p className="text-[#d1d5db] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: card.content }} />
      </div>
    </div>
  ))}
</div>


<AboutLink />











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

      {/* <div className="mt-20" id="thingsIlike">
        <ThingsILikeTable />
      </div> */}
    </div>
  );
};

export default About;
