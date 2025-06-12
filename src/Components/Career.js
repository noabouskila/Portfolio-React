import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'


export default function Career() {
  return (
    <div id="Career" className='py-8 text-center md:py-20 bg-violet-200'>
       
      <div className='flex items-end justify-center mb-4 text-3xl md:mb-12 '>
        <h2 className='mr-6 text-2xl italic font-bold text-slate-900'>Mon Parcours</h2>
        <FontAwesomeIcon icon={faCode} color='black'/>
      </div>

      <div className='flex justify-around px-6 '>

        <div className='hidden md:block md:w-1/2 md:-mt-10'>
          <img src='img/career-evolution.svg'  alt='mon parcours pro'/>
        </div>

        <div className='text-sm font-semibold md:w-1/2 md:text-lg text-slate-900'>

          <div className='flex flex-col justify-between w-full px-4 my-2 border-b-2 border-solid rounded-lg shadow-2xl md:flex-row md:my-4 border-white/50 md:p-4 bg-fuchsia-400/50'>
            <span className='italic font-bold'>2020</span>
            <p>Certification Intégration Web SocialBuilder.</p>
          </div>

          <div className='flex flex-col justify-between w-full px-4 my-2 border-b-2 border-solid rounded-lg shadow-2xl md:flex-row md:my-4 border-white/50 md:p-4 bg-fuchsia-400/50'>
            <span className='italic font-bold'>2020</span> 
            <p>Stage Développeuse web chez Taeho Conseil.</p>

          </div>

          <div className='flex flex-col justify-between w-full px-4 my-2 border-b-2 border-solid rounded-lg shadow-2xl md:flex-row md:my-4 border-white/50 md:p-4 bg-fuchsia-400/50'>
            <span className='italic font-bold'>2021</span>
            <p>Bac+3 Chef de Projet & Dev Full-Stack chez Doranco.</p>
          </div>


          <div className='flex flex-col justify-between w-full px-4 my-2 border-b-2 border-solid rounded-lg shadow-2xl md:flex-row md:my-4 border-white/50 md:p-4 bg-fuchsia-400/50'>
            <span className='italic font-bold'>2022</span>
            <p>Stage Développeuse & gestion de projet chez LMDK.</p>
          </div>

          <div className='flex flex-col justify-between w-full px-4 my-2 border-b-2 border-solid rounded-lg shadow-2xl md:flex-row md:my-4 border-white/50 md:p-4 bg-fuchsia-400/50'>
            <span className='italic font-bold'>2023-24</span>
            <p>Bac+4 Diplome Dev React/JS chez OpenClassrooms.</p>
          </div>

          <div className='flex flex-col justify-between w-full px-4 my-2 border-b-2 border-solid rounded-lg shadow-2xl md:flex-row md:my-4 border-white/50 md:p-4 bg-fuchsia-400/50'>
            <span className='italic font-bold'>2023-24</span>
            <p>Dev React & LWC Salesforce chez PSM Consulting.</p>
          </div>

          <div className='flex flex-col justify-between w-full px-4 my-2 border-b-2 border-solid rounded-lg shadow-2xl md:flex-row md:my-4 border-white/50 md:p-4 bg-fuchsia-400/50'>
            <span className='italic font-bold'>2025</span>
            <p>Certif Udemy Next.js / ts + Vercel</p>
          </div>
 
        </div>

      </div>
      
    </div>
  )
}
