import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin , faSquareGithub} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faGlobe} from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
  return (
    <nav className='flex flex-row  p-4 justify-between '>
       
        <a href='#About' className='font-bold italic text-2xl'>Noa Baroukh</a>

        <ul className='flex flex-row space-x-12 text-xl'>
          <li>
            <a href='#Career'>Career</a>
          </li>
          <li>
            <a href='#Skills'>Skills</a>
          </li>
          <li>
            <a href='#Projects'>Projects</a>
          </li>
          <li>
            <a href='#Contact'>Contact</a>
          </li>
        </ul>

       <div className='flex flex-row space-x-7 items-center'>
           <a href='https://www.linkedin.com/in/noa-bouskila/ ' target='blank'> 
                <FontAwesomeIcon icon={faLinkedin} className=' fa-lg shadow-lg border-2 border-white border-solid rounded-full p-2'/>
           </a>
            <a href='https://github.com/noabouskila' target='blank'>
                <FontAwesomeIcon icon={faSquareGithub}  className='fa-lg shadow-lg border-2 border-white border-solid rounded-full p-2'/>
            </a>
           <a href='https://noabouskila.fr/' target='blank'>
                <FontAwesomeIcon icon={faGlobe}  className='fa-lg shadow-lg border-2 border-solid border-white rounded-full p-2'/>
           </a>
           <a href='mailto:noabouskil@gmail.com' target='blank'>
                <FontAwesomeIcon icon={faEnvelope}  className='fa-lg shadow-lg border-2 border-solid border-white rounded-full p-2'/>
           </a>
        </div>
    </nav>
  )
}
