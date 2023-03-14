import React from 'react'
import { skills } from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Cv from './Cv';


export default function Skills() {
  return (
    <div id="Skills" className='py-8 mb-12'>
      <div className='justify-center text-3xl my-12 flex items-end'>
        <h2 className='mr-6 italic text-2xl font-bold'>Compétences <span className='hidden md:block'>& Technologies</span></h2>
        <FontAwesomeIcon icon={faBriefcase}/>
      </div>

      <div className="flex flex-wrap w-4/5  mx-auto mb-2 -mx-2">
        {skills.map((skill) => (
          <div key={skill} className="p-2 md:w-1/3  w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">
                {skill}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* import cv */}
      <Cv/>
      

    </div>
  )
}
