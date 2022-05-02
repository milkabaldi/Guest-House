import React from 'react'
import images from '../../constants/images'
import './GuestHouse.css'

const GuestHouse = () => {
  return (
    <div
      className="app__house flex__center"
      style={{ backgroundImage: `url(${images.firsthome})` }}
    >
      <img
        src={images.biglogo}
        alt="BigLogo"
        className="app__house-logo"
      />
      <h2 className="second-txt">
        Experience the perfect combination of modern housing & natural scenery.
      </h2>
      <p className="p__opensans p__gray">Located in Lofoten, norway</p>
      <div className="app__house-bottom">
        <img src={images.mouse} alt="Mouse" />
      </div>
    </div>
  )
}

export default GuestHouse
