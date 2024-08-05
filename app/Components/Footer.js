"use client";
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const footer = footerRef.current;
    if (!footer) return;

    gsap.set(footer, { y: 100, opacity: 0 }); // Set initial state immediately

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
    <footer className='flex w-full h-56 pb-4 bg-black items-center overflow-hidden'>
      <div 
        ref={footerRef} 
        className='w-[95%] mx-auto border-[1px] bg-black h-52 border-gray-500 p-5 rounded-lg flex flex-col'
      >
        <div className='flex justify-between h-full'>
          <div>
            <h1 className='text-3xl font-bold text-white'>Federal Horizon</h1>
          </div>
          <div className='flex place-items-end h-full align-text-bottom'>
            <a className='text-2xl font-bold font-serif mb-3 text-white' href='mailto:federalhorizondevelopment@gmail.com'>Send us an email</a>
          </div>
        </div>
        <div className='border-t-[1px] flex mx-auto py-2 w-[95%] justify-between text-white border-gray-500'>
          <div>
            Logo
          </div>
          <div className='flex translate-x-20 gap-10'>
            <Link href={''}>Instagram</Link>
            <Link href={''}>Facebook</Link>
            <Link href={''}>X</Link>
          </div>
          <div className='flex flex-col items-end text-xs text-gray-400'>
            <p>2024 All rights reserved</p>
            <p>Made with 🤍 by Anantha Krishnan</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;