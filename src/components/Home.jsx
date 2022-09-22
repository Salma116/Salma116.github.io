import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#D5E4F0]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#FF8401]'>Welcome! My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#0a192f]'>Salma El Mourabet</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Engineer</h2>
        <p className='text-[#0a192f] py-4 maw-w-[700px]'> After a rich year as a Back-end developer, I am looking for my next job in a tech oriented company that promote integrity, inclusivity and constant sharing of knowledge. </p>
            <div>
                <button className='text-[#0a192f] border-[#0a192f] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF8401] hover:border-[#FF8401]'>
                <Link to="work" smooth={true} duration={500}>
                View Work
                </Link>
                    
                    <span className='group-hover:rotate-90 duration-300'> 
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>  
                </button>
            </div>
        </div>

    </div>
  )
}
