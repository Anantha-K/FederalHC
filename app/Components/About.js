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
      text: "Welcome to the Federal Horizon Development Club! We are dedicated to advancing skills across all domains of Computer Science with cutting-edge training programs tailored to the evolving tech landscape. Our goal is to provide hands-on, practical training in a variety of advanced technologies, preparing our members for real-world challenges. We create an inclusive and dynamic learning environment that blends theory with application, ensuring our members are well-equipped to succeed in the tech industry. Join us to engage in collaborative projects, attend exclusive workshops, and connect with industry professionals. Together, we drive innovation and shape the future of technology."
    },
    {
      title: "Mission",
      text: "Our mission is to empower individuals by providing comprehensive training and hands-on experience in cutting-edge technologies across all domains of Computer Science. We strive to foster a learning environment that promotes innovation, collaboration, and professional growth."
    },
    {
      title: "Vision",
      text: "To be a leading technology development club recognized for advancing knowledge and skills in computer science, creating a community of tech enthusiasts who drive technological progress and make a positive impact on the industry."
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const sections = container.querySelectorAll(".section");

    sections.forEach((section, index) => {
      const heading = section.querySelector("h2");
      const text = section.querySelector("p");

      gsap.set(heading, { opacity: 0, x: index % 2 === 0 ? -50 : 50 });

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => {
          // Animate heading
          gsap.to(heading, {
            opacity: 1,
            x: 0,
            duration: 2,
            ease: "power2.out",
          });

          const words = text.querySelectorAll("span");
          words.forEach((word, idx) => {
            gsap.to(word, {
              opacity: 1,
              scrollTrigger: {
                trigger: word,
                start: "top 90%",
                toggleActions: "play none none none",
              },
              delay: idx * 0.9, 
              duration: 2,
              ease: "power2.out",
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
    <div ref={containerRef} className={cn("font-bold", className)}>
      {content.map((item, index) => (
        <div key={index} className="section mt-16 text-center">
          <h2 className="dark:text-white text-white text-3xl mb-4">
            {item.title}
          </h2>
          <p className="dark:text-white mt-12 text-white text-xl leading-relaxed">
            {item.text.split("  ").map((word, idx) => (
              <span key={idx} className="inline-block opacity-0">
                {word}{" "}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};
