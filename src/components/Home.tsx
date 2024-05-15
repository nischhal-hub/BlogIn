import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { CiSearch } from "react-icons/ci";
import Card from './Card';
const Home = () => {
    
    return (
        <>
            <div className='flex w-full'>
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
                            {Array.from({length:11}).map((_,i)=>(<Card key={i}/>))}
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home