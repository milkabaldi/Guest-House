import React from 'react'

import { Navbar, } from './components'
import { GuestHouse, BookNow, Weekend, Sleeping } from './container';

import './App.css';




export const App = () => {
  return (
    <div>
      <Navbar />
      <GuestHouse />
      <BookNow />
      <Weekend />
      <Sleeping />
    </div>
  )
}


export default App;
