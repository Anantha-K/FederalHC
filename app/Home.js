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
import Join from './Components/Join'
// import vid from '../public/Video.mp4'





const Home = () => {
  const words="Welcome to Federal Horizon Development, your gateway to the immersive world of VR, AR, and web development! We are a vibrant community of tech enthusiasts, designers, and creators passionate about harnessing cutting-edge technologies to build the future. Through hands-on projects, collaborative workshops, and spirited participation in inter and intra-college competitions, we strive to push the boundaries of innovation and creativity. Whether you're a seasoned developer or just starting out, join us as we explore new horizons, learn together, and make our mark in the ever-evolving landscape of digital innovation."
  const content = [
    {
      title: "VR Development",
      description:
        "Explore the world of Virtual Reality with hands-on training and projects to create immersive experiences.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Web Development",
      description:
        "Master front-end and back-end web development with comprehensive courses on building and maintaining dynamic websites.",
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
    // {
    //   title: "Full Stack Development",
    //   description:
    //     "Gain expertise in both front-end and back-end technologies and learn how to create complete web applications from scratch.",
    //   content: (
    //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
    //       Version control
    //     </div>
    //   ),
    // },
    {
      title: "App Development",
      description:
        "Learn to design, develop, and deploy applications for various platforms, including mobile and desktop.",
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
    <div className='bg-black w-full z-0 hidden md:flex items-center justify-center mt-0  flex-col min-h-screen md:h-[700px] relative'>
    <HeroScene className='sm:hidden md:block'/>

   
</div>
<div className='bg-black flex md:hidden w-full h-screen'>
<video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="w-full h-full object-cover block md:hidden "
    >
      <source src='/Video.mp4' width='300' height='300' type="video/mp4" />
      Your browser does not support the video tag.
    </video>
</div>





    {/* About */}
    <div id='About' className='bg-[#e0e0e0] text-white m-0 flex-col p-0 pt-5 flex h-fit items-center justify-between'>
  <TextGenerateEffect className='bg-[#e0e0e0] text-black w-[80%]' words={words} />

  <section className="bg-gradient-to-r from-blue-900 to-purple-900 py-16 w-full mt-12">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Our Purpose</h2>
        {/* <div className="w-24 h-1 bg-yellow-400 mx-auto"></div> */}
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8">
        <div className="bg-black bg-opacity-50 rounded-lg shadow-lg p-8 flex flex-col justify-between transform hover:scale-105 transition duration-300 md:w-1/2 border border-blue-500">
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
            Our mission is to empower individuals by providing comprehensive training and hands-on
experience in cutting-edge technologies across all domains of Computer Science. We
strive to foster a learning environment that promotes innovation, collaboration, and
professional growth.            </p>
          </div>
          {/* <div className="mt-6">
            <a href="#" className="inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Learn More</a>
          </div> */}
        </div>

        <div className="bg-black bg-opacity-50 rounded-lg shadow-lg p-8 flex flex-col justify-between transform hover:scale-105 transition duration-300 md:w-1/2 border border-purple-500">
          <div>
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
            To be a leading technology development club recognized for advancing knowledge and
skills in computer science, creating a community of tech enthusiasts who drive
technological progress and make a positive impact on the industry.            </p>
          </div>
          {/* <div className="mt-6">
            <a href="#" className="inline-block bg-purple-600 text-white font-semibold px-4 py-2 rounded hover:bg-purple-700 transition duration-300">Discover More</a>
          </div> */}
        </div>
      </div>
    </div>
  </section>
</div>









{/* Activities */}
<div className='w-full flex items-center justify-center pt-24  bg-black'>
<h1 className='text-white text-5xl md:mb-10'>Programs Offered</h1>

</div>
<StickyScroll id="Activity" className='md:hidden' content={content}/>
<Join/>




{/* 
<div id='Opp' className='w-full my-10 md:h-96 flex flex-col items-center justify-center px-8 md:px-16 space-y-8'>
      <h1 className='text-4xl font-serif font-bold'>Opportunities</h1>
      <p className=' text-md md:text-xl font-sans'>

      To recognize and reward excellence, internship opportunities will be provided to the top-performing students, bridging the gap between theoretical knowledge and real-world application. Additionally, the initiative includes a project and exhibition initiative, fostering innovation and providing students with platforms to showcase their talents. Through project development, project teams are formed based on interests and skills, focusing on real-world applications such as VR, AR, Blender, and Game Development. Mentorship from industry professionals or experienced club members guides project development, with regular updates during club meetings to encourage collaboration and knowledge sharing. Exhibition opportunities include intra-college showcases, inter-college competitions, networking events, and awards to acknowledge outstanding projects, fostering healthy competition and motivation among students.</p>


    </div>

Stic */}



{/* <ContactPage></ContactPage> */}
  {/* Footer */}
  <Footer/>

    </>
 )
}

export default Home