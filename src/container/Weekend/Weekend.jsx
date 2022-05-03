import React from 'react'

import images from '../../constants/images'

import './Weekend.css'
const Weekend = () => {
  return (
    <div className='app__weekend'>
        <div className="app__weekend-title">
            <div className='orange-line'></div>
            <h2 className='bold-title '>The Guest House is the perfect weekend getaway cabin.</h2>
        </div>
        <div className="app__weekend-images">
            <img src={images.kitchen} alt="Kitchen" />
        </div>
    </div>
  )
}

export default Weekend