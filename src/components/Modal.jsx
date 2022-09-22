import React, {useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import videoHub from '../assets/demo-adahub.mov'
const Modal = (props, setChoice, setModalOn) => {
    const [isOpen, setIsOpen] = useState(false)
    //const [isClosed, setIsClosed] = useState(false)
    const handleCancelClick = () => {
        setIsOpen(false)
    }
    return (


        <div className='inline-flex'>
            <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300' onClick ={() => setIsOpen(!isOpen)} >
                    {props.label}
            </button>
            
            { isOpen && <div className='first-letter:flex  text-lg  text-zinc-600   mb-10'> 
            <div className="   bg-zinc-200 bg-opacity-90 fixed inset-0 z-50   ">
  
                <div className="flex h-screen justify-center items-center ">

                    <div className="flex-col bg-[#F0EBE1] py-12 px-24 w-1/2 border-4 border-[#0a192f] rounded-xl">
                    <video src={videoHub} width="600" height="300" controls="controls" autoplay="true" />

                    <h2 className= "mt-10">This internal social network named Adahub is the result of a team work! </h2>
                    <p>TypeScript and Go are the languages used for the front and the back development</p>
                    <p>This site is deployed you can check it on <span class="underline--magical"> <a target="_blank" id="adalink"  href="https://adahub.fr/"> adahub.fr</a></span> we deployed it using docker and a raspberry pi provided by the school</p>
                    <button onClick={handleCancelClick} ><AiOutlineClose className ='rounded w-6 h-6 hover:bg-gray-300 '/></button>
                    </div>
                </div>
                    </div>
            </div>}
         {/* ici on a un isOpen qui est un booléen, si il est vrai alors ce qui suit après "&&" est pris en compte si c'est faux non. */} 
        </div>
        
    );
}

export default Modal