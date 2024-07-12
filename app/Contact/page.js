import React from 'react';

const ContactPage = () => {
  return (
    <div className='bg-red-500 flex flex-row w-full h-screen overflow-hidden text-white items-center justify-center'>
      <div className='w-1/2 p-8'>
        <h1 className='text-4xl font-bold mb-4'>Get in Touch</h1>
        <p className='text-lg'>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>
      <div className='w-1/2 p-8'>
        <form className='bg-white rounded-lg p-8 text-gray-800'>
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
          <button
            type='submit'
            className='w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;