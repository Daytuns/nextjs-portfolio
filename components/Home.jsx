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
import InPageNav from './InPageNav'

const Home = () => {
  return (
    <div className='flex'>
      <InPageNav/>
      <div className="w-full max-w-xl mx-auto">
        <Nav />
        <div id='intro'><Intro /></div>
        {/* <Projects /> */}
        <div id='work'><SelectedWork /></div>
        {/* <Skills /> */}
        <div id='about'><About />
        <LastPlayed /></div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
