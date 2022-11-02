import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='w-full'>
    <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <p className='text-xl tracking-widest uppercase text-[#2563EB]'>
        Experience
      </p>
      <div className='grid md:grid-cols-3 mt-10 '>
        
<a href="#" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">wimtech | Rabat | 2022/07-2022/08</h5>
    <ul className='list-disc'>
      <li>Developed a microservices web application for online payment using Spring Boot and Angular
within an Agile environment for 2 months.</li>
<li>Created the database of 22 tables using Mysql following best practices of database design</li>
<li>Integrated the CMI payment gateway into our web application, which resulted in 90% progress
toward the project  goal.</li>
    </ul>
</a>

<a href="#" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NonAcademy | Bangladesh | 2022/05-2022/06</h5>
   <ul className='list-disc'>
    <li>Prototyped analytics page with React and chart js.</li>
    <li>Contributed to the development of an AI-testing web application with a team from 4 different
countries.</li>
<li>Improved the user interface and user experience by 50%.</li>
   </ul>
</a>

<a href="#" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ENSEM | casa | 2021/06-2021/07</h5>
    <ul className='list-disc'>
      <li>Delivered the project from design to testing of a scientific research website for 2 weeks.</li>
      <li>Tools : html, css , Bootstrap, Javascript</li>
    </ul>
    
</a>


      
        
      </div>
    </div>
  </div>
  )
}

export default Experience