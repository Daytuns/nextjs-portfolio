import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between font-light text-sm mt-16 text-[#777a81]'>
        <p>Based in Managua, Nicaragua</p>
        <div className='flex items-center'>
          <div className="mr-2 flex h-3 w-3 items-center justify-center">
            <div className="h-1 w-1 rounded-full bg-green-500"></div>
            <div className="absolute h-2 w-2 animate-ping rounded-full bg-green-500 opacity-75"></div>
          </div>
          <p>Currently available for new opportunities</p>
        </div>
    </div>
  )
}

export default Nav