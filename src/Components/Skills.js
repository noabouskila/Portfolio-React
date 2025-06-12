import React from 'react'
import { skills } from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Cv from './Cv';


export default function Skills() {
  return (
    <div id="Skills" className='py-8 mb-12'>
      <div className='flex items-end justify-center my-4 text-3xl md:my-12'>
        <h2 className='mr-6 text-2xl italic font-bold'>Compétences <span className='hidden md:block'>& Technologies</span></h2>
        <FontAwesomeIcon icon={faBriefcase}/>
      </div>

      <div className="flex flex-wrap w-11/12 mx-auto mb-2 -mx-2 md:w-4/5">
        {skills.map((skill) => (
          <div key={skill} className="w-1/2 p-2 md:w-1/3">
            <div className="flex items-center h-full p-2 bg-gray-800 rounded md:p-4">
            <FontAwesomeIcon icon={faCheckCircle} className="flex-shrink-0 w-4 h-6 mr-4 text-green-400 md:w-6" />
              <span className="text-sm font-medium text-white title-font md:text-lg ">
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
