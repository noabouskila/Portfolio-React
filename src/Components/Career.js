import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'


export default function Career() {
  return (
    <div id="Career" className='py-20 text-center bg-violet-200 '>
       
      <div className='justify-center text-3xl flex items-end mb-12 '>
        <h2 className='mr-6 italic text-2xl  font-bold text-slate-900'>Mon Parcours</h2>
        <FontAwesomeIcon icon={faCode} color='black'/>
      </div>

      <div className='flex px-6 justify-around '>

        <div className='hidden md:block md:w-1/2 md:-mt-10'>
          <img src='img/career-evolution.svg' alt='mon parcours pro'/>
        </div>

        <div className='md:w-1/2  text-slate-900 font-semibold'>

          <div className=' flex flex-col md:flex-row my-4  justify-between border-white/50 border-solid border-b-2 rounded-lg p-2 md:p-4 shadow-2xl px-4 w-full bg-fuchsia-400/50'>
            <span className='font-bold italic'>2020</span>
            <p>Certification Intégration Web SocialBuilder.</p>
          </div>

          <div className='flex flex-col md:flex-row my-4  justify-between border-white/50 border-solid border-b-2  rounded-lg p-2 md:p-4  shadow-2xl px-4 w-full bg-fuchsia-400/50'>
            <span className='font-bold italic'>2020</span> 
            <p>Stage Développeuse web chez Taeho Conseil.</p>

          </div>

          <div className=' flexflex-col md:flex-row my-4 justify-between border-white/50 border-solid border-b-2  rounded-lg p-2 md:p-4 shadow-2xl px-4 w-full bg-fuchsia-400/50 '>
            <span className='font-bold italic'>2021</span>
            <p>Bac+3 Chef de Projet & Dev Full-Stack chez Doranco.</p>
          </div>


          <div className=' flex flex-col md:flex-row my-4  justify-between border-white/50 border-solid border-b-2  rounded-lg p-2 md:p-4 shadow-2xl px-4 w-full bg-fuchsia-400/50'>
            <span className='font-bold italic'>2022</span>
            <p>Stage Développeuse & gestion de projet chez LMDK.</p>
          </div>

          <div className=' flex flex-col md:flex-row my-4  justify-between border-white/50 border-solid border-b-2  rounded-lg p-2 md:p-4  shadow-2xl px-4 w-full bg-fuchsia-400/50 '>
            <span className='font-bold italic'>2023</span>
            <p>Bac+4 Diplome Dev React/JS chez OpenClassrooms.</p>
          </div>

          <div className=' flex flex-col md:flex-row my-4  justify-between border-white/50 border-solid border-b-2  rounded-lg p-2 md:p-4  shadow-2xl px-4 w-full bg-fuchsia-400/50'>
            <span className='font-bold italic'>2023</span>
            <p>Dev React & LWC Salesforce chez PSM Consulting.</p>
          </div>

        </div>

      </div>
      
    </div>
  )
}
