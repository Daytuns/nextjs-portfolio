// components/Home.jsx
import React from 'react'
import Intro from './Intro'
import Nav from './Nav'
import Footer from './Footer'
import LastPlayed2 from './LastPlayed2'
import SelectedWork from './SelectedWork'
import AboutLink from './AboutLink'
import T3StackCard from './T3StackCard'

const Home = () => {
  return (
    <div className='flex'>
      {/* <InPageNav/> */}
      <div className="w-full max-w-xl mx-auto">
        <Nav />
        <div id='intro'><Intro /></div>
        <div id='work'><SelectedWork /></div>
        <h2 className='text-xl font-semibold mt-5 mb-5'>
          Links
        </h2>
        <div id='about' className='flex justify-start items-end gap-4'>
          <T3StackCard />
          <AboutLink />
          <LastPlayed2 />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
