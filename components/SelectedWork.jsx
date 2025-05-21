import React from 'react'
import ProjectCard from './ProjectCard' 
import Link from 'next/link'

const SelectedWork = () => {
  return (
    <div className="mt-40 flex flex-col items-start justify-start">
        <p>Selected Work</p>
        <div className='flex gap-0'>
            <ProjectCard
            title="VibeHex: AI Color Palette Generator"
            href="https://daytuns.github.io/vibehex-frontend-live/"
            target="_blank" 
            imageSrc="/HeroVibeHex.png" 
            description="Type in any prompt and get a matching color palette with this AI color palette generator."
            />
            <div className="max-w-[30%] text-sm text-white mt-8 flex flex-col items-center">
                <h3 className="text-lg font-bold text-emerald-300">VibeHex</h3>
                <ul className="list-inside pl-7 list-none flex flex-col justify-evenly h-full items-center text-sm text-[#777a81]">
                    <li>Responsive and intuitive UI using vanilla JavaScript and Framer Motion for loading animations.</li>
                    <li>The app sends the prompt to a Node.js Express backend, which queries Gemini Flash 2.0 via API.</li>
                    <li>Gemini returns 5 hex color codes based on the prompt.</li>
                    <li>Each color is shown as a block with readable text (thanks to a contrast algorithm) that you can copy to clipboard on click.</li>
                    <li className='grey-links text-base flex flex-end w-full'><Link target="_blank" href={"https://github.com/Daytuns/vibehex-ai-palette-generator"}>Code</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SelectedWork
