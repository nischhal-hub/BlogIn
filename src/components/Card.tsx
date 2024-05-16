import React, { FC } from 'react'
import picture from '../assets/Rectangle 2852.png'
type ItemProps = {
  id: string;
  title: string;
  image: string;
  authorName: string;
  createdAt: string;

}
const Card: FC<ItemProps> = (prop) => {
  return (
    <div className='w-72 relative rounded-[12px] mb-3'>
      <div className="price absolute top-3 right-5">
        <p className='bg-textLight rounded-[30px] font-urbanist font-bold px-2 '>{prop.authorName}</p>
      </div>
      <div className='w-72 h-60 bg-transparentGlass rounded-[12px]'>

        <img className='w-full' src={prop.image} alt="cover pic" />
      </div>
      <div className="details mt-3 font-urbanist ">
        <p className='font-bold text-base text-textLight'>{prop.title}</p>
        <p className='font-normal text-sm text-textSecondary-200'>{prop.createdAt.split("T")[0]}</p>
      </div>
    </div>

  )
}

export default Card