//footer page....

import React from 'react'
import { Link } from 'react-scroll'

import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer-section bg-[#02010A] '>

        <div className='text-white py-5 flex flex-col mx-5 md:justify-between md:flex-row  md:items-center xl:max-w-5xl xl:mx-auto '>

            <div>
             <Link to='home' smooth={true} duration={500}>  <h1 className='font-main tracking-widest text-[#FC7A57]'>EncryptedX</h1></Link> 
            </div>

            <div className='font-footer text-[#B7B3A1] md:flex '>
            <Link to='about' smooth={true} duration={500}><h1 className='mt-5 md:mt-0 md:mr-5'>About</h1></Link> 
            <Link to='team' smooth={true} duration={500}><h1 className='mt-5 md:mt-0 md:mr-5'>Team</h1></Link> 
            <Link to='pricing' smooth={true} duration={500}><h1 className='mt-5 md:mt-0 md:mr-5'>Pricing</h1></Link> 
            <Link to='contact' smooth={true} duration={500}><h1 className='mt-5 md:mt-0'>Contact Us</h1></Link> 
            </div>

            <div className='flex mt-5 md:mt-0'>
                <BsFacebook className='mr-5' size={25} />
                <BsTwitter className='mr-5' size={25} />
                <BsInstagram size={25} />
            </div>



        </div>
        

        
    </div>
  )
}

export default Footer
