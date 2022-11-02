import React, { useState } from 'react';

const Contact = () => {
  return (
    <div id='contact' className=''>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#2563EB]'>
          Contact
        </p>
        <h2 className='py-4'>Wanna reach out ?</h2>
        <p>Feel free to drop me a message if you have some intersting offer or you want to hang out.</p>
        <div className="mt-4">
          <a
            href="mailto:zahra.benmohamed22@gmail.com"
            className="text-base font-medium md:text-xl text-black-900 dark:text-white-900"
          >
            zahra.benmohamed22@gmail.com
          </a>
        </div>
        
        
      </div>
      <p className="py-8 text-sm font-light text-center dark:text-white-700 text-black-700">
        <a
          href="https://github.com/zahrabenmohamed"
          target="_blank"
          className="hover:opacity-80 transition-opacity"
          rel="noreferrer"
        >
          Designed & Crafted by Zahra © 2022
        </a>
      </p>
    </div>
  );
};

export default Contact;