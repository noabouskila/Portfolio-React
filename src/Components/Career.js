import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'


export default function Career() {
  return (
    <div id="Career" className='pb-20'>
      <div className='justify-center text-2xl mb-2 flex items-end'>
        <h2 className='mr-6 italic  font-bold'>Mon Parcours</h2>
        <FontAwesomeIcon icon={faCode}/>
      </div>
    </div>
  )
}
