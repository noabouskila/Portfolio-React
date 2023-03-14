import React from 'react'

export default function Cv() {
  return (
    <div className='flex flex-col items-center mt-12 h-96 justify-center mx-auto w-10/12'>
      <h3 className='italic text-xl font-semibold mb-6'> Mon CV Dev Front-end</h3>
      <a href='https://imagizer.imageshack.com/img922/8884/BWeLE6.jpg' >
        <img className='peer rounded mx-auto shadow-xl hover:bg-slate-700/50 hover:opacity-10 cursor:pointor absolute' src='img/CVNOA2023.jpg' alt="CV NOA BOUSKILA BAROUKH 2023"/>
        <span className='opacity-0 peer-hover:opacity-100 font-bold relative z-10 w-full '>Clickez pour visualiser.</span>
      </a>
    </div>
  )
}
