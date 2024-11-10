"use client"
import React from 'react'


function scrollToElement(id :string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}


const Nav = () => {
  return (
    <div>
        <header className='flex justify-center bg-gray-600 h-14 text-white'> 
            <nav className='flex justify-between items-center h-14 w-9/12 text-lg'>
                <div className='text-2xl'>Ahmed Junaid</div>
                <div className='flex justify-around w-6/12 '>
                    <span className='cursor-pointer hover:text-blue-300' onClick={() => scrollToElement('home')}>Home</span>
                    <span className='cursor-pointer hover:text-blue-300' onClick={() => scrollToElement('about')}>About</span>
                    <span className='cursor-pointer hover:text-blue-300' onClick={() => scrollToElement('services')}>Services</span>
                    <span className='cursor-pointer hover:text-blue-300' onClick={() => scrollToElement('skills')}>Skills</span>
                    <span className='cursor-pointer hover:text-blue-300' onClick={() => scrollToElement('contact')}>Contact US</span>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Nav