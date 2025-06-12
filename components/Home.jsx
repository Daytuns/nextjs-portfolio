// components/Home.jsx
import React from 'react'
import Intro from './Intro'
import Projects from './Projects'
import Nav from './Nav'
import About from './About'
import Footer from './Footer'
import Skills from './Skills'
import LastPlayed from './LastPlayed' 
import LastPlayed2 from './LastPlayed2'
import SelectedWork from './SelectedWork'
import InPageNav from './InPageNav'
import AboutLink from './AboutLink'
import TechGrid from './TechGrid'
import T3Card from './T3Card'

const Home = () => {
  return (
    <div className='flex'>
      {/* <InPageNav/> */}
      <div className="w-full max-w-xl mx-auto">
        <Nav />
        <div id='intro'><Intro /></div>
        {/* <Projects /> */}
        <div id='work'><SelectedWork /></div>
        {/* <TechGrid /> */}
        {/* <Skills /> */}
        <div id='about' className='flex justify-start items-end gap-4'>
          {/* <About /> */}
          {/* <LastPlayed />  */}
          {/* <T3Card /> */}
          <LastPlayed2 />
          <AboutLink />
          {/* <LastPlayed /> */}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
