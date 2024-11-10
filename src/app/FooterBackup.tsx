"use client"
import React from 'react'


function scrollToElement(id :string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

const Footer2 = () => {
  return (
    <div className='bg-gray-700'>
        <div className='w-9/12 py-16 text-white grid grid-cols-5 mx-auto'>
            <div className='cursor-pointer text-center text-xl font-medium my-2' onClick={() => scrollToElement('home')}>Home</div>
            <div className='w-1 bg-white text-center mx-auto my-1'></div>
            <div className='cursor-pointer text-center text-xl font-medium my-2' onClick={() => scrollToElement('about')}>About</div>
            <div className='w-1 bg-white text-center mx-auto my-1'></div>
            <div className='cursor-pointer text-center text-xl font-medium my-2' onClick={() => scrollToElement('services')}>Services</div>
            
            <div className='cursor-pointer text-center text-xl font-medium my-2' onClick={() => scrollToElement('skills')}>Skills</div>
            <div className='w-1 bg-white text-center mx-auto my-1'></div>
            <div className='cursor-pointer text-center text-xl font-medium my-2' onClick={() => scrollToElement('contact')}>Contact Us</div>
        </div>
    </div>
  )
}

export default Footer2