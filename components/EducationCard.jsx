import React from 'react'
import Image from 'next/image'

const EducationCard = () => {
  return (
        <div className='rounded-lg border border-gray-800/50 w-1/2 p-4 flex gap-5'>
            <Image
                className='rounded-lg object-cover'
                src={'/jbu.png'}
                width={65}
                height={65}
                style={{
                objectFit: 'cover',
                borderRadius: '8px',
            }}
            />
            <div className='flex flex-col'>
                <h1 className='text-sm'>Baschelor of Science in Electrical Engineering</h1>
                <h2 className='text-[#777a81] text-sm'>John Brown University</h2>
            </div>

        </div>
  )
}

export default EducationCard