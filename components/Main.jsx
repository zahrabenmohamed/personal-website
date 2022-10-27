import Image from 'next/image'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import {FaGithub, FaLinkedinIn, FaMediumM} from 'react-icons/fa'
import {motion} from 'framer-motion'
import {Cursor,useTypewriter} from 'react-simple-typewriter'


function Main() {
    const [text,count]=useTypewriter({
        words:['Zahra','Developer','Cloud Enthusiast','UX/UI enthusiast','Looking for Internship'],loop:true,delaySpeed:2000,
    });


   
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET&#39;S BUILD SOMeTHING </p>
                <h1 className='text-gray-700 py-4'>Hi I am <span className='text-blue-600'>{text}</span><Cursor cursorColor='#2563EB'/></h1>
                <h1 className='text-gray-700 py-4'>A Future Full-stack developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I am a full stack developer student with an exeperience in frontend using Both react Js and Angular.Currently I am focused on backend technologies using Spring Boot and Java.My mission is to solve problem while creating appealing and engaging  website solutions </p>
                <div className='flex ietms-center justify-between max-w-[330px] m-auto py-4 ' >
                    
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <a href='https://www.linkedin.com/in/zahra-benmohamed-09a42920a/' target='_blank' rel='noreferrer'>
                                <FaLinkedinIn/>
                            </a>
                        </div>

                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href='https://github.com/zahrabenmohamed' target='_blank' rel='noreferrer'>

                            <FaGithub/>
                            </a>
                        </div>

                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href = "mailto: zahra.benmohamed22@gmail.com"><AiOutlineMail/></a>

                            
                        </div>

                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <a ><BsFillPersonFill/></a>
                        </div>

                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main