'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from './assets/FHD.png'


const Nav = () => {
  const [active, setActive] = useState(false)

  const handleClick=()=>{
    setActive(!active);
    document.body.classList.toggle('overflow-hidden'); 
  document.body.classList.toggle('fixed'); 

  }
  const handleLink=()=>{
    setActive(false);
    document.body.classList.toggle('overflow-hidden'); 
    document.body.classList.toggle('fixed'); 



  }
  return (
    <>
<nav className='w-full z-50 text-white font-semibold text-lg h-20 fixed flex items-center justify-end md:justify-center px-4 md:px-12'>
  {/* <Image className='cursor-pointer' src={logo} height={40} alt=''/> */}
  <ul className='hidden md:flex md:space-x-10'>
    <li className='hover:text-blue-500 hover:cursor-pointer transition duration-700'><Link href='/'>Home</Link></li>
    <li className='hover:text-blue-500 hover:cursor-pointer transition duration-700'><Link href='#About'>About</Link></li>
    <li className='hover:text-blue-500 hover:cursor-pointer transition duration-700'><Link href='#Opp'>Team</Link></li>
    <li className='hover:text-blue-500 hover:cursor-pointer transition duration-700'><Link href='#Opp'>Activities</Link></li>
    <li className='hover:text-blue-500 hover:cursor-pointer transition duration-700'><Link href='#Opp'>Contact</Link></li>


  </ul>
  <div id="menuToggle" className='md:hidden'>
  <input id="checkbox" type="checkbox" onChange={handleClick} checked={active}/>
  <label class="toggle" for="checkbox">
    <div class="bar bar--top"></div>
    <div class="bar bar--middle"></div>
    <div class="bar bar--bottom"></div>
  </label>
</div>
</nav>
<nav className={` ${active ? 'flex' : 'hidden'} ${active ? 'left-0' : '-left-full'} h-screen bg-black text-white w-full items-center justify-center z-10 flex-col transition-transform duration-5000 delay-100 ease-in`}>
  <ul className='flex text-4xl items-center space-y-20 flex-col md:space-x-10 bg-inherit'>
    <li className='hover:text-blue-700 hover:cursor-pointer transition bg-inherit duration-150'><Link onClick={handleLink} className='bg-inherit'  href='/'>Home</Link></li>
    <li className='hover:text-blue-700 hover:cursor-pointer transition bg-inherit duration-150'><Link onClick={handleLink}  className='bg-inherit' href='#About'>About</Link></li>
    <li className='hover:text-blue-700 hover:cursor-pointer transition bg-inherit duration-150'><Link onClick={handleLink}  className='bg-inherit' href='#Opp'>Team</Link></li>
    <li className='hover:text-blue-700 hover:cursor-pointer transition bg-inherit duration-150'><Link onClick={handleLink}  className='bg-inherit' href='#Opp'>Activities</Link></li>

    <li className='hover:text-blue-700 hover:cursor-pointer transition bg-inherit duration-150'><Link onClick={handleLink}  className='bg-inherit' href='#Opp'>Contact</Link></li>
  </ul>
</nav></>  )
}

export default Nav