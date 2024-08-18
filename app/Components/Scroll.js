"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import img1 from '../assets/VR.jpg'
import img3 from '../assets/Game.jpg'
import img2 from '../assets/WEB.jpeg'
import img4 from '../assets/APPP.jpeg'


export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const imageUrls = [
    img1,
    img2,
    // img3,
    img4
  ];

  const backgroundGradients = [
    "bg-gradient-to-r from-blue-900 to-purple-900",
    "bg-gradient-to-r from-indigo-900 to-purple-950",
    "bg-black",
  ];
  return (
    <motion.div
      id="Activity"
      className={`h-screen overflow-y-auto flex justify-center relative space-x-20 p-10 ${backgroundGradients[activeCard % backgroundGradients.length]}`}
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-3xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="min-h-screen flex flex-col justify-center">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-4xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-xl text-slate-300 max-w-xl mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={imageUrls[activeCard % imageUrls.length]}
        alt="Card Image"
        className={cn(
          "hidden lg:block h-96 w-96 rounded-md bg-white sticky top-20 overflow-hidden",
          contentClassName
        )}
        width={384}
        height={384}
      />
    </motion.div>
  );
};