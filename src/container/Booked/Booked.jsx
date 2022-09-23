import React from 'react'

import './Booked.css'

const Booked = () => {
  return (
    <div className='app__booked'>
        <div className="app__booked-main">
          <div class="orange-line"></div>
          <h2 className='second-txt_black'>We're already booked up for the spring — hurry up & secure your stay for the summer.</h2>
          <p className='p__blacksans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
          <div className="app__booked-main_btn">
            <button className='app__button'>Contact</button>
            <button className='app__button'>Book now</button>
          </div>
        </div>
    </div>
  )
}

export default Booked