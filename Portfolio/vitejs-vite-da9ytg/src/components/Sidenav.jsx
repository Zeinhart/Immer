import React, { useState } from 'react';
import {AiOutlineMenu, AiOutlineHome, AiOutlineMail, } from 'react-icons/ai'
import { GiSkills } from "react-icons/gi";
import { BsFileEarmarkCode } from "react-icons/bs";

const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav);
    }

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
  {
     nav ? (
      <div className='fixed w-full h-screen bg-white/100 flex-col justify-center item-center z-20'> 
        <a  onClick={handleNav} href="#main" className='w-[75%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
          <AiOutlineHome size={20} />
          <span className='pl-4'>Home</span>
            </a>

            <a onClick={handleNav} href="#skills" className='w-[75%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
          <GiSkills size={20} />
          <span className='pl-4'>Skills</span>
            </a>

            <a  onClick={handleNav} href="#projects" className='w-[75%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <BsFileEarmarkCode size={20} />
          <span className='pl-4'>Projects</span>
            </a>   

        </div>
        )
        :(
         ''
        )
  } 
   <div className='md:block hidden fixed top-[25%] z-10'>
      <div className='flex flex-col'>
        <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
          <AiOutlineHome size={20}/>
        </a>
        <a href="#skills" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
          <GiSkills size={20}/>
        </a>
        <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
        <BsFileEarmarkCode size={20}/>
        </a>
      </div>
    </div>


      </div>
  )
}


export default Sidenav;