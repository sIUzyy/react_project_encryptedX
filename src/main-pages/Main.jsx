//main component, render all of the component

import React from 'react'
import Landing from '../pages/Landing'
import About from '../pages/About'
import Team from '../pages/Team'
import Pricing from '../pages/Pricing'
import Contact from '../pages/Contact'

const Main = () => {
  return (
    <>
    <Landing/>
    <About/>
    <Team/>
    <Pricing/>
    <Contact/>
    </>
  )
}

export default Main
