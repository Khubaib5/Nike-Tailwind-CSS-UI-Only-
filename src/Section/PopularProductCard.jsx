import React from 'react'
import { star } from '../assets/nike_landing_assets/assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full  hover:border-coral-red border-2px'>
        <img src={imgURL} alt={name} className='w-[280px] h-[280px]translate-x-6'/>
        <div className='mt-8 flex justify-start gap-2.5'>
            <img src={star} alt="" width={24} height={24}/>
            <p className='font-montserrat text-xl leading-normal text-slate-gray mt-3'>4.5</p>
            <br />
        </div>
            <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
            <br />
            <p className='mt-2 font-semibold font-montserrat text-coral-red text-21x'>{price}</p>
    </div>
  )
}

export default PopularProductCard