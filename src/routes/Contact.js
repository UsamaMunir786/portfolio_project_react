import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage1 from '../components/HeroImage1'
import Form from '../components/Form'


const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage1 heading='Contact' text='chat me..'/>
      <Form />
    <Footer />
    </div>
  )
}  

export default Contact
