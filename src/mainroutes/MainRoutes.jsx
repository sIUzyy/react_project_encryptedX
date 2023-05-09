import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Error from '../components/Error'

import Landing from '../pages/Landing'
import About from '../pages/About'
import Team from '../pages/Team'
import Pricing from '../pages/Pricing'
import Contact from '../pages/Contact'
import Main from '../main-pages/Main'

const MainRoutes = () => {
  return (
    <>
        <Router>

            <Navbar/>

            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/home' element={<Landing/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/team' element={<Team/>} />
                <Route path='/pricing' element={<Pricing/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='*' element={<Error/>} />

            </Routes>

            <Footer/>

        </Router>

    </>
  )
}

export default MainRoutes