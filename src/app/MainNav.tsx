"use client"
import React from 'react'
import '@/app/Testnav.css'

function scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


function myFunction() {
    const x = document.getElementById("myTopnav") as HTMLElement;
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const TestNav = () => {
    return (
        <div>
            <div>
                <div className="topnav" id="myTopnav">
                    <span className="active cursor-pointer" onClick={() => scrollToElement('home')}>Home</span>
                    <span className='cursor-pointer' onClick={() => scrollToElement('about')}>About</span>
                    <span className='cursor-pointer' onClick={() => scrollToElement('services')}>Services</span>
                    <span className='cursor-pointer' onClick={() => scrollToElement('skills')}>Skills</span>
                    <span className='cursor-pointer' onClick={() => scrollToElement('contact')}>Contact</span>
                    <span className='cursor-pointer icon' onClick={myFunction}>More </span>
                </div>
            </div>
        </div>
    )
}

export default TestNav