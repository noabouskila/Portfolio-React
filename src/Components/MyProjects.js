import React from 'react'
import { projects } from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

export default function MyProjects() {
  return (
    <div id="Projects"  className='py-20 bg-slate-900'>
      <div className='justify-center text-3xl my-12 flex items-end'>
        <h2 className='mr-6 italic font-bold text-2xl'>Mes Projets</h2>
        <FontAwesomeIcon icon={faRocket}/>
      </div>
      

      <div className="flex flex-wrap w-11/12 mx-auto">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4 ">

              <div className="flex relative ">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl shadow-2xl h-60"
                  src={'process.env.PUBLIC_URL/'+project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 h-60 rounded-3xl">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-sm md:text-lg">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
      </div>

    </div>


   
  )
}
