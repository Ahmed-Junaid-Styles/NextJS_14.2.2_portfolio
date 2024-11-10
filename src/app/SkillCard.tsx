import React from 'react'
import Image from 'next/image'

const SkillCard = (props: {src: any, skillname: string, percentage: string}) => {
  return (
    <div className='w-6/12 text-white my-3 sm:w-9/12 2xl:w-6/12 xsm:w-9/12 2xs:w-9/12'>
        <div className='h-56 p-6 bg-gray-600 flex flex-col items-center rounded-xl'>
            <div className=''><Image className='rounded-full' width={90} alt='' height={90} src={props.src}/></div>
            <div className='text-xl my-3 sm:text-lg'>{props.skillname}</div>
            <div className='bg-green-600 text-xl w-6/12 text-center rounded-md sm:text-lg xsm:w-9/12 2xs:w-9/12'>{props.percentage}</div>
        </div>
    </div>
  )
}

export default SkillCard