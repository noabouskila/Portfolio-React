import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin , faSquareGithub} from "@fortawesome/free-brands-svg-icons"
import {faBars, faClose, faEnvelope, faGlobe} from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const handleClick =()=>{

    setIsMenuOpen(!isMenuOpen);
    console.log("mon menu"+ isMenuOpen);
  }

  return (
    <nav className='flex flex-row  p-6 mb-4 justify-between'>
       
        <a href='#About' className='font-bold italic text-2xl max-md:m-auto '>Noa Baroukh</a>

        {/* menu burger pour le mobile */}
        <div className='lg:hidden'>

          <div 
          onClick={handleClick}>
            <FontAwesomeIcon icon={faBars}/>
          </div>

          <div className={isMenuOpen ? "showMenuNav" : "hideMenuNav"} onClick={handleClick}>
            <FontAwesomeIcon icon={faClose} className='text-violet-800' />


            <ul className='flex flex-col text-3xl space-y-12  text-violet-800 w-full text-center '>
              {/* lg:flex-row space-y-12 lg:space-y-0  */}
              <li className='hover:bg-violet-600/50  py-2'>
                <a href='#Career'>Career</a>
              </li>
              <li className='hover:bg-violet-600/50  py-2'>
                <a href='#Skills'>Skills</a>
              </li>
              <li className='hover:bg-violet-600/50  py-2'>
                <a href='#Projects'>Projects</a>
              </li>
              <li className='hover:bg-violet-600/50  py-2'>
                <a href='#Contact'>Contact</a>
              </li>
            </ul>

          </div>


          {/* STYLE POUR BURGER MENU */}
          <style>{`
            .hideMenuNav {
              display: none;
            }
            .showMenuNav {
              display: block;
              position: absolute;
              width: 100%;
              height: 850vh;
              top: 0;
              right: 0;
              z-index: 100;
              display: flex;
              background-color: white;
              flex-direction: column;
              align-items: end;
              padding : 6% 5%;
            }
          `}
          </style>

        </div>

        <ul className=' lg:flex lg:flex-row  lg:space-y-0 lg:space-x-12 lg:text-2xl hidden '>
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
       

        {/* logos toujours hidden en mobile */}
       <div className=' lg:flex lg:flex-row lg:space-x-7 lg:items-center hidden '>
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
