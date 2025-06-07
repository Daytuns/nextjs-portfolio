import React from 'react'

const Footer = () => {
  return (
    <>
    <div>
          <div className="border-b border-black"></div>
          <div className="border-b border-[#171717]"></div>
    </div>
    <div className='flex justify-between py-8'>
        <p className='text-xs text-[#9f9ea0]'>&copy; 2025 Dayton Baldizón</p>
        <div className='flex flex-row items-center'>
          <p className="text-xs text-[#9f9ea0]">May '25</p>
        </div>
    </div>
    </>
  )
}

export default Footer