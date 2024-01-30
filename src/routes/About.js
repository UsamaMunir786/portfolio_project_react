import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage1 from '../components/HeroImage1'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage1 heading='About.' text='Im a Front-End Development.' />
      <AboutContent />
    <Footer />
    </div>
  )
}

export default About
