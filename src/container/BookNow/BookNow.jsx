import React from 'react'

import images from '../../constants/images'

import './BookNow.css'
const BookNow = () => {
  return (
    <div className='app__bookNow'>
        <div className='orange-line'></div>
        <div className="app__bookNow-container flex__start">
        <div className="app__bookNow-container_block">
            <p className='p__sansgrey'>The Guest House is the perfect weekend get-away housing. Located in the Norwegian archipelago, Lofoten, it's a great escape from the hustle and bustle of the city. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</p>
        </div>
        <div className="app__bookNow-container_block">
            <p className='p__sansgrey'>Below you'll find information about the accommodation and what's included in the price. Don't hesitate to reach out to us vi the contact page if you have any questions around your stay.</p>
            <button className='app__button'>Book now</button>
        </div>
        </div>
    </div>
  )
}

export default BookNow