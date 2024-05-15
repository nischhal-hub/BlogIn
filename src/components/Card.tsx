import React from 'react'
import picture from '../assets/Rectangle 2852.png'

const Card = () => {
  return (
    <div className='w-72 relative rounded-[12px] mb-3'>
        <div className="price absolute top-3 right-5">
            <p className='bg-textLight rounded-[30px] font-urbanist font-bold px-2 '>$13.99</p>
        </div>
        <img className='w-full' src={picture} alt="cover pic" />
        <div className="details mt-3 font-urbanist ">
            <p className='font-bold text-base text-textLight'>Fermentum et orci.</p>
            <p className='font-normal text-sm text-textSecondary-200'>Aug 12, 2022 21:45</p>
        </div>
    </div>

  )
}

export default Card