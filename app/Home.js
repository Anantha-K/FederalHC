'use client'
import Image from '@/node_modules/next/image'
import React, { useState } from 'react'
import Lottie from 'react-lottie'
import animationData from './assets/VR.json'
import animationData2 from './assets/Gam.json'
import logo from './assets/FHD.png'

import animationData3 from './assets/AR.json'
import Link from 'next/link'
import { FaInstagram,FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import ld from './assets/ld.JPG'
import { StickyScroll } from './Components/Scroll'
import { TextGenerateEffect } from './Components/About'
import Footer from './Components/Footer'
import ContactPage from './Components/Contact'
import HeroScene from './Components/Threed'





const Home = () => {
  const words="Welcome to Federal Horizon Development, your gateway to the immersive world of VR, AR, and web development! We are a vibrant community of tech enthusiasts, designers, and creators passionate about harnessing cutting-edge technologies to build the future. Through hands-on projects, collaborative workshops, and spirited participation in inter and intra-college competitions, we strive to push the boundaries of innovation and creativity. Whether you're a seasoned developer or just starting out, join us as we explore new horizons, learn together, and make our mark in the ever-evolving landscape of digital innovation.";
  const content = [
    {
      title: "Virtual Reality (VR)",
      description:
        "Comprehensive training on VR hardware, software development, and practical applications across industries",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Augmented Reality (AR)",
      description:
        "In-depth exploration of AR concepts, creation of AR experiences, and integration into real-world scenarios.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/FederalHC/app/assets/Augmented-Reality-and-Tourism-Industry.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Game Development",
      description:
        "Practical guidance on game design, programming, and development using industry-standard tools, languages & engines like Unreal,Blender,Unity, C#, C++, etc",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
   
  ];
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
 
  return (
    <>







    {/* landing */}
    <div className='bg-black w-full z-0 flex items-center justify-center mt-0  flex-col min-h-screen md:h-[700px] relative'>
    <HeroScene/>
</div>





    {/* About */}
    <div className='bg-black text-white m-0 flex-col p-0 pt-5 flex items-center justify-center'>
      <h1 className='text-3xl'>About</h1>
    <TextGenerateEffect className='bg-black w-[80%]' words={words} />;

    </div>
  









{/* Activities */}
<StickyScroll id="Activity" className='md:hidden' content={content}/>





<div id='Opp' className='w-full my-10 md:h-96 flex flex-col items-center justify-center px-8 md:px-16 space-y-8'>
      <h1 className='text-4xl font-serif font-bold'>Opportunities</h1>
      <p className=' text-md md:text-xl font-sans'>

      To recognize and reward excellence, internship opportunities will be provided to the top-performing students, bridging the gap between theoretical knowledge and real-world application. Additionally, the initiative includes a project and exhibition initiative, fostering innovation and providing students with platforms to showcase their talents. Through project development, project teams are formed based on interests and skills, focusing on real-world applications such as VR, AR, Blender, and Game Development. Mentorship from industry professionals or experienced club members guides project development, with regular updates during club meetings to encourage collaboration and knowledge sharing. Exhibition opportunities include intra-college showcases, inter-college competitions, networking events, and awards to acknowledge outstanding projects, fostering healthy competition and motivation among students.</p>


    </div>

Stic



<ContactPage></ContactPage>
  {/* Footer */}
  <Footer/>

    </>
 )
}

export default Home