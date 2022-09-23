import React from 'react'
import { Fragment } from 'react'
import data from '../../constants/data'
import './Reviews.css'

function Reviews() {
  return (
    <Fragment>
      <div className="app__opinion">
        <div className="app__opinion-main container">
          <div className="app__opinion-main-title flex__center-column">
          <div class="orange-line"></div>
          <h2 className="second-txt_black">Past guests.</h2>
          <p className='p__blacksans'>Don't take our word for it! Have a look at what our previous guests say about their stay at the Guest House.</p>
          </div>
          <div className="app__opinion-main-reviews">
          {data.opinion.map((item) => (
            <div className="app__opinion-main-review">
              <div className="opinion-main-review_stars" key={item.star}>
                {item.star}
              </div>
              <h3 className='third-txt' key={item.title}>{item.title}</h3>
              <p className='p__blacksans' key={item.text}>{item.text}</p>
              <span className='p__blacksans' key={item.name}>{item.name}</span>
            </div>
          ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Reviews
