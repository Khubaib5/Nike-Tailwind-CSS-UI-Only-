import React from 'react'
import { services } from '../constants'

function ServiceCard({imgURL, label, subtext}) {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[23px] shadow-3xl px-10 py-16 max-sm:flex max-sm:flex-row'>
        <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full max-sm:w-24 max-sm:mt-7 max-sm:mr-3'>
             <img src={imgURL} alt={label} width={24} height={24}/>
        </div>
             <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold max-sm:text-[1.3rem] max-sm:ml-3'>{label}</h3>
             <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray max-sm:text-[15px] max-sm:ml-8'>{subtext}</p>

    </div>
  )
}

export default ServiceCard