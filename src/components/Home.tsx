import React, { FC, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import Card from './Card';
import { useQuery } from '@tanstack/react-query';
import { fetchBlog } from '../api';
import { Link } from 'react-router-dom';
import imageURL from '../utils/imageURL';
const Home: FC = () => {
    const [inputSearch, setInputSearch] = useState("");
    const [isSearching, setIsSearching] = useState(false)
    const [searchResult, setSearchResult] = useState<any>();
    const handleChange = (e: any) => {
        setInputSearch(e.target.value);
    }
    const handleSearch = () => {
        if (inputSearch == "") {
            return
        }
        setIsSearching(true);
        const result = data?.data.filter((item: any) => item.title.toLowerCase().includes(inputSearch.toLowerCase()))
        console.log(result)
        setSearchResult(result)
    }

    const { data, isLoading } = useQuery({
        queryFn: () => fetchBlog(),
        queryKey: ['blogs']
    })

    if (isLoading) return (
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
                            <div className="filter-section flex flex-col-reverse md:flex-row lg:flex-row mt-10 items-center justify-between">
                                <div className="dropdown font-urbanist flex my-4 justify-start">
                                    <button className='px-4 py-2 mr-2 border-[1px] text-textLight border-textLight rounded-[40px]'>All types</button>
                                    <button className='px-4 py-2 ml-2 border-[1px] text-textLight border-textLight rounded-[40px]'>Recommended</button>
                                </div>
                                <div className="search relative font-workSans">
                                    <CiSearch className='absolute top-3 text-2xl left-2 text-textSecondary-200' />
                                    {isSearching && <FaTimes className='absolute top-3 text-2xl right-[75px] text-accent cursor-pointer' onClick={() => { setIsSearching(false); setInputSearch(''); }} />}
                                    <div className='flex'>
                                        <input type="text" placeholder=' Search blogs...' value={inputSearch} onChange={handleChange} className='w-96 h-12 bg-searchInput font-light text-sm py-2 pl-8 rounded-tl rounded-bl border-[1px] border-searchInputBorder text-textSecondary-200' />
                                        <button className='bg-accent py-3 px-2 rounded-tr rounded-br' onClick={handleSearch}>Search</button>
                                    </div>
                                    {isSearching && <div className='w-96 bg-transparentGlass absolute z-50 rounded-bl rounded-br px-2'>
                                        {
                                            searchResult?.length === 0 ? (<p className='bg-background m-2 p-2 text-textLight font-workSans font-semibold'>No result found.</p>) :
                                                searchResult?.map((item: any) => (
                                                    <Link to={`/blogs/${item.id}`}>
                                                        <div className='w-full h-24 my-4 flex p-2 bg-background rounded'>
                                                            <div className='w-[40%] h-full'>
                                                                <img className='w-full h-full' src={imageURL(item.image)} alt="photo" />
                                                            </div>
                                                            <div className='w-[60%] ml-2 pr-2'>
                                                                <p className='whitespace-nowrap overflow-hidden text-ellipsis text-textLight font-semibold text-xl'>{item.title}</p>
                                                                <div className='h-8 overflow-hidden text-textLight'>
                                                                    <p className='font-medium'>{item.overview}</p>
                                                                </div>
                                                                <div className='flex'>

                                                                    <p className='font-semibold text-textLight'>{item.author.name}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))
                                        }
                                    </div>}

                                </div>
                            </div>
                            <div className="card-section mt-8 grid grid-cols-[repeat(auto-fill,minmax(288px,1fr))]">
                                {data?.data.map((item: { title: string; id: string; image: string; author: { name: string; }; createdAt: string; }, i: number) => (<Link key={i} to={`blogs/${item.id}`}><Card title={item.title} id={item.id} image={item.image} authorName={item.author.name} createdAt={item.createdAt} /> </Link>))}
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
}

export default Home