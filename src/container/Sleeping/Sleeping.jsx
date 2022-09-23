import React, { Fragment } from 'react'
import './Sleeping.css'
import data from '../../constants/data'

function Sleeping() {
  return (
    <Fragment >
      <div className="app__sleep">
      <div className="container">
        <div className="app__sleep-title flex__center-column">
          <div class="orange-line"></div>
          <h2 className="second-txt_black">Sleeping arrangements.</h2>
          <p className='p__blacksans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</p>
        </div>
        <div className="app__sleep-projects">
          {data.arrangements.map((item) => (
            <div className="app__sleep-project_block">
              <img key={item.icon} src={item.icon} alt="Icon" />
              <h3 className='third-txt'   key={item.title}>{item.title}</h3>
              <p className='p__blacksans'  key={item.txt}>{item.txt}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Sleeping