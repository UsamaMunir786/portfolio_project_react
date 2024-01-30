import './Footer.css'

import React from 'react'
import {FaHome, FaMailBulk, FaPhone, FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-container'>
       <div className='left'>
        <div className='location'>
            <FaHome size={20} style={{color:'white', marginRight: '1rem'}} />
        
        <div>
          <p>123 Housing Society.</p><p>Lahore</p>
        </div>
        </div>
        <div className='phone'>
           <h4>
            <FaPhone size={20} style={{color:'white', marginRight: '1rem'}} />
            1-2346-3744-34
            </h4>
        </div>
        <div className='email'>
           <h4>
            <FaMailBulk size={20} style={{color:'white', marginRight: '1rem'}} />
            info@.com
            </h4>
        </div>

       </div> 
    
    <div className='right'>
      <h4>About the company</h4>
      <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est  in, itaque ipsam placeat eius quaerat omnis consequatur   aspernatur ut.</p>
      <div className='social'>
      <FaFacebook
       size={30} style={{color:'white', marginRight: '1rem'}} 

       />
      <FaTwitter 
      size={30} style={{color:'white', marginRight: '1rem'}}
       />
      <FaLinkedin
       size={30} style={{color:'white', marginRight: '1rem'}} 

      />

      </div>
    </div> 
    </div>
    </div>
      
    
  )
}

export default Footer
