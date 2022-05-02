import React from 'react'

import { Navbar, } from './components'
import { GuestHouse, BookNow } from './container';

import './App.css';




export const App = () => {
  return (
    <div>
      <Navbar />
      <GuestHouse />
      <BookNow />
    </div>
  )
}


export default App;
