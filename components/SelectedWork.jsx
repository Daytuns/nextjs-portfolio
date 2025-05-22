import React from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link'

const SelectedWork = () => {
  return (
    <div className="mt-40 flex flex-col items-start justify-start">
      <p>Selected Work</p>

      {/* VibeHex */}
      <div className="flex flex-col lg:flex-row gap-8 w-full mt-5">
        <ProjectCard
          title="VibeHex"
          href="https://daytuns.github.io/vibehex-frontend-live/"
          imageSrc="/HeroVibeHex.png"
          description="Type in any prompt and get a matching color palette with this AI color palette generator."
          gradient="linear-gradient(188.62deg, rgb(8, 57, 38) 49.9%, rgb(5, 150, 105) 81.7%, rgb(52, 211, 153) 93.88%, rgb(249, 215, 147) 113.5%)"
          imageShadow="shadow-[0_0_30px_#059669]"
          accentColor="text-emerald-300"
        />
        <div className="w-full lg:max-w-[30%] text-sm text-white lg:mt-10 flex flex-col gap-3">
          <div className="flex gap-5 items-center w-full">
            <h3 className="text-lg font-bold text-emerald-300">VibeHex</h3>
            <Link
              target="_blank"
              href="https://github.com/Daytuns/vibehex-ai-palette-generator"
              className="grey-links text-lg font-light"
            >
              Code
            </Link>
          </div>
          <ul className="list-inside list-none justify-evenly flex flex-col gap-2 text-base lg:text-sm text-[#777a81] h-full">
            <li>- Responsive and intuitive UI using vanilla JavaScript and Framer Motion for loading animations.</li>
            <li>- The app sends the prompt to a Node.js Express backend, which queries Gemini Flash 2.0 via API.</li>
            <li>- Gemini returns 5 hex color codes based on the prompt.</li>
            <li>- Each color is shown as a block with readable text you can copy to clipboard.</li>
          </ul>
        </div>
      </div>

      {/* Last of Us Quiz */}
      {/* <div className="flex flex-col lg:flex-row gap-8 w-full mt-10">
        <ProjectCard
          title="Last of Us Quiz"
          href="https://lastofusquiz.com"
          imageSrc="/TLOUQuiz.png"
          description="A fun interactive quiz about The Last of Us series."
          gradient="linear-gradient(180deg, #1c1c1c 40%, #333333 75%, #888888 100%)"
          imageShadow="shadow-[0_0_30px_#666666]"
          accentColor="text-zinc-300"
        />
        <div className="w-full lg:max-w-[30%] text-sm text-white lg:mt-10 flex flex-col gap-3">
          <div className="flex gap-5 items-center w-full">
            <h3 className="text-lg font-bold text-zinc-300">Last of Us Quiz</h3>
            <Link
              target="_blank"
              href="https://github.com/Daytuns/lastofus-quiz"
              className="grey-links text-lg font-light"
            >
              Code
            </Link>
          </div>
          <ul className="list-inside list-none justify-evenly flex flex-col gap-2 text-base lg:text-sm text-[#777a81] h-full">
            <li>- Built with React and Tailwind, responsive and mobile-ready.</li>
            <li>- Fun quiz with randomized questions and immediate feedback.</li>
            <li>- Clean design inspired by HBO’s aesthetic and color palette.</li>
            <li>- User can see their score, retry the quiz, and get answer explanations.</li>
          </ul>
        </div>
      </div> */}

      {/* Next Ventures */}
      <div className="flex flex-col lg:flex-row gap-8 w-full mt-10">
        <ProjectCard
          title="Next Ventures"
          href="https://your-next-ventures-link.com"
          imageSrc="/next-venture.webp"
          description="An online space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design."
          gradient="linear-gradient(188.62deg, rgb(107, 13, 51) 49.9%, rgb(219, 39, 119) 81.7%, rgb(244, 114, 182) 93.88%, rgb(249, 215, 147) 113.5%)"
          imageShadow="shadow-[0_0_30px_#DB2777]"
          accentColor="text-pink-300"
        />
        <div className="w-full lg:max-w-[30%] text-sm text-white lg:mt-10 flex flex-col gap-3">
          <div className="flex gap-5 items-center w-full">
            <h3 className="text-lg font-bold text-pink-300">Next Ventures</h3>
            <Link
              target="_blank"
              href="https://github.com/Daytuns/next-ventures"
              className="grey-links text-lg font-light"
            >
              Code
            </Link>
          </div>
          <ul className="list-inside list-none justify-evenly flex flex-col gap-2 text-base lg:text-sm text-[#777a81] h-full">
            <li>- Built with Next.js and Tailwind CSS for rapid performance and styling.</li>
            <li>- Clean, bold layout to highlight business ideas and pitches.</li>
            <li>- Sections for trending ideas, user submissions, and investor profiles.</li>
            <li>- Emphasis on accessibility and responsiveness across all devices.</li>
          </ul>
        </div>
      </div>

      {/* Zenith Minds */}
      <div className="flex flex-col lg:flex-row gap-8 w-full mt-10">
        <ProjectCard
          title="Zenith Minds"
          href="https://your-zenith-minds-link.com"
          imageSrc="/zenith.jpg"
          description="A platform connecting students and instructors for enhanced learning experiences."
          gradient="linear-gradient(188.62deg, rgb(7, 14, 87) 49.9%, rgb(41, 50, 203) 81.7%, rgb(121, 128, 255) 93.88%, rgb(249, 215, 147) 113.5%)"
          imageShadow="shadow-[0_0_30px_#2932CB]"
          accentColor="text-blue-300"
        />
        <div className="w-full lg:max-w-[30%] text-sm text-white lg:mt-10 flex flex-col gap-3">
          <div className="flex gap-5 items-center w-full">
            <h3 className="text-lg font-bold text-blue-300">Zenith Minds</h3>
            <Link
              target="_blank"
              href="https://github.com/Daytuns/zenith-minds"
              className="grey-links text-lg font-light"
            >
              Code
            </Link>
          </div>
          <ul className="list-inside list-none justify-evenly flex flex-col gap-2 text-base lg:text-sm text-[#777a81] h-full">
            <li>- Platform to connect students and instructors with enhanced UX.</li>
            <li>- Uses Firebase for authentication and Firestore for real-time data.</li>
            <li>- UI inspired by academic dashboards and modular design.</li>
            <li>- Role-based views for students, instructors, and admins.</li>
          </ul>
        </div>
      </div>

      {/* Personal Portfolio */}
      <div className="flex flex-col lg:flex-row gap-8 w-full mt-10">
        <ProjectCard
          title="Personal Portfolio"
          href="https://your-portfolio-link.com"
          imageSrc="/portfolio.webp"
          description="Design Unleashed: A Captivating Portfolio Showcasing Innovative Web Development and UI/UX"
          gradient="linear-gradient(188.62deg, rgb(61, 26, 122) 49.9%, rgb(126, 34, 206) 81.7%, rgb(192, 132, 252) 93.88%, rgb(249, 215, 147) 113.5%)"
          imageShadow="shadow-[0_0_30px_#7E22CE]"
          accentColor="text-purple-300"
        />
        <div className="w-full lg:max-w-[30%] text-sm text-white lg:mt-10 flex flex-col gap-3">
          <div className="flex gap-5 items-center w-full">
            <h3 className="text-lg font-bold text-purple-300">Personal Portfolio</h3>
            <Link
              target="_blank"
              href="https://github.com/Daytuns/personal-portfolio"
              className="grey-links text-lg font-light"
            >
              Code
            </Link>
          </div>
          <ul className="list-inside list-none justify-evenly flex flex-col gap-2 text-base lg:text-sm text-[#777a81] h-full">
            <li>- Built with Next.js, Tailwind, and Framer Motion for modern animation.</li>
            <li>- Fully responsive layout, dark mode, and mouse-tracking hover previews.</li>
            <li>- Styled sections with unique gradients and subtle glass effects.</li>
            <li>- Fast-loading, SEO optimized, and deployed on Vercel.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SelectedWork
