import React from 'react'
import Chihuahua from './ChihuahuaPopover'

const About = () => {
  return (
    <div className='mt-15 mb-5'>
        <p className='text-large'>About me. <span className='text-[#777a81]'>My education and things I like.</span></p>
        <p className='mt-10 text-[#777a81]'>
            <span className='font-semibold text-white'>Curiosity.&nbsp; Persistence.&nbsp; Adaptability. </span>
            These three words drive how I approach life, learning, and problem-solving. <br /> <br />
            I graduated from <span className='text-gray-300'>John Brown University</span> in Siloam Springs, Arkansas, where I earned a Bachelor of Science in <span className='text-gray-300'>Electrical Engineering</span> with a minor in <span className='text-gray-300'>Computer Science</span>. During this time I had the opportunity to learn across disciplines, from embedded systems to creative design. <br /><br />
            Outside of engineering, I find joy in the simple and meaningful things: playing and watching soccer, working out, spending time with my three energetic <Chihuahua />, and having conversations that dive into people’s passions. I’m also deeply drawn to visual art. The idea of communicating ideas, emotions, or stories through visuals fascinates me and influences how I think about technology and design. <br /><br />
            Whether it’s through code, circuits, or conversations, I’m always seeking to grow, connect, and contribute.
        </p>
    </div>
  )
}

export default About