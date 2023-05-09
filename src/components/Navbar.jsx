import React, {useState} from 'react'
import logo from '../assets/en-logo-white.webp'
import {  Link  } from 'react-scroll'

import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='bg-black text-white fixed top-0 left-0 right-0 z-50'>

        <div className='mx-auto max-w-7xl p-6 lg:py-5'>

        <div className='flex items-center justify-between'>

        <div className='flex items-center'>
        <img className='w-8 h-8 mr-2' src={logo} alt='logo' />
        <Link to='home'  smooth={true} duration={500} className='font-main tracking-widest'>EncryptedX</Link>
        </div>

        <div className='hidden font-main tracking-widest md:flex'>
          <Link to='home' smooth={true} duration={500} className='mx-2 md:mx-5'>Home</Link>
          <Link to='about' smooth={true} duration={500} className='mx-2 md:mx-5'>About</Link>
          <Link to='team' smooth={true} duration={500} className='mx-2 md:mx-5'>Team</Link>
          <Link to='pricing' smooth={true} duration={500} className='mx-2 md:mx-5'>Price</Link>
          <Link to='contact' smooth={true} duration={500} className='mx-2 md:mx-5'>Contact</Link>
        </div>

        <div onClick={handleNav} className='md:hidden'>
          {nav ? <AiOutlineClose size={25}/> : <RxHamburgerMenu size={25}/>}
        </div>

        <div className={nav ? 'fixed top-0 bg-black left-0 w-[70%] h-full border-r border-r-gray-900 ease-in-out duration-500 ' : 'fixed left-[-100%]'}>
        <div className='flex items-center pt-6 px-4'>
        <img className='w-8 h-8 mr-2' src={logo} alt='logo' />
        <Link to='home' smooth={true} duration={500}>
        <h1 className='font-main tracking-widest'>Encrypted<span className='text-red-500'>X</span></h1>
        </Link>
        </div>

        <div className='p-6 font-main tracking-widest'>
          <Link to='home' smooth={true} duration={500}>
          <h1 className='py-4 border-b border-gray-600'>Home</h1>
          </Link>

          <Link to='about' smooth={true} duration={500}>
          <h1 className='py-4 border-b border-gray-600'>About</h1>
          </Link>

          <Link to='team' smooth={true} duration={500}>
          <h1 className='py-4 border-b border-gray-600'>Team</h1>
          </Link>

          <Link to='pricing' smooth={true} duration={500}>
          <h1 className='py-4 border-b border-gray-600'>Price</h1>
          </Link>

          <Link to='contact' smooth={true} duration={500}>
          <h1 className='py-4 '>Contact</h1>
          </Link>
          </div>

        </div>


        </div>


        </div>
    </div>
  )
}

export default Navbar 