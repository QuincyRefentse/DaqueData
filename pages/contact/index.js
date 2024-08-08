import React, { useState } from 'react';
import Circles from '../../components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_4l4cx7y',
      'template_b2jc5vr',
      formData,
      'VVNKGMhn4FVbwL0MI'
    ).then((response) => {
      console.log('Success:', response);
      alert('Message sent successfully!');
    }, (error) => {
      console.log('Error:', error);
      alert('Failed to send message.');
    });
  };

  return (
    <div className="h-full bg-primary/30">
      <div className='container mx-auto py-30 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit="hidden"
            className='h2 text-center mb-12'>
              {/*eslint-disable-next-line react/no-unescaped-entities*/}
            Let's <span className='text-accent1'>Connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit="hidden"
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={handleSubmit}>
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                name='name'
                placeholder='name'
                value={formData.name}
                onChange={handleChange}
                className='input border border-accent1 placeholder-black text-black'
              />
              <input
                type='text'
                name='email'
                placeholder='email'
                value={formData.email}
                onChange={handleChange}
                className='input border border-accent1 placeholder-black text-black'
              />
            </div>
            <input
              type='text'
              name='subject'
              placeholder='subject'
              value={formData.subject}
              onChange={handleChange}
              className='input border border-accent1 placeholder-black text-black'
            />
            <textarea
              name='message'
              placeholder='message'
              value={formData.message}
              onChange={handleChange}
              className='textarea border border-accent1 input border border-accent1 placeholder-black text-black'
            ></textarea>
           <button type="submit" className='btn rounded-full border border-accent1 max-w-[170px]
          px-8 transition-all duration-300 flex items-center justify-center overflow-hidden
          hover:border-accent1 group'>
             {/* eslint-disable-next-line react/no-unescaped-entities */} 
            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 translate-all duration-500'>Let's talk</span>
            <BsArrowRight className='-translate-y-[120%] opacity-0 
            group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all
            duration-300 absolute text[22px]'/>
          </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
