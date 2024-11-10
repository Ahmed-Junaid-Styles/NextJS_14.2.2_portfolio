import React from 'react'
import SkillCard from './SkillCard'
import HTML_logo from '@/app/images/HTML_logo.png'
import CSS_logo from '@/app/images/CSS_logo.png'
import JS_logo from '@/app/images/JS_logo.png'
import TS_logo from '@/app/images/TypeScript_logo.png'
import Python_logo from '@/app/images/Python_logo.png'
import PHP_logo from '@/app/images/PHP_logo.png'
import Tailwind_logo from '@/app/images/Tailwind_logo4.png'
import React_logo from '@/app/images/React_logo.png'
import Next_logo from '@/app/images/NextJS_logo.png'


const Skills = () => {
  
  return (
    <div className='bg-gray-300' id='skills'>
      <div className='w-9/12 mx-auto flex flex-col items-center xsm:w-auto 2xs:w-auto'>
        <h2 className='text-center text-3xl font-bold mb-7'>Skills</h2>
        <SkillCard src={HTML_logo} skillname='HTML' percentage='90%'/>
        <SkillCard src={CSS_logo} skillname='CSS' percentage='75%'/>
        <SkillCard src={JS_logo} skillname='JS' percentage='80%'/>
        <SkillCard src={TS_logo} skillname='TS' percentage='80%'/>
        <SkillCard src={Tailwind_logo} skillname='Tailwind' percentage='70%'/>
        <SkillCard src={Python_logo} skillname='Python' percentage='90%'/>
        <SkillCard src={PHP_logo} skillname='PHP' percentage='75%'/>
        <SkillCard src={React_logo} skillname='React JS' percentage='80%'/>
        <SkillCard src={Next_logo} skillname='Next JS' percentage='75%'/>
      </div>
    </div>
  )
}

export default Skills