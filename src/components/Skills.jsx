import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Golang from '../assets/golang.png';
import Tailwind from '../assets/tailwind.png';
import Postman from '../assets/postman.png';

export const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
    <div className='maw-w-[1000px] mx-10 p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#FF8401] '>Skills</p>
            <p className='py-4'>// These are some of the technologies I've worked with</p>
        </div>

{/* Container for icons */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
          <p>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Golang} alt="Github icon" />
          <p>GOLANG</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
          <p>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
          <p>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Postman} alt="Postman icon" />
          <p>POSTMAN</p>
          </div>
        </div>

    </div>
    </div>
  )
}
