import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='flex justify-center items-center gap-2 bg-coral-red hover:bg-red-700 text-white font-bold py-7 px-4 border border-red-coral hover:border-yellow-700 rounded-full leading-none text-lg h-2'>
      {label}
      {
        iconURL &&<img src={iconURL} alt="icon" className='ml-2 rounded-full w-5 h-5' />
      }
    </button>
  )
}

export default Button