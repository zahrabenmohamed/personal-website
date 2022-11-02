import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import prj1Img from '../public/assets/projects/prj1.png'
import prj2Img from '../public/assets/projects/prj2.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#2563EB]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        
          <ProjectItem
            title='Digital agency website'
            backgroundImg={prj1Img}
            projectUrl='https://condescending-joliot-5286af.netlify.app/'
            tech='Html,css,JS'

          />

<ProjectItem
            title='Scientific reserach website'
            backgroundImg={prj2Img}
            projectUrl='https://competent-aryabhata-f16177.netlify.app/'
            tech='Html,css,JS,Bootsrap'

          />
        
         
        </div>
      </div>
    </div>
  );
};

export default Projects;