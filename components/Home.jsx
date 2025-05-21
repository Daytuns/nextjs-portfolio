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
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Nav />
      <Intro />
      {/* <Projects /> */}
      <SelectedWork />
      <Skills />
      <About />
      <LastPlayed /> 
      <Footer />
    </div>
  )
}

export default Home
