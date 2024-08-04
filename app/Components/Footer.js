import React from 'react'
import { FaInstagram,FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
  <>
  <footer className='flex w-full h-52 bg-black items-center'>
    <div className='w-[90%] mx-auto border-[1px] h-32 border-gray-500 flex flex-col'>
      <div className='flex justify-between h-full'>
        <div>

        <h1 className='text-3xl font-bold text-white'>Federal Horizon</h1>
        </div>
        <div className='flex place-items-end h-full align-text-bottom'>
        <a className='text-2xl font-bold text-white'>Send us an email</a>

        </div>
      </div>
      


    </div> 

  </footer>
  
  
  
  
  
  </>
  )
}

export default Footer