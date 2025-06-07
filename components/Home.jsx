// components/Home.jsx
import React from 'react'
import Intro from './Intro'
import Projects from './Projects'
import Nav from './Nav'
import About from './About'
import Footer from './Footer'
import Skills from './Skills'
import LastPlayed from './LastPlayed' 
import SelectedWork from './SelectedWork'

const Home = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Nav />
      <Intro />
      {/* <div className='mt-20'>
        <div className="border-b border-black"></div>
        <div className="border-b border-[#171717]"></div>
      </div> */}
      {/* <Projects /> */}
      <SelectedWork />
      {/* <Skills /> */}
      <About />
      <LastPlayed /> 
      <Footer />
    </div>
  )
}

export default Home
