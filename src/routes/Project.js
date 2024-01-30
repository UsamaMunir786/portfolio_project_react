import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage1 from '../components/HeroImage1'
import Card from '../components/Card'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
    <Navbar />
    <HeroImage1 heading='Project.' text='Some my most recent works' />
    <Work />
    <Card />
    <Footer />
    </div>
  )
}

export default Project
