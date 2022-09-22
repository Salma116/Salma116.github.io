import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF8401]'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Salma nice to meet you. Please take a look around</p>
                    </div>
                    <div>
                        I am passionate about learning and sharing knowledge.
                        I really enjoy team work especially in an Agile friendly environment. My aim is to continue my carreer in the tech field as it is a domain that attracts me a lot for its constant changes and all the challenges that comes with it, I know that working in such and environment requires rigor, following procedures and creativity. Thus my ability to adapt, analyze and solve problems are my first assets that I will bring with me.
                    </div>
                </div>
            </div>
        </div>
  )
}
