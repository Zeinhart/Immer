import React from 'react'
import SkillItem from './SkillItem'
const data = [
  {

    title:'Front-End',
    details:'ReactJS, Html, Css BoothStrap, Yarn, tailWindCss'
  },
  {
    title:'Back-End',
    details:'PHP, MySQL, SQL'
  },
  {
    title:'Languages',
    details:'C#, C++,JavaScript, Java, Phython'
  }

]
const Skills = () => {
  return (
    <div id='skills' className='max-w-[1040px] m-auto md:pl-20 p-4 py-12'> 
      <h1 href="#skill" className='text-4xl font-bold text-center text-[#001b5e]'> Skills </h1>
      {data.map((item, idx) => (
        <SkillItem 
        key={idx}
        title={item.title}
        details={item.details}
        />
      ))}
    </div>
  )
}

export default Skills;