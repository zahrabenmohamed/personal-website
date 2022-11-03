import React ,{useState , useEffect} from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaViacoin } from 'react-icons/fa';
import { AiFillMediumSquare } from 'react-icons/ai';
import {motion} from 'framer-motion';




const Navbar = () => {
    const [nav,setNav]=useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const handleNav=()=>{
        setNav(!nav)

    }

    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
          setShadow(true);
        } else {
          setShadow(false);
        }
      };
      window.addEventListener('scroll', handleShadow);
    }, []);
  
  return (
    <div style={{ backgroundColor: `${navBg}` }}  className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300':'fixed w-full h-20 shadow-xl z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <motion.h2  initial={{ x:-500 ,scale:0.5,}} animate={{ x:0,scal: 1, }} transition={{duration:1.5,}}>
                            Zahra Benmohamed
                        </motion.h2>
            <div>
          <ul className='hidden md:flex'>
          <Link href="/">
                <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href="/#about">
                <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href="/#experience">
                <li className='ml-10 text-sm uppercase hover:border-b'>Experience</li>
            </Link>
           
           
            <Link href="/#skills">
                <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href="/#projects">
                <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href="/#contact">
                <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>

          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu sie={25} />
          </div>
        </div>

        </div>


        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':''}>
            <div className={nav ? 'fixed top-0 left-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500':'fixed top-0 left-[-100%] p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <h3>Zahra</h3>
                        <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                            <AiOutlineClose/>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md-w py-4'> let&#39;s build something special</p>
                    </div>
                </div>

                <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#experience'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Experience
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
             
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-10'>
              <p className='uppercase tracking-widest text-[#2563EB]'>
                Let&#39;s Connect
              </p>
              <div className='flex flex-row items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/zahra-benmohamed-09a42920a/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/zahrabenmohamed'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <a href='https://medium.com/@zahrabenmohamed'
                  target='_blank'
                  rel='noreferrer'>
                  
                  <div
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiFillMediumSquare />
                  </div>
                </a>
              </div>
            
                </div>



            </div>

        </div>
       
    </div>
    </div>
  )
}

export default Navbar