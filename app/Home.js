'use client'
import Image from '@/node_modules/next/image'
import React, { useState } from 'react'
import Lottie from 'react-lottie'
import logo from './assets/FHD.png'
import animationData from './assets/VR.json'
import animationData2 from './assets/Gam.json'

import animationData3 from './assets/AR.json'
import Link from 'next/link'
import { FaInstagram,FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import ld from './assets/ld.JPG'




const Home = () => {
  const [active, setActive] = useState(false)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const handleClick=()=>{
    setActive(!active);
    document.body.classList.toggle('overflow-hidden'); 
  document.body.classList.toggle('fixed'); 

  }
  const handleLink=()=>{
    setActive(!active);
    document.body.classList.toggle('overflow-hidden'); 
    document.body.classList.toggle('fixed'); 



  }
  return (
    <>

<nav className='w-full  bg-white h-16 flex items-center justify-between px-4 md:px-12 shadow-lg border-b-2  border-gray-300'>
  <Image className='cursor-pointer' src={logo} height={40} alt=''/>
  <ul className='hidden md:flex md:space-x-10'>
    <li className='hover:text-blue-700 hover:cursor-pointer transition duration-150'><Link href='/'>Home</Link></li>
    <li className='hover:text-blue-700 hover:cursor-pointer transition duration-150'><Link href='#About'>About</Link></li>
    <li className='hover:text-blue-700 hover:cursor-pointer transition duration-150'><Link href='#Opp'>Opportunities</Link></li>
  </ul>
  <button className="md:hidden focus:outline-none" onClick={handleClick}>
        {active ? (
          <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>
</nav>
<nav className={` ${active ? 'flex' : 'hidden'} ${active ? 'left-0' : '-left-full'} h-screen font-serif bg-gray-200 w-full items-center justify-center z-10 flex-col transition-transform duration-5000 delay-100 ease-in`}>
  <ul className='flex text-4xl items-center space-y-20 flex-col md:space-x-10 bg-inherit'>
    <li className='hover:text-blue-700 hover:cursor-pointer transition bg-inherit duration-150'><Link onClick={handleLink} className='bg-inherit'  href='/'>Home</Link></li>
    <li className='hover:text-blue-700 hover:cursor-pointer transition bg-inherit duration-150'><Link onClick={handleLink}  className='bg-inherit' href='#About'>About</Link></li>
    <li className='hover:text-blue-700 hover:cursor-pointer transition bg-inherit duration-150'><Link onClick={handleLink}  className='bg-inherit' href='#Opp'>Opportunities</Link></li>
  </ul>
</nav>





    {/* landing */}
    <div className='bg-white w-full flex items-center justify-center mt-0 md:mt-9 flex-col h-46 md:h-[700px] relative'>
  <Image src={ld} alt='' className='w-full h-46 md:h-[700px]'/>
  <h1 className='text-sm md:text-7xl text-white bg-none -translate-y-12 md:-translate-y-96 '>Federal Horizon Development</h1>
</div>




    {/* About */}
    <div id='About' className='w-full my-10 md:h-96 flex flex-col items-center justify-center px-8 md:px-16 space-y-8'>
      <h1 className='text-4xl font-serif font-semibold'>About</h1>
      <p className=' text-md md:text-xl font-sans'>

Welcome to the Game Development Club!  We&apos;re passionate about exploring cutting-edge design technologies like VR, AR, 3D modeling, and game development. Our mission is to empower members with the skills and knowledge to thrive in these fields through hands-on training, workshops, and internship opportunities.

Join us to unleash your creativity, collaborate with like-minded individuals, and shape the future of design technologies. Let&apos;s innovate together!</p>


    </div>
    <div className='w-full flex flex-col items-center justify-center px-4 md:px-16 space-y-12'>
  <h1 className='text-4xl font-serif font-semibold'>Training</h1>
  <div className='w-full flex flex-col md:flex-row gap-6'>

    <div className="w-full md:w-1/3 group relative block h-auto md:h-64 sm:h-64 lg:h-96">
      <span className="absolute inset-0 border-2 border-dashed border-gray-200"></span>

      <div className="relative flex flex-col h-full items-center justify-center border-2 border-gray-200 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-4 !pt-0 items-center transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">

          <Lottie
            options={defaultOptions}
            height={250}
            width={250}
            />
          <h2 className="mt-4 self-end text-xl font-medium sm:text-2xl">Virtual Reality (VR)</h2>
        </div>

        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 static"> {/* Use 'static' class */}
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">Virtual Reality (VR)</h3>

          <p className="mt-4 text-sm sm:text-base">
            Comprehensive training on VR hardware, software development, and practical applications across industries
          </p>
        </div>
      </div>
    </div>

    <div className="w-full md:w-1/3 group relative block h-auto md:h-64 sm:h-64 lg:h-96">
      <span className="absolute inset-0 border-2 border-dashed border-gray-200"></span>

      <div className="relative flex flex-col h-full items-center justify-center border-2 border-gray-200 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-4 !pt-0 items-center transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">

          <Lottie
            options={defaultOptions2}
            height={250}
            width={250}
            />
          <h2 className="mt-4 self-end text-xl font-medium sm:text-2xl">Augmented Reality (AR)</h2>
        </div>

        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 static"> {/* Use 'static' class */}
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">Augmented Reality (AR)</h3>

          <p className="mt-4 text-sm sm:text-base">
            In-depth exploration of AR concepts, creation of AR experiences, and integration into real-world scenarios.
          </p>
        </div>
      </div>
    </div>

    <div className="w-full md:w-1/3 group relative block h-auto md:h-64 sm:h-64 lg:h-96">
      <span className="absolute inset-0 border-2 border-dashed border-gray-200"></span>

      <div className="relative flex flex-col h-full items-center justify-center border-2 border-gray-200 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-4 !pt-0 items-center transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">

          <Lottie
            options={defaultOptions3}
            height={250}
            width={250}
            />
          <h2 className="mt-4 self-end text-xl font-medium sm:text-2xl">Game Development</h2>
        </div>

        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 static"> {/* Use 'static' class */}
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">Game Development</h3>

          <p className="mt-4 text-sm sm:text-base">
            Practical guidance on game design, programming, and development using industry-standard tools, languages & engines like Unreal, Unity, C#, C++, etc
          </p>
        </div>
      </div>
    </div>
  </div>
</div>













<div id='Opp' className='w-full my-10 md:h-96 flex flex-col items-center justify-center px-8 md:px-16 space-y-8'>
      <h1 className='text-4xl font-serif font-bold'>Opportunities</h1>
      <p className=' text-md md:text-xl font-sans'>

      To recognize and reward excellence, internship opportunities will be provided to the top-performing students, bridging the gap between theoretical knowledge and real-world application. Additionally, the initiative includes a project and exhibition initiative, fostering innovation and providing students with platforms to showcase their talents. Through project development, project teams are formed based on interests and skills, focusing on real-world applications such as VR, AR, Blender, and Game Development. Mentorship from industry professionals or experienced club members guides project development, with regular updates during club meetings to encourage collaboration and knowledge sharing. Exhibition opportunities include intra-college showcases, inter-college competitions, networking events, and awards to acknowledge outstanding projects, fostering healthy competition and motivation among students.</p>


    </div>
    <footer className='w-full border-t-2 border-gray-200 py-3 mt-5 h-36 md:h-24 justify-between items-center px-5 flex flex-col md:flex-row'>
      <Image src={logo} alt='' className='h-[50px] w-[50px] md:h-[60px] md:w-[70px]'/>
      <ul className='flex space-x-5 text-4xl'>
        <FaInstagram className='hover:cursor-pointer hover:text-blue-700 duration-300 transition'/>
        <FaLinkedin className='hover:cursor-pointer hover:text-blue-700 duration-300 transition'/>
        <FaSquareXTwitter className='hover:cursor-pointer hover:text-blue-700 duration-300 transition'/>
      </ul>

      

    </footer>
    </>
 )
}

export default Home