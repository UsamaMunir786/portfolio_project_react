import { Link } from 'react-router-dom'
import './Card.css'

import React from 'react'

const Card = () => {
  return (
    <div className='pricing'>
    <div className='card-container'>
        <div className='card'>
            <h3>- Basic -</h3>
            <span className='bar'></span>
            <p className='btc'>$ 100</p>
            <p>- 3 Days -</p>
            <p>- 3 Pages -</p>
            <p>- 3 Featured -</p>
            <Link to='/contact' className='btn'>PURCHASE NOW</Link>
        </div>
        <div className='card'>
            <h3>- Basic -</h3>
            <span className='bar'></span>
            <p className='btc'>$ 200</p>
            <p>- 2 Days -</p>
            <p>- 5 Pages -</p>
            <p>- 3 Featured -</p>
            <Link to='/contact' className='btn'>PURCHASE NOW</Link>
        </div>
        <div className='card'>
            <h3>- Basic -</h3>
            <span className='bar'></span>
            <p className='btc'>$ 500</p>
            <p>- 3 Days -</p>
            <p>- 7 Pages -</p>
            <p>- 3 Featured -</p>
            <Link to='/contact' className='btn'>PURCHASE NOW</Link>
        </div>
    </div>
 
    </div>
  )
}

export default Card
