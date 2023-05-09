import React from 'react'
import mainImg from '../assets/landing-img.webp'

const Landing = () => {
  return (
  //   <div className='bg-white text-black mt-10 mb-0 '>

  //       <img className='w-full' src={mainImg} alt='' />
        
  //   <div className='mx-auto max-w-7xl px-6 lg:px-8'>
  //   <h1>dsa</h1>
    



  //   </div>
  
  
  // </div>
  <div id='home' className='bg-white text-black mt-10 mb-0 relative'>
  <img className='w-full blur md:blur-md' src={mainImg} alt='' />
  <div className='absolute top-10 left-0 right-0 bottom-0 flex items-center justify-center'>
    <div className='text-center text-white uppercase font-landing'>
      <h1 className='text-2xl text-[#E2DE84] md:text-6xl'>Welcome to Encryptedx </h1>
      <p className='text-sm text-[#E2DE84] md:text-lg'>The Ultimate Data Security Solution!</p>
    </div>
  </div>
</div>

  )
}

export default Landing