import React from 'react'
import MainNav from './MainNav'
import Home from './Home'
import About from './About'
import Services from './Services'
import Skills from './Skills'
import ContactUs from './ContactUs'
import Footer from './Footer'



const Main = () => {
  return (
    <div>
      <MainNav/>
      <Home/>
      <About/>
      <Services/>
      <Skills/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Main