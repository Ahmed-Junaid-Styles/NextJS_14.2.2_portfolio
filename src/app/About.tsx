import React from 'react'
import Image from 'next/image'
// import white_tick from '@/app/images/white_tick.png'
import check from '@/app/images/check.png'

const About = () => {
    return (
        <div className='bg-gray-300 py-5' id='about'>
            <div className='mx-auto w-9/12'>

                <h2 className='text-center text-3xl font-bold py-2 2xs:text-2xl'>About</h2>
                <h3 className=' mx-auto text-center w-6/12 text-2xl my-5 sm:w-9/12 xsm:text-lg xsm:w-9/12 2xs:text-lg 2xs:w-9/12'>
                    Creating web applications with dedication and attention to every detail.
                </h3>
                <div className='w-9/12 text-lg mx-auto py-4 font-mono sm:text-base xsm:text-sm 2xs:text-sm'>
                    Hi, I&apos;m Ahmed Junaid, a passionate software developer and data scientist with a deep love for problem-solving and continuous learning. I specialize in Python, web development, and data analysis, with a strong foundation in building efficient, scalable solutions. Whether it&apos;s creating clean, user-friendly websites or diving into complex data sets to uncover meaningful insights, I thrive on tackling challenges and turning ideas into reality. I&apos;m always eager to learn new technologies and techniques to stay at the forefront of the ever-evolving tech landscape.
                    <br /><br />
                    Outside of coding, I enjoy collaborating on projects, contributing to open-source communities, and experimenting with emerging technologies. I believe in the power of teamwork and the value of sharing knowledge to drive innovation. When I&apos;m not coding or problem-solving, you&apos;ll likely find me exploring new tools, attending tech meetups, or working on personal projects. Let&apos;s connect and see how we can create something impactful together!
                </div>
                <div className='flex my-3 w-6/12 mx-auto items-center'>
                    <div className='bg-blue-400 h-8 w-8 mx-3 flex justify-center items-center xsm:w-10 xsm:h-10 2xs:w-8 2xs:h-8'><Image className='w-10' alt='' src={check}></Image></div>
                    <div className='text-sm'>
                        Frontend Developement
                    </div>
                </div>
                <div className='flex my-3 w-6/12 mx-auto items-center'>
                    <div className='bg-green-500 h-8 w-8 mx-3 flex justify-center items-center xsm:w-10 xsm:h-10 2xs:w-8 2xs:h-8'><Image className='w-10' alt='' src={check}></Image></div>
                    <div className='text-sm'>
                        Backend Developement
                    </div>
                </div>
                <div className='flex my-3 w-6/12 mx-auto items-center'>
                    <div className='bg-red-400 h-8 w-8 mx-3 flex justify-center items-center xsm:w-10 xsm:h-10 2xs:w-8 2xs:h-8'><Image className='w-10' alt='' src={check}></Image></div>
                    <div className='text-sm'>
                        Full Stack Developement
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About