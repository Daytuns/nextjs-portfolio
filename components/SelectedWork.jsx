import React from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link'
import IPodCard from './IPodCard'

const SelectedWork = () => {
  return (
    <div className="relative w-full pt-15 pb-5 overflow-hidden">
      {/* Ambient lighting effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 sm:w-2/3 h-[45vh] bg-blue-400/10 rounded-b-full blur-3xl pointer-events-none z-0" />
      
      <div className="relative z-10">
        <div className='w-full flex flex-col justify-center'>
          <h2 className='text-xl font-semibold mb-2'>
            Featured Work
          </h2>
          <h3 className='text-[#9f9ea0] '>Some ideas I cared enough to bring to life.</h3>

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
        {/* <div className="flex flex-col lg:flex-row gap-8 w-full mt-5">
          <IPodCard
            title="Reimagining the iPod"
            href="https://your-next-ventures-link.com"
            imageSrc="/iPod.png"
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
            <ul className="list-inside list-none justify-evenly flex flex-col gap-2 text-base text-[#777a81] h-full">
              <li>- Built with Next.js and Tailwind CSS for rapid performance and styling.</li>
              <li>- Clean, bold layout to highlight business ideas and pitches.</li>
              <li>- Sections for trending ideas, user submissions, and investor profiles.</li>
              <li>- Emphasis on accessibility and responsiveness across all devices.</li>
            </ul>
          </div>
        </div> */}

        {/* Personal Portfolio */}
        {/* <div className="flex flex-col lg:flex-row gap-8 w-full mt-10">
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
            <ul className="list-inside list-none justify-evenly flex flex-col gap-2 text-base text-[#777a81] h-full">
              <li>- Built with Next.js, Tailwind, and Framer Motion for modern animation.</li>
              <li>- Fully responsive layout, dark mode, and mouse-tracking hover previews.</li>
              <li>- Styled sections with unique gradients and subtle glass effects.</li>
              <li>- Fast-loading, SEO optimized, and deployed on Vercel.</li>
            </ul>
          </div>
        </div> */}

        {/* iPod and VibeHex */}
        <div className='flex gap-5 w-full overflow-x-auto flex-nowrap sm:overflow-x-visible'>
          <div className="flex flex-col gap-8 w-[15rem] sm:w-[16rem] mt-2 flex-shrink-0 sm:flex-shrink">
            <IPodCard
              title="Reimagining the iPod"
              href="https://your-zenith-minds-link.com"
              imageSrc="/iPod.png"
              description="Minimalist, always-on-top Spotify player styled like an iPod."
              gradient="linear-gradient(188.62deg, rgb(7, 14, 87) 49.9%, rgb(41, 50, 203) 81.7%, rgb(121, 128, 255) 93.88%, rgb(249, 215, 147) 113.5%)"
              imageShadow="shadow-[0_0_30px_#2932CB]"
              accentColor="text-blue-300"
            />
          </div>
          <div className="w-[20rem] sm:w-[24rem] mt-2 flex-shrink-0 sm:flex-shrink">
            <ProjectCard
              title="VibeHex"
              href="/vibehex"
              imageSrc="/HeroVibeHex.png"
              description="AI powered color palette generator given any prompt."
              gradient="linear-gradient(188.62deg, rgb(8, 57, 38) 49.9%, rgb(5, 150, 105) 81.7%, rgb(52, 211, 153) 93.88%, rgb(249, 215, 147) 113.5%)"
              imageShadow="shadow-[0_0_30px_#059669]"
              accentColor="text-emerald-300"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectedWork
