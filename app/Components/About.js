"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export const TextGenerateEffect = ({ className }) => {
  const containerRef = useRef(null);

  const content = [
    {
      title: "About Us",
      text: "FISAT HORIZON, initiated by IEDC FISAT in collaboration with the Computer Science department, is a pioneering club dedicated to merging the worlds of virtual reality and innovative design. Our mission is to foster a dynamic learning environment where students can explore and master the latest advancements in VR technology and digital design. Through hands-on projects, workshops, and collaborative challenges, we empower our members to create immersive experiences and push the boundaries of interactive media. At FISAT HORIZON, we believe in the transformative power of technology and creativity, striving to develop skills that will shape the future of the digital and virtual landscape."
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const sections = container.querySelectorAll(".section");

    sections.forEach((section, index) => {
      const heading = section.querySelector("h2");
      const text = section.querySelector("p");

      gsap.set(heading, { opacity: 0, y: 50 });

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => {
          gsap.to(heading, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
          });

          const words = text.querySelectorAll("span");
          words.forEach((word, idx) => {
            gsap.to(word, {
              opacity: 1,
              duration: 0.1,
              delay: idx * 0.05,
              ease: "power2.out",
              scrollTrigger: {
                trigger: word,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            });
          });
        },
        once: true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={cn("font-bold bg-[#e0e0e0] px-4 sm:px-6 lg:px-8", className)}>
      {content.map((item, index) => (
        <div key={index} className="section mt-12 sm:mt-16 text-center">
          <h2 className="text-black text-6xl sm:text-3xl mb-4 sm:mb-6">
            {item.title}
          </h2>
          <p className="text-black text-base sm:text-lg md:text-2xl space-y-2 leading-relaxed text-justify sm:text-left">
            {item.text.split(" ").map((word, idx) => (
              <span key={idx} className="inline-block opacity-0">
                {word}&nbsp;
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};