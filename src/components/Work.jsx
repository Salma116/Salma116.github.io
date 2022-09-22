import React from 'react'
import AdaHub from '../assets/adahub.png';
import realEstate from '../assets/realestate.jpg';
import adaDemo from '../assets/demo-adahub.mov';
import { useState } from "react";
import Modal from './Modal';

export const Work = () => {
    
  return (
    <div name='work' className='w-full :h-screen text-[#8892b0] bg-[#D5E4F0]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl m-4 font-bold inline border-b-4 text-[#0a192f] border-[#FF8401]'>Work</p>
                <p className='py-6'>// Check out some of my recent work... This part is still in progress!</p>
            </div>
    {/* Container */}
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        {/* Grid Item */}
        <div
        style={{ backgroundImage: `url(${AdaHub})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >

            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                AdaHub social network
                </span>
                <div className='pt-8 text-center'>  
                    <Modal label= "Demo"/>
                <a href="https://github.com/ada-social-network" target="_blank" rel="noopener noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 ml-4 bg-white text-gray-700 font-bold text-lg hover:bg-gray-400'>
                    Code
                    </button>
                </a>
            </div>
        </div>
    </div>

{/*            Grid Item 
        <div
        style={{ backgroundImage: `url(${realEstate})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >

             Hover effects 
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
                </span>
            <div className='pt-8 text-center'>
                <a href="/" >
                    <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                    </button>
                </a>
                <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 ml-4 bg-white text-gray-700 font-bold text-lg'>
                    Code
                    </button>
                </a>
            </div>
            </div>
        </div>


          Grid Item 
         <div
        style={{ backgroundImage: `url(${realEstate})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >

            Hover effects 
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
                </span>
            <div className='pt-8 text-center'>
                <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                    </button>
                </a>
                <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 ml-4 bg-white text-gray-700 font-bold text-lg'>
                    Code
                    </button>
                </a>
            </div>
            </div>
        </div> */}



        
 



</div>
</div>

    </div>
  )
}
