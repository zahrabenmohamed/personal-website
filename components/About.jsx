import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/projects/about.jpg';
import {HiDownload} from 'react-icons/hi';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#2563EB]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-black'>
            
Computer science student in my last year at ENSEM. Aged 22 years old.
I have been programming for the last 4 years starting with Python, then specializing in web development to help companies to bring their ideas to life whilst expressing myself creatively and having the opportunity to work on both local and abroad projects. I took an internship as a full-stack developer last summer. It was a great experience where I learned new technologies, fell in love with the journey, and felt fulfilled when I completed the tasks on time.

          </p>
          <p className='py-2 text-black'>
           
 My greatest strength is my commitment to lifelong learning. I consider creativity to be my first value, followed by patience since a website is like a plant that needs constant attention and care. When you think it is done, you will find a bug that needs to be fixed or an element that the client wants to be added.
Out of the school, you will find me reading books, Designing, drawing, and volunteering for social causes.

          </p>


          <p className='py-2 text-black'>
           
          Now, I am looking for my end-of-study internship in a company where I can add value, be a part of a strong team, and develop my career skills.

          
                    </p>
         
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
       {/* button to downlaod Resume  */}
      <motion.a  
      
      
       className='text-white bg-[#2563EB] flex border w-60 px-12 py-2.5 mr-2 mb-2 mt-6 rounded-[5px] items-center gap-2 hover:bg-[#a1bfff]' href='cv.pdf' download='cv.pdf'>
        <HiDownload />
        Download CV
        
      </motion.a>

      </div>
    
    </div>
  );
};

export default About;