import React from 'react'
import images from '../../constants/images'
import { FiFacebook } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { Mail } from '../../components'
import './Footer.css'

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer-main container">
        <div className="app__footer-main_social">
          <ul className="app__footer-main_social-links">
            <li className="app__footer-main_social-links_link">
              <h3 className='p__opensans'>Pages</h3>
            </li>
            <li className="app__footer-main_social-links_link">
              <a href="#Start">Start</a>
            </li>
            <li className="app__footer-main_social-links_link">
              <a href="#Contact">Contact</a>
            </li>
            <li className="app__footer-main_social-links_link">
              <a href="#Our history">Our history</a>
            </li>
            <li className="app__footer-main_social-links_link">
              <a href="#Licenses">Licenses</a>
            </li>
            <li className="app__footer-main_social-links_link">
              <a href="#Instructions">Instructions</a>
            </li>
            <li className="app__footer-main_social-links_link">
              <a href="#Style guide">Style guide</a>
            </li>
          </ul>
          <div className="app__footer-main_social-s">
            <h3 className='p__opensans'>Social media</h3>
            <ul className='app__footer-main_social-s_link'>
              <li className='app__footer-main_social-s_link-item p__opensans'>
                <a href="#Facebook">
                  <FiFacebook color="#FFFF" fontSize={27} />
                </a>
              </li>
              <li className='app__footer-main_social-s_link-item p__opensans'>
                <a href="#Instagram">
                  <FiInstagram color="#FFFF" fontSize={27} />
                </a>
              </li>
              <li className='app__footer-main_social-s_link-item p__opensans'>
                <a href="#Twitter">
                  <FiTwitter color="#FFFF" fontSize={27} />
                </a>
              </li>
            </ul>
          </div>
          <div className="app__footer-main_social-mail">
            <h3 className='p__opensans'>Newsletter</h3>
            <p className='p__opensans'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <Mail />
          </div>
        </div>
        <div className="app__footer-main_copy">
          <div>
            <img src={images.biglogo} alt="Logo" />
          </div>
          <p className='p__opensans'>
            © Guest House, LLC. All rights reserved. Powered by MilkaBaldiDev
          </p>
          <p className='p__opensans'>+47 (0) 702 88 12 34</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
