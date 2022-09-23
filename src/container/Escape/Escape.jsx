import React, { Fragment } from 'react'
import './Escape.css'
import data from '../../constants/data'

function Escape() {
  return (
    <Fragment >
      <div className="app__escape">
      <div className="container">
        <div className="app__escape-title flex__start-column">
          <div class="orange-line"></div>
          <h2 className="second-txt_black">Sleeping arrangements.</h2>
          <p className='p__blacksans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</p>
        </div>
        <div className="app__escape-projects">
          {data.escape.map((item) => (
            <div className="app__escape-project_block">
              <div className='app__escape-project_block-image'>
                <img key={item.icon} src={item.icon} alt="Icon" />
              </div>
              
              <div className='app__escape-project_block-txt'>
                <h3 className='third-txt'   key={item.title}>{item.title}</h3>
                <p className='p__blacksans'  key={item.txt}>{item.txt}</p>
              </div>
              
            </div>
          ))}
        </div>
        </div>
      </div>
    </Fragment>
  )
}


export default Escape