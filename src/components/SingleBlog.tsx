import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoIosArrowBack } from 'react-icons/io';
import { CiHeart } from "react-icons/ci";
import BuyAlbum from './BuyAlbum';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useQuery } from '@tanstack/react-query';
import { fetchSingleBlog } from '../api';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import extractFileName from '../utils/extractFIleName';
import { EditorJSRenderer } from './EditorJSRenderer';

function SingleBlog() {
  const { id } = useParams();
  console.log(id)
  const { data, isLoading } = useQuery({
    queryFn: () => fetchSingleBlog(id),
    queryKey: ['singleblog', id]
  })
 
  console.log(data)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  if (isLoading)
    return (
    <div className='flex justify-center items-center w-full h-screen'>
      <h2 className='font-bold text-3xl text-textLight'>Loading....</h2>
    </div>)
  else {
    const blogContent = JSON.parse(data.content)

    console.log(blogContent)
    console.log(data.content)
    return (
      <div className='flex w-full'>
        <div className='w-1/6'></div>
        <div className='w-5/6 ml-4'>
          <div className="w-[90%]">
            <div className='image-holder relative flex justify-center items-center h-[620px]'>
              <div className='mt-5 absolute top-5 z-50 left-10'>
                <Link to="/"><button className='flex items-center font-inter font-normal text-base text-textLight'><IoIosArrowBack className='mr-4' />Back</button></Link>
              </div>
              <div className='absolute z-20 h-[620px] w-full blur-sm bg-transparentBackground'></div>
              <div className={` absolute image-container w-full blur-sm h-[620px] bg-[url("http://192.168.1.227:5000/api/images/${extractFileName(data.image)}")] bg-contain z-10`}>
                {/* <img className='absolute' src="https://s3-alpha-sig.figma.com/img/08dd/958e/934f67e6377d8861a975b9cf9c2a425f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CqC14rK~f~mQr47vOCV9PEh7iQ60gyFMQZxt4UpRiHF8fgAniLUt3vRy6k~7Vhpwxq6oaDbfXworvS~oPESZwJ~jdfkPxLV~3piOKETIdS6EOy8JNsYvAd~JRWbBUgnSN2zdklyvXsKTqXGabHRZgVAty7Nva9BKgx7GVSqNxbMq7CambBzmZdQc5BvJkclMH3hVjYKzni7H64nUaC8BdqTb4VwPpGBtGCneoJVK0syHnxwzS6vr-7SJDUVLDjxBKb4405K4mAD-0nQbY8v2bCRAyoRdNM-M8EtTekMPnQ3mpQTpedXp6erSCD4cttaAHPYA7nb3IEgmeP8MVtveVQ__" alt="" />  */}
              </div>
              <div className='w-full h-80 z-40 flex flex-col items-center'>
                <div className="album-cover broder-2 border-solid border-textLight w-60 h-60 rounded-md overflow-hidden relative">
                  {/* <FaRegCirclePlay className='absolute top-0 bottom-0 left-0 right-0 m-auto text-4xl text-textLight cursor-pointer hover:text-accent transition' /> */}
                  <img className='w-full h-full' src={`http://192.168.1.227:5000/api/images/${extractFileName(data.image)}`} alt="" />
                </div>
                <div className='mt-4 flex flex-col items-center'>
                  <p className='font-urbanist font-semibold text-3xl text-textLight text-center'>{data.title}</p>
                  <p className='font-workSans font-light text-md text-textLight text-center mx-4'>{data.overview}</p>
                  <div className='w-64 flex items-center justify-center mt-4'>
                    <button className='border-[1px] border-solid border-textLight rounded-3xl px-4 py-2 font-inter font-semibold text-sm text-textLight flex items-center'> <CiHeart className='text-xl' /> Favorite</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="nft-details mt-8 pb-6 border-b-[2px] border-solid border-textSecondary-100 bord">
              <p className='font-urbanist font-semibold text-2xl text-textLight'>About this Blog</p>
              <div className='flex w-[90%] font-workSans font-light text-md text-textLight mt-4'>
                <div className='w-full mr-2'>
                  {/* <EditorJSRenderer data={data.content}/> */}
                  {blogContent.blocks.map((item: any) => {
                    if (item.type == 'paragraph')
                      return <p key={item.id} className='text-justify'>{item.data.text}</p>
                    else if(item.type == 'list')
                      return (
                    <ul key={item.id} className='list-disc ml-5'>
                      {item.data.items.map((list:any, i:any)=>(<li key={i}>{list}</li>))}
                    </ul>
                    );
                    else if (item.type == 'image')
                      return(
                        <div key={item.id} className='w-full'>
                          <img className='w-full' src={`http://192.168.1.227:5000/api/images/${extractFileName(item.data.file.url)}`} alt="image" />
                        </div>
                      )
                    else if (item.type == 'code')
                      return (
                        <div key={item.id}
                          className="mx-auto my-2 w-[500px] bg-gray-950 rounded-xl overflow-hidden drop-shadow-xl "
                        >
                          <div className="bg-[#333] flex items-center p-[5px] text-whitec relative">
                            <div className="flex absolute left-3">
                              <span className="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
                              <span className="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
                              <span className="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
                            </div>
                            <div className="flex-1 text-center text-white">status</div>
                          </div>
                          <div className="p-2.5 text-[#0f0]">
                            <div>
                              <p>{item.data.code}</p>
                            </div>
                          </div>
                        </div>
                      )
                    else if(item.type == 'header')
                      return<p key={item.id} className='text-xl font-bold font-urbanist my-2'>{item.data.text}</p>
                  })}
                </div>

              </div>
            </div>
            <div>
              <div className='buy-albums mt-8'>
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
}

export default SingleBlog


