import React, { Fragment } from 'react'
import data from '../../constants/data'
import './Together.css'

function Together() {
  return (
    <Fragment>
      <div className="app__together">
          <div className="app__together-wrapper container">
            <div className="app__together-wrapper_text">
              <div className="orange-line"></div>
              <h2 className="second-txt_black">Come together.</h2>
              <p className="p__blacksans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque aliquam odio et faucibus.
              </p>
            </div>
            <div className="app__together-wrapper_lixt">
              {data.together.map((item) => (
                <div className="app__together-wrapper_lixt-block">
                    <div className='app__together-wrapper_lixt-block_icon'>
                        <img key={item.icon} src={item.icon} alt="Icon" />
                    </div>
                 
                  <p className="p__blacksans" key={item.txt}>
                    {item.txt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default Together
