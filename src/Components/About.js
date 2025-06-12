import React from 'react';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function About() {
  return (
    <div id='About'>

      <div className='flex items-center justify-around '>

        <div className='z-40 flex flex-col items-center w-11/12 md:w-2/5 md:p-5 md:items-start '> 
          <h1 className='mb-8 text-2xl italic font-semibold text-center md:text-start md:text-5xl '>Bienvenue <br></br> dans mon <span className='font-bold text-fuchsia-900'>Portfolio.</span></h1>

          <h2 className='mb-8 text-lg text-center md:text-start md:text-xl sm:w-10/12'>Salut , je m'appelle <span className='font-bold text-fuchsia-900'>Noâ</span> <br></br> et je suis développeuse  React / Next.js </h2>

          <p className='hidden md:text-xl md:mb-20 md:italic'><span className='font-bold text-fuchsia-900'>Ici ,</span> tu pourras avoir un aperçu mes compétences, quelques uns de mes projets et mes experiences.</p>

          <a href='#Contact' className='text-xl rounded-full py-2.5 md:py-4  px-5 md:px-6 bg-gradient-to-l from-purple-700 to-fuchsia-700 shadow-2xl'>Me contacter &gt; &gt;</a>
        </div>

        <div className="z-0 hidden w-5/6 md:block lg:max-w-lg lg:w-full md:w-1/2 ">
          <img
            className="object-cover object-center rounded"
            alt="hero"
          src={process.env.PUBLIC_URL + "img/hero-pattern.svg"}
          />
        </div>
        

      </div>

      <div className='w-12 h-12 p-2 m-auto mt-12 mb-6 text-center border-2 border-white border-solid rounded-full shadow-xl md:mb-20 md:mt-0 animate-bounce '>
        <a href='#Career'>
          <FontAwesomeIcon icon={faArrowDown}/>
        </a>
     
      </div>
   </div>
  )
}
