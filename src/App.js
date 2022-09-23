import React from 'react'

import { Navbar, } from './components'
import { GuestHouse, BookNow, Weekend, Sleeping, Reviews, Together, Booked, Footer } from './container';

import './App.css';
import Escape from './container/Escape/Escape';




export const App = () => {
  return (
    <>
      <Navbar />
      <GuestHouse />
      <BookNow />
      <Weekend />
      <Sleeping />
      <Escape />
      <Reviews />
      <Together />
      <Booked />
      <Footer />
    </>
  )
}


export default App;
