import Image from 'next/image'
import Chihuahua from '@/components/ChihuahuaPopover'
import { useState } from 'react'
import Footer from '@/components/Footer'
import Link from 'next/link'
import LastPlayed from '@/components/LastPlayed'

export default function AboutPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('daytonbaldizon@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-xl mx-auto pt-20 px-6 sm:px-0">
      <div className='flex gap-4 mb-15 sm:items-center sm:flex-row items-start flex-col'>
        <div className="relative aspect-square rounded-full overflow-hidden">
          <Image
            src="/PortfolioPhoto2.jpg"
            alt="Profile picture"
            width={100}
            height={100}
            className="rounded-full object-cover flex-shrink-0 w-[50px] h-[50px] sm:w-auto sm:h-auto"
          />
        </div>
        <div className='flex flex-col gap-1'>
          <h1 className="text-2xl font-semibold">
            Hey, I'm{' '}
            <Link
            href="/"
            className=""
            draggable={false}
            >
            <span className="text-2xl bg-gradient-to-r from-[#FF00D0] to-[#FF7C09] bg-[length:200%] bg-clip-text text-transparent animate-gradient-move">
            Dayton
            </span>
            </Link>
          </h1>
          <p className="leading-relaxed text-gray-500">
            Fullstack developer and electrical engineer. Currently building interfaces, AI agents & ideas that solve problems I care about.
          </p>
        </div>
      </div>

      {/* <p className="text-base leading-relaxed text-gray-500">
        Fullstack developer and electrical engineer. Currently building interfaces, AI agents, & ideas that solve problems I care about.
      </p> */}

      <div className="mb-15 space-y-15">
        <div>
          <p className="text-sm text-gray-500 font-medium mb-1 uppercase tracking-wide">what</p>
          <p className="text-base text-gray-400">
            Today, I’m a developer. I build for the web because it’s fast, expressive, and fun. Whether front‑end or full‑stack, I'm passionate about solving problems, and I’m drawn to the creativity and impact of shipping real things to users.
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500 font-medium mb-1 uppercase tracking-wide">how</p>
          <p className="text-base text-gray-400">
            I navigate life and work through curiosity, persistence, and adaptability. I build solutions that are technically sound yet thoughtfully designed.
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500 font-medium mb-1 uppercase tracking-wide">why</p>
          <p className="text-base text-gray-400">
            Understanding and creating gives me purpose; whether a circuit, code, or idea, I’m wired to explore and refine.
          </p>
        </div>

        {/* <div>
          <p className="text-sm text-[#999999] font-medium mb-1 uppercase tracking-wide">tools</p>
          <p className="text-base text-white/80">
            typescript, next.js, tailwind, shadcn, node, prisma, postgresql, figma.
          </p>
        </div> */}

        <div>
          <p className="text-sm text-gray-500 font-medium mb-1 uppercase tracking-wide">education</p>
          <p className="text-base text-gray-400">
            B.S. in Electrical Engineering with a minor in Computer Science from John Brown University in Siloam Springs, Arkansas. 
            I took courses such as machine learning, artificial intelligence, embedded systems, and advanced computer programming.
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500 font-medium mb-1 uppercase tracking-wide">outside work</p>
          <p className="text-base text-gray-400">
            Outside of engineering, I find joy in the simple and meaningful things: playing and watching soccer, working out, spending time with my three energetic <Chihuahua />, and having conversations that dive into people’s passions. I’m also deeply drawn to visual art. The idea of communicating ideas, emotions, or stories through visuals fascinates me and influences how I think about technology and design.
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500 font-medium mb-1 uppercase tracking-wide">things I like</p>
          <div className="flex flex-wrap gap-x-1 gap-y-2 text-base text-gray-400">
            {[
              "Efficiency",
              "Using coffee shops as my office",
              <a href="https://open.spotify.com/user/d4ytom?si=eb9657135a574b40" className="underline" target="_blank" rel="noopener noreferrer">Good music</a>,
              "Swiss design",
              "Night coding sessions",
              "When the gym is empty",
              "Minimalism and dark mode",
              "Documentation rabbit holes",
            ].map((item, idx, arr) => (
              <span key={idx} className="after:content-['/'] last:after:content-[''] after:px-3">
                {item}
              </span>
            ))}
          </div>
        </div>


        <div>
          <p className="text-sm text-gray-500 font-medium mb-1 uppercase tracking-wide">elsewhere</p>
          <div className="flex flex-row gap-5 mt-1 text-base">
            <div onClick={handleCopy} className="group flex items-center gap-1 cursor-pointer">
              {copied ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13L9 17L19 7" className="stroke-gray-400" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg
                  style={{ transform: 'scaleX(-1)' }}
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="group-hover:stroke-gray-400"
                >
                  <path
                    d="M9 9V6.2C9 5.08 9 4.52 9.218 4.092C9.41 3.715 9.715 3.41 10.092 3.218C10.52 3 11.08 3 12.2 3H17.8C18.92 3 19.48 3 19.908 3.218C20.284 3.41 20.59 3.715 20.782 4.092C21 4.52 21 5.08 21 6.2V11.8C21 12.92 21 13.48 20.782 13.908C20.59 14.284 20.284 14.59 19.908 14.782C19.48 15 18.921 15 17.803 15H15M9 9H6.2C5.08 9 4.52 9 4.092 9.218C3.715 9.41 3.41 9.715 3.218 10.092C3 10.52 3 11.08 3 12.2V17.8C3 18.92 3 19.48 3.218 19.908C3.41 20.284 3.715 20.59 4.092 20.782C4.519 21 5.079 21 6.197 21H11.804C12.922 21 13.481 21 13.908 20.782C14.284 20.59 14.59 20.284 14.782 19.908C15 19.48 15 18.921 15 17.803V15M9 9H11.8C12.92 9 13.48 9 13.908 9.218C14.284 9.41 14.59 9.715 14.782 10.092C15 10.519 15 11.079 15 12.197V15"
                    className="stroke-gray-400"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
              <p className="text-gray-400">Email</p>
            </div>
            <a href="https://www.linkedin.com/in/daytonbaldizon/" target="_blank" className="text-gray-400">
              Linkedin
            </a>
            <a href="https://github.com/Daytuns" target="_blank" className="text-gray-400">
              Github
            </a>
            <a href="https://www.instagram.com/daytunss/" target="_blank" className="text-gray-400">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <LastPlayed />

      <Footer />
    </div>
  )
}
