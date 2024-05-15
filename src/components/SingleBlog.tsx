import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoIosArrowBack } from 'react-icons/io';
import { CiHeart } from "react-icons/ci";
import BuyAlbum from './BuyAlbum';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SingleBlog() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className='flex w-full'>
      <div className='w-1/6'></div>
      <div className='w-5/6 ml-4'>
        <div className="w-[90%]">
          <div className='image-holder relative flex justify-center items-center h-[620px]'>
            <div className='mt-5 absolute top-5 z-50 left-10'>
              <button className='flex items-center font-inter font-normal text-base text-textLight'><IoIosArrowBack className='mr-4' />Back</button>
            </div>
            <div className='absolute z-20 h-[620px] w-full blur-sm bg-transparentBackground'></div>
            <div className=" absolute image-container w-full blur-sm h-[620px] bg-[url('https://s3-alpha-sig.figma.com/img/08dd/958e/934f67e6377d8861a975b9cf9c2a425f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CqC14rK~f~mQr47vOCV9PEh7iQ60gyFMQZxt4UpRiHF8fgAniLUt3vRy6k~7Vhpwxq6oaDbfXworvS~oPESZwJ~jdfkPxLV~3piOKETIdS6EOy8JNsYvAd~JRWbBUgnSN2zdklyvXsKTqXGabHRZgVAty7Nva9BKgx7GVSqNxbMq7CambBzmZdQc5BvJkclMH3hVjYKzni7H64nUaC8BdqTb4VwPpGBtGCneoJVK0syHnxwzS6vr-7SJDUVLDjxBKb4405K4mAD-0nQbY8v2bCRAyoRdNM-M8EtTekMPnQ3mpQTpedXp6erSCD4cttaAHPYA7nb3IEgmeP8MVtveVQ__')] bg-contain z-10">
              {/* <img className='absolute' src="https://s3-alpha-sig.figma.com/img/08dd/958e/934f67e6377d8861a975b9cf9c2a425f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CqC14rK~f~mQr47vOCV9PEh7iQ60gyFMQZxt4UpRiHF8fgAniLUt3vRy6k~7Vhpwxq6oaDbfXworvS~oPESZwJ~jdfkPxLV~3piOKETIdS6EOy8JNsYvAd~JRWbBUgnSN2zdklyvXsKTqXGabHRZgVAty7Nva9BKgx7GVSqNxbMq7CambBzmZdQc5BvJkclMH3hVjYKzni7H64nUaC8BdqTb4VwPpGBtGCneoJVK0syHnxwzS6vr-7SJDUVLDjxBKb4405K4mAD-0nQbY8v2bCRAyoRdNM-M8EtTekMPnQ3mpQTpedXp6erSCD4cttaAHPYA7nb3IEgmeP8MVtveVQ__" alt="" />  */}
            </div>
            <div className='w-60 h-80 z-40'>
              <div className="album-cover w-60 h-60 rounded-md overflow-hidden relative">
                <FaRegCirclePlay className='absolute top-0 bottom-0 left-0 right-0 m-auto text-4xl text-textLight cursor-pointer hover:text-accent transition' />
                <img className='w-full' src="https://s3-alpha-sig.figma.com/img/08dd/958e/934f67e6377d8861a975b9cf9c2a425f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CqC14rK~f~mQr47vOCV9PEh7iQ60gyFMQZxt4UpRiHF8fgAniLUt3vRy6k~7Vhpwxq6oaDbfXworvS~oPESZwJ~jdfkPxLV~3piOKETIdS6EOy8JNsYvAd~JRWbBUgnSN2zdklyvXsKTqXGabHRZgVAty7Nva9BKgx7GVSqNxbMq7CambBzmZdQc5BvJkclMH3hVjYKzni7H64nUaC8BdqTb4VwPpGBtGCneoJVK0syHnxwzS6vr-7SJDUVLDjxBKb4405K4mAD-0nQbY8v2bCRAyoRdNM-M8EtTekMPnQ3mpQTpedXp6erSCD4cttaAHPYA7nb3IEgmeP8MVtveVQ__" alt="" />
              </div>
              <div className='mt-4'>
                <p className='font-urbanist font-semibold text-3xl text-textLight text-center'>I like me better</p>
                <p className='font-workSans font-light text-md text-textLight text-center'>Reo Cragun</p>
                <div className='flex justify-between mt-2'>
                  <button className='border-[1px] border-solid border-textLight rounded-3xl px-4 py-2 font-inter font-semibold text-sm text-textLight flex items-center'> <CiHeart className='mr-2 text-xl' /> Favorite</button>
                  <button className='bg-accent rounded-3xl px-6 py-2 font-inter font-semibold text-sm text-textSecondary-100'>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="nft-details mt-8 border-b-[2px] border-solid border-textSecondary-100 bord">
            <p className='font-urbanist font-semibold text-2xl text-textLight'>About this NFT</p>
            <div className='flex w-[90%] font-workSans font-light text-sm text-textLight mt-4'>
              <div className='w-1/2 mr-2'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quia minima, nam maxime quae odio dolorem dignissimos dolor accusamus tenetur architecto, illo perferendis eius dolores? Autem magnam eius voluptatem enim iusto cupiditate nulla dolore aspernatur recusandae explicabo reprehenderit voluptates, amet repudiandae modi molestias dolorum nesciunt minus harum magni qui vero. Quasi veniam dolorem fugiat saepe. Ducimus iure ut nulla, nesciunt quisquam eius, dolor consectetur nam maxime laboriosam ratione assumenda, nobis delectus molestiae. Perferendis iste quaerat quae suscipit sint aut tempore laudantium odio dolorum necessitatibus ab molestias dolorem quidem ad repudiandae velit veniam ea, voluptatibus, soluta cum eligendi. Magnam, placeat quas.</p>
              </div>
              <div className='w-1/2 mr-2 pb-8'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quia minima, nam maxime quae odio dolorem dignissimos dolor accusamus tenetur architecto, illo perferendis eius dolores? Autem magnam eius voluptatem enim iusto cupiditate nulla dolore aspernatur recusandae explicabo reprehenderit voluptates, amet repudiandae modi molestias dolorum nesciunt minus harum magni qui vero. Quasi veniam dolorem fugiat saepe. Ducimus iure ut nulla, nesciunt quisquam eius, dolor consectetur nam maxime laboriosam ratione assumenda, nobis delectus molestiae. Perferendis iste quaerat quae suscipit sint aut tempore laudantium odio dolorum necessitatibus ab molestias dolorem quidem ad repudiandae velit veniam ea, voluptatibus, soluta cum eligendi. Magnam, placeat quas.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='buy-albums mt-6'>
              <p className='font-urbanist font-semibold text-2xl text-textLight'>More from the artist</p>
              <div className="slider-container mt-4">
                <Slider {...settings}>
                  {Array.from({ length: 10 }).map((_, i) => (<BuyAlbum key={i} />))}
                </Slider>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog


