import React, { FC } from 'react'
import { ItemProps } from '../type';
import extractFileName from '../utils/extractFIleName';


const Card: FC<ItemProps> = (prop) => {
  return (
    <div className='w-72 relative rounded-[12px] mb-2'>
      <div className="price absolute top-3 right-4">
        <p className='bg-textLight rounded-[30px] font-urbanist font-bold px-2 border-2 border-solid border-accent '>{prop.authorName}</p>
      </div>
      <div className='w-72 h-60 bg-transparentGlass rounded-[12px] overflow-hidden'>

        <img className='w-full h-full' src={`http://192.168.1.227:5000/api/images/${extractFileName(prop.image)}`} alt="cover pic" />
      </div>
      <div className="details mt-3 font-urbanist ">
        <p className='font-bold text-base text-textLight'>{prop.title}</p>
        <p className='font-normal text-sm text-textSecondary-200'>{prop.createdAt.split("T")[0]}</p>
      </div>
    </div>

  )
}

export default Card