import React from 'react'
import Image from 'next/image'

const ServiceCard = (props: any) => {
  return (
    <div className='w-9/12 mx-auto py-6 xsm:w-auto 2xs:w-auto'>
        <div className='flex flex-col w-6/12 mx-auto bg-gray-600 text-white py-14 rounded-xl sm:w-9/12 2xl:w-6/12 xsm:w-9/12 2xs:w-9/12'>
            <div className='flex justify-center'><Image alt='' className='w-16 h-16 rounded-full mb-4' src={props.logo}/></div>
            <h2 className='text-center font-bold text-lg py-2'>{props.heading}</h2>
            <div className='text-center w-9/12 mx-auto'>{props.detail} </div>
        </div>
    </div>
  )
}

export default ServiceCard