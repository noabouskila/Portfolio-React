import React from 'react'

export default function Cv() {
  return (
    <div className='flex flex-col mx-auto mt-12 h-52 md:h-96 '>
      <h3 className='mb-6 text-xl italic font-semibold text-center'> Mon CV Dev React / Next.js</h3>
      <a href='https://www.canva.com/design/DAGgBShAl6M/xXAFE6IsBBUsn5NNCy8xlA/view?utm_content=DAGgBShAl6M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h55ec6924e1' >
        <img className='absolute object-cover object-top w-9/12 ml-8 rounded shadow-xl peer hover:bg-slate-700/50 hover:opacity-10 cursor:pointor md:ml-32 h-52 md:h-96' src={process.env.PUBLIC_URL + 'img/part-cv.png'} alt="CV NOA BOUSKILA BAROUKH 2025"/>
        <span className='relative z-10 w-full text-sm font-bold opacity-0 peer-hover:opacity-100 left-12 md:top-32 md:left-96 md:text-xl'>Clickez pour visualiser.</span>
      </a>
    </div>
  )
}

