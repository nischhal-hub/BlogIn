import React, { FC } from 'react'
import picture from '../assets/Rectangle 2852.png'
type ItemProps = {
  id: string;
  title: string;
  image: string;
  authorName: string;
  createdAt: string;

}
function extractFileName(path:string) {
  // Split the path by '\\' or '/'
  var segments = path.split(/[\\"\/]/);
  // Get the last segment, which should be the filename
  var fileName = segments.pop();
  return fileName;
}
const Card: FC<ItemProps> = (prop) => {
  return (
    <div className='w-72 relative rounded-[12px] mb-2'>
      <div className="price absolute top-3 right-5">
        <p className='bg-textLight rounded-[30px] font-urbanist font-bold px-2 '>{prop.authorName}</p>
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