'use client'
import React from 'react'
import teamMembers from './data'
import { motion } from 'framer-motion'

const Page = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className='bg-black w-full pt-32 min-h-screen p-8'>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className='text-white text-3xl font-semibold mb-8 text-center'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Team
        </motion.h1>
        <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className='bg-black p-4 rounded-lg aspect-square'
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className='flex flex-col items-center justify-center h-full'>
                <motion.div 
                  className='bg-yellow-50 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mb-4 rounded-full overflow-hidden'
                  whileHover={{ rotate: 5 }}
                >
                  {member.image && <Image src={member.image} alt={member.name} className='w-full h-full object-cover' />}
                </motion.div>
                <h2 
                  className='text-white text-lg sm:text-xl font-bold text-center'
                >
                  {member.name}
                </h2>
                <p className='text-white text-sm sm:text-base text-center mt-2'>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Page