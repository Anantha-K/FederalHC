'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Goals = () => {
  const sectionRef = useRef(null);
  const goalsRef = useRef([]);

  useEffect(() => {
    // const section = sectionRef.current;
    const goals = goalsRef.current;

    

    goals.forEach((goal, index) => {
      gsap.fromTo(goal,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: goal,
            start: "top 90%",
          },
          delay: index * 0.2
        }
      );
    });
  }, []);

  return (
    <section  id="goals" className="bg-black pb-15 border-0 text-white py-12 px-6">
      <h2 className="text-5xl font-bold text-center mb-10">Our Goals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "Comprehensive Training", description: "Deliver high-quality training programs in advanced technologies." },
          { title: "Innovation and Learning", description: "Promote continuous learning and innovation through workshops and projects." },
          { title: "Professional Growth", description: "Support career development with networking opportunities, mentorship, and real-world experience." },
          { title: "Community Building", description: "Build a vibrant community of tech enthusiasts and professionals." },
          { title: "Skill Enhancement", description: "Enhance technical and soft skills through structured courses and practical exercises." },
          { title: "Industry Engagement", description: "Partner with industry leaders to provide exposure to current trends and career opportunities." },
        ].map((goal, index) => (
          <div 
            key={index}
            ref={el => goalsRef.current[index] = el}
            className="bg-black p-6 rounded-lg border-4 border-transparent"
            style={{
              backgroundClip: 'padding-box',
              position: 'relative',
            }}
          >
            <div 
              style={{
                content: '""',
                position: 'absolute',
                top: -2,
                left: -2,
                right: -2,
                bottom: -2,
                background: 'linear-gradient(45deg, #4a00e0, #8e2de2)',
                zIndex: -1,
                borderRadius: '0.5rem',
              }}
            />
            <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
            <p>{goal.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Goals;