import React from 'react'
import ServiceCard from './ServiceCard'
import web_dev_logo from '@/app/logos/web_dev_logo.png'
import ux_ui_logo from '@/app/logos/ux_ui_logo.png'
import e_commerce_logo from '@/app/logos/e_commerce_logo3.png'
import database_logo from '@/app/logos/database_logoo.png'
import dsa_python_logo from '@/app/logos/dsa_python_logo.png'

const Services = () => {
  return (
    <div className='bg-gray-300 py-10' id='services'>
        <h2 className='font-bold text-center mb-3 text-3xl'>Services</h2>
        <div>
        <ServiceCard logo={web_dev_logo} heading='Web Development' detail='My web application offers a range of services designed to provide a solution'/>
        <ServiceCard logo={ux_ui_logo} heading='UX UI' detail='I specialize in providing top-notch UX/UI design services to help you create user-friendly digital experiences'/>
        <ServiceCard logo={e_commerce_logo} heading='E-commerce Website' detail='I provide professional e-commerce website services with suitable animations.'/>
        <ServiceCard logo={database_logo} heading='Database Solution' detail='My services include database setup, optimization, and maintainence to keep your online store running smoothly'/>
        <ServiceCard logo={dsa_python_logo} heading='DSA with Python' detail='I provide tutoring and guidance in Data Structures and Algorithms using Python, helping you master key concepts and improve problem-solving skills for coding interviews and beyond.'/>
        </div>
    </div>
  )
}

export default Services