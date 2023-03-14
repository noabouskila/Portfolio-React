import React from 'react';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About() {
  return (
    <div id='About'>

      <div className='flex items-center justify-around '>

      <div className='z-40 w-11/12 md:w-2/5  md:p-5'> 
            <h1 className=' text-3xl md:text-5xl  italic mb-8 font-semibold '>Bienvenue <br></br> dans mon <span className='text-fuchsia-900 font-bold'>Portfolio.</span></h1>

            <h2 className='text-xl md:text-2xl mb-8'>Salut , je m'appelle <span className='text-fuchsia-900 font-bold'>Noâ</span> <br></br> et je suis développeuse Front-end / React.</h2>

            <p className='hidden md:text-xl md:mb-20 md:italic'><span className='text-fuchsia-900 font-bold'>Ici ,</span> tu pourras avoir un aperçu mes compétences, quelques uns de mes projets et mes experiences.</p>

           <a href='#Contact' className='text-xl rounded-full py-2.5 md:py-4  px-5 md:px-6 bg-gradient-to-l from-purple-700 to-fuchsia-700 shadow-2xl'>Me contacter &gt; &gt;</a>
        </div>

        <div className="hidden md:block lg:max-w-lg lg:w-full md:w-1/2 w-5/6 z-0 ">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="'https://noabouskila.github.io/Portfolio-React/img/hero-pattern.svg"
          />
        </div>

      </div>

      <div className='mt-12 mb-6 md:mb-20  md:mt-0 animate-bounce border-2 border-white border-solid p-2 rounded-full shadow-xl w-12 h-12 text-center m-auto '>
        <a href='#Career'>
          <FontAwesomeIcon icon={faArrowDown}/>
        </a>
     
      </div>
   </div>
  )
}
