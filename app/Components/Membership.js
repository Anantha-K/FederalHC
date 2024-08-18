'use client';
import React from 'react';
import { motion } from 'framer-motion';

const MembershipSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className='bg-black py-16 px-6'>
      <motion.div 
        className='max-w-4xl mx-auto bg-black border-2 border-blue-400 p-8 rounded-2xl shadow-2xl'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className='text-4xl font-bold text-center mb-10 text-indigo-700'>Membership Information</h2>
        
        <motion.div className='mb-10' variants={itemVariants}>
          <h3 className='text-2xl font-semibold mb-4 text-indigo-600'>Eligibility</h3>
          <p className='text-lg text-gray-100'>
            Federal Horizon Development offers a <span className='font-semibold text-indigo-600'>free membership</span>, which is only obtainable by completing at least one course.
          </p>
        </motion.div>

        <motion.div className='mb-10' variants={itemVariants}>
          <h3 className='text-2xl font-semibold mb-4 text-indigo-600'>How to Join</h3>
          <ol className='list-decimal list-inside text-lg text-gray-100'>
            <li className='mb-3'>
              <span className='font-semibold'>Enroll in a Course:</span> Register and complete any of our offered courses.
            </li>
            <li>
              <span className='font-semibold'>Earn Membership:</span> Upon successful completion, you will receive a membership status, granting you access to additional benefits and opportunities within the club.
            </li>
          </ol>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className='text-2xl font-semibold mb-4 text-indigo-600'>Benefits of Membership</h3>
          <ul className='text-lg text-gray-100'>
            {['Access to exclusive workshops and events', 'Networking opportunities with industry professionals', 'Participation in advanced projects and initiatives'].map((benefit, index) => (
              <motion.li 
                key={index} 
                className='mb-3 flex items-start'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {benefit}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MembershipSection;