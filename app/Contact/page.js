import React from 'react';

const ContactPage = () => {
  return (
    <div className='bg-black text-white flex flex-row w-full h-screen overflow-hidden text-white items-center justify-center'>
      <div className='w-1/2 p-8'>
        <h1 className='text-4xl font-bold mb-4'>Get in Touch</h1>
        <p className='text-lg'>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>
      <div className='w-1/2 p-8'>
        <form className='bg-black rounded-lg p-8 flex flex-col'>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-sm font-medium mb-2'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium mb-2'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='message' className='block text-sm font-medium mb-2'>Message</label>
            <textarea
              id='message'
              name='message'
              rows='4'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
              required
            ></textarea>
          </div>
          <div className='flex justify-center mt-4'>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full  w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-12 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Send
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;