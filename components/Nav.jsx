import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between sm:text-sm mt-8 text-[#9f9ea0] text-xs'>
        <p>Managua, Nicaragua</p>
        <div className='flex items-center'>
          <div className="sm:mr-2 mr-1 flex sm:h-3 sm:w-3 w-3 h-3 items-center justify-center">
            <div className="sm:h-1 sm:w-1 w-1 h-1 rounded-full bg-green-500"></div>
            <div className="absolute sm:h-2 sm:w-2 w-2 h-2 animate-ping rounded-full bg-green-500 opacity-75"></div>
          </div>
          <p className='sm:text-sm text-xs'>Available for new opportunities</p>
        </div>
    </div>
  )
}

export default Nav