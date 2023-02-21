import React from 'react';

export default function About() {
  return (
    <div id='About' className='flex items-center justify-around pb-20'>

       <div className='z-40 p-5 w-2/5'> 
            <h1 className='text-5xl  italic mb-8 font-semibold '>Bienvenue <br></br> dans mon <span className='text-fuchsia-900 font-bold'>Portfolio.</span></h1>

            <h2 className='text-2xl mb-8'>Salut , je m'appelle <span className='text-fuchsia-900 font-bold'>Noâ</span> <br></br> et je suis développeuse Front-end / React.</h2>

            <p className='text-xl mb-20 italic'><span className='text-fuchsia-900 font-bold'>Ici ,</span> tu pourras avoir un aperçu mes compétences, quelques uns de mes projets et mes experiences.</p>

           <a href='#Contact' className='text-xl rounded-full py-4 px-6 bg-gradient-to-l from-purple-700 to-fuchsia-700 shadow-2xl'>Me contacter &gt; &gt;</a>
        </div>

        <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 z-0 ">
          <img
            className="object-cover object-center rounded "
            alt="hero"
            src="/img/hero-pattern.svg"
          />
        </div>
   </div>
  )
}
