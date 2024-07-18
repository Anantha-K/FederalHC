import React from 'react'
import { FaInstagram,FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className='bg-black w-full h-36 flex flex-col text-white bottom-0'>
        <div className='flex flex-row items-center justify-center text-4xl gap-16'>
        <FaInstagram className='hover:cursor-pointer hover:text-pink-400 transition-all duration-700' />
        <FaLinkedinIn className='hover:cursor-pointer hover:text-blue-600 transition-all duration-700' />
        <FaXTwitter  className='hover:cursor-pointer transition-all duration-700'/>

        


    

        </div>
        <p>All rights reserved</p>

    </footer>
  )
}

export default Footer