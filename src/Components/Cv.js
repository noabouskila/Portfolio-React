import React from 'react'

export default function Cv() {
  return (
    <div className='flex flex-col  mt-12 h-52  md:h-96 mx-auto '>
      <h3 className='italic text-xl font-semibold mb-6 text-center'> Mon CV Dev Front-end</h3>
      <a href='https://imagizer.imageshack.com/img922/8884/BWeLE6.jpg' >
        <img className='peer rounded shadow-xl hover:bg-slate-700/50 hover:opacity-10 cursor:pointor absolute w-9/12 ml-8 md:ml-32 object-cover object-top h-52 md:h-96' src='https://noabouskila.github.io/Portfolio-React/img/CVNOA2023.jpg' alt="CV NOA BOUSKILA BAROUKH 2023"/>
        <span className='opacity-0 peer-hover:opacity-100 font-bold relative left-12 md:top-32  md:left-96 z-10 w-full text-sm md:text-xl'>Clickez pour visualiser.</span>
      </a>
    </div>
  )
}
