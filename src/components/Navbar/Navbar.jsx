import React, { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineHealing } from 'react-icons/md'
import images from '../../constants/images'
import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.minilogo} alt="PaperLogo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#start">Start</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
        <li className="p__opensans">
          <a href="#ourhistory">Our history</a>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#FFFF"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineHealing
              fontSize={27}
              color='#fff'
              onClick={() => setToggleMenu(false)}
              className="overlay__close"
            />
            <ul className="app__navbar-smallscreen_links">
            <li className="p__opensans">
          <a href="#start">Start</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
        <li className="p__opensans">
          <a href="#ourhistory">Our history</a>
        </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar