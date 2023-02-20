import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin , faSquareGithub} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faGlobe} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div className='bg-slate-900  flex flex-row justify-between p-8'>
      <h2 className='italic'>Noâ Baroukh Bouskila</h2>
      <ul>
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
      </ul>
    </div>
  )
}
