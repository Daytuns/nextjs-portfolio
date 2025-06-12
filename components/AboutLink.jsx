import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const AboutLink = () => {
  return (
    <div className="mb-16 flex flex-row">
      <Link
        href="/about"
        target="_blank"
        className="group w-[11rem] relative overflow-hidden shadow-2xl lg:h-[284px] lg:rounded-2xl lg:p-2 rounded-2xl h-[300px] transition-all"
        draggable={false}
        >
        {/* Background Image */}
        <div className='absolute inset-2 z-0 rounded-t-2xl rounded-b-2xl'>
            <Image
            src="/profile.jpg"
            alt="Picture of the author"
            fill
            className='object-cover rounded-t-[100px] rounded-b-2xl'
            style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 2%)',
            }}
            />
        </div>

        {/* Gradient Overlay */}
        <div
        className="absolute inset-2 z-10 h-[83px] backdrop-blur-xl object-cover"
        style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 44%, rgba(0,0,0,0.6) 95%, rgba(0,0,0,0.6) 100%)',
        }}
        />


        {/* Content */}
        <div className="relative z-20 flex flex-col items-center h-full justify-start pt-3 px-4 text-center">
            <h3 className="text-white font-semibold mb-1">About Me</h3>
            <p className="text-white/70 text-sm">Built with curiosity. Shaped by code.</p>
            <button className="mt-3 cursor-pointer rounded-xl bg-blue-500 text-white px-4 py-1 text-[10px] font-medium transition-transform duration-300 group-hover:scale-110">
                Learn more
            </button>
        </div>
      </Link>

    </div>
  )
}

export default AboutLink
