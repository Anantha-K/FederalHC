import React from 'react'
import { FaInstagram,FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className='bg-red-500 items-center justify-between py-5 w-full h-56 flex flex-col text-white bottom-0'>
        <div className='flex mt-5 flex-row items-center justify-center text-4xl gap-16'>
        <FaInstagram className='hover:cursor-pointer hover:text-pink-400 transition-all duration-700' />
        <FaLinkedinIn className='hover:cursor-pointer hover:text-blue-600 transition-all duration-700' />
        <FaXTwitter  className='hover:cursor-pointer transition-all duration-700'/>

        


    

        </div>
        <div className='flex flex-col items-center'>

        <p>© 2024 Federal Horizon Development. All rights reserved.</p>
        <p>Developed and Maintained by Anantha Krishnan</p>

        </div>
    </footer>
  )
}

export default Footer