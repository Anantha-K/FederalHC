"use client";
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import logo from '../assets/FHDLOGO.png'
import logo2 from '../assets/FHDLOGO-2.png'
import logo3 from '../assets/Logo3-3.png'
import { MdArrowOutward } from "react-icons/md";



if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const footer = footerRef.current;
    if (!footer) return;

    gsap.set(footer, { y: 100, opacity: 0 });

    gsap.to(footer, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footer,
        start: "top bottom",
        end: "bottom bottom",
        once: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer id='footer' className='flex w-full h-56 pb-4 bg-black items-center overflow-hidden'>
      <div 
        ref={footerRef} 
        className='w-[95%] mx-auto border-[1px] bg-black h-52 border-gray-500  p-5 rounded-lg flex flex-col'
      >
        <div className='flex justify-between h-full'>
          <div>
            {/* <h1 className='text-3xl font-bold text-white'>Federal Horizon</h1> */}
            <Image src={logo3}  alt='' className='ml-2 md:ml-8 w-[70px] md:w-[190px] h-[30px] md:h-[60px]'  ></Image>

          </div>
          <div className='flex place-items-end h-full align-text-bottom text-white'>

            <a className='text-l md:text-3xl font-bold font-serif mb-3 text-white' href='mailto:federalhorizondevelopment@gmail.com' id='mail'>Send us an email</a>
          {/* <MdArrowOutward className='text-3xl ml-3 -translate-y-3' /> */}
          </div>
        </div>
        <div className='border-t-[1px] flex mx-auto py-2 w-[95%] justify-between text-white border-gray-500'>
          <div>
          {/* <Image src={logo2} width='30' height='30' className='hidden md:flex'></Image> */}
          </div>
          <div className='md:flex translate-x-20 gap-10 hidden'>
            <Link href={''}>Instagram</Link>
            <Link href={''}>Facebook</Link>
            <Link href={''}>X</Link>
          </div>
          <div className='flex md:hidden gap-5 mr-16 justify-start items-center '>
            <Link href={''}><FaInstagram/></Link>
            <Link href={''}><FaLinkedinIn/> </Link>
            <Link href={''}><FaXTwitter/></Link>

          </div>
          <div className='flex flex-col items-end text-[9px] md:text-xs text-gray-400'>
            <p>2024 All rights reserved</p>
            <p>Made with 🤍 by Anantha Krishnan</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;