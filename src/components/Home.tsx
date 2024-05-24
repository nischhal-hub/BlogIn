import React, { FC } from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { CiSearch } from "react-icons/ci";
import Card from './Card';
import { useQuery } from '@tanstack/react-query';
import { fetchBlog } from '../api';
import { Link } from 'react-router-dom';
const Home:FC = () => {
    const {data, isLoading} = useQuery({
        queryFn: ()=>fetchBlog(),
        queryKey : ['blogs']
    })
    if(isLoading)return(
        <div className='flex justify-center items-center w-full h-screen'>
        <h2 className='font-bold text-3xl text-textLight'>Loading....</h2>
        </div>
    )  
    else
    return (
        <> 
            <div className='flex w-full h-auto'>
                <div className='w-1/6'></div>
                <div className='w-5/6'>
                    <div className='w-[90%] ml-2 '>
                        <div className="filter-section flex mt-10 items-center justify-between">
                            <div className="dropdown font-urbanist ">
                                <button className='px-4 py-2 mr-2 border-[1px] text-textLight border-textLight rounded-[40px]'>All types</button>
                                <button className='px-4 py-2 ml-2 border-[1px] text-textLight border-textLight rounded-[40px]'>Recommended</button>
                            </div>
                            <CiSearch className='text-3xl text-textLight'/>
                        </div>
                        <div className="card-section mt-8 grid grid-cols-[repeat(auto-fill,minmax(288px,1fr))]">
                            {data?.data.map((item: { title: string; id: string; image: string; author: { name: string; }; createdAt: string; },i:number)=>(<Link key={i} to={`blogs/${item.id}`}><Card  title={item.title} id={item.id} image={item.image} authorName={item.author.name} createdAt={item.createdAt} /> </Link> ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home