"use client"
import React from 'react'
import Image from 'next/image'
import Github from '@/app/images/git_hub_icon.png'
import Linked_in from '@/app/images/linked_in_icon.png'
import Instagram from '@/app/images/instagram_icon.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-gray-700'>
        <div className='w-9/12 py-16 flex flex-col items-center text-white mx-auto'>
            <div className='flex justify-center'>
              <Link href={'https://github.com/Ahmed-Junaid-Styles'}> <Image className='w-10 h-10 mx-4 mb-4 rounded-full 2xs:mx-2 2xs:h-8 2xs:w-8 sm:h-10 sm:w-10' alt='' src={Github}/></Link>
              <Link href={'https://www.linkedin.com/in/ahmed-junaid-11b918225/'}> <Image className='w-10 h-10 mx-4 mb-4 rounded-full 2xs:mx-2 2xs:h-8 2xs:w-8 sm:h-10 sm:w-10' alt='' src={Linked_in}/></Link>
              <Link href={'https://www.instagram.com/ahmedjunaid980/'}> <Image className='w-10 h-10 mx-4 mb-4 rounded-full 2xs:mx-2 2xs:h-8 2xs:w-8 sm:h-10 sm:w-10' alt='' src={Instagram}/></Link>
            </div>
            <div className='text-center 2xs:text-sm xsm:text-base sm:text-lg'>
            &copy; 2024 Ahmed Junaid Portfolio. All right reserved.
            </div>
        </div>
    </div>
  )
}

export default Footer