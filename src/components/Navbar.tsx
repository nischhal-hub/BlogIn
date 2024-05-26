import React from 'react'
import icon from '../assets/Icon 2.png'
import profile from '../assets/Rectangle 17.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { useGlobalContext } from '../hooks/useGlobalContext';
import { useAuth } from '../hooks/useAuth';
import imageURL from '../utils/imageURL';

const Navbar = () => {
    const value = useAuth();
    const {setIsSidebarOpen} = useGlobalContext();
    return (
        <>
            <div className='flex h-20 border-b-[1px] border-borderColor w-full'>
                <div className='flex items-center w-1/6'>
                    <GiHamburgerMenu className='text-textLight m-6 w-9 h-6 cursor-pointer' onClick={()=>(setIsSidebarOpen((v: boolean)=>!v))} />
                    <div className="icon my-4 mx-2 flex justify-center items-center">
                        <img src={icon} alt="icon" />
                        <p className='text-textLight font-urbanist text-2xl font-semibold ml-3'>BlogIn</p>
                    </div>
                </div>
                <div className="profile-controls flex items-center justify-end w-[75%]">
                    {/* <div className="search relative font-workSans">
                        <CiSearch className='absolute top-3 text-2xl left-2 text-textSecondary-200' />
                        <input type="text" placeholder=' Search music, artist, events...' className='w-96 h-12 bg-searchInput font-light text-sm py-2 pl-8 rounded border-[1px] border-searchInputBorder text-textSecondary-200' />
                    </div> */}
                    <div className='flex items-center'>
                        <BiMessageRounded className='text-3xl text-textLight m-4 cursor-pointer' />
                        <MdNotificationsNone className='text-3xl text-textLight m-4 cursor-pointer' />
                        <div className="profile-pic w-10 h-10 mx-4 ml-4 mr-2 pt-1 rounded-md overflow-hidden">
                            <img src={imageURL(value?.user.avatar)} alt="profile picture" className='w-full h-full object-cover' />
                        </div>
                        <p className='font-inter font-semibold text-textLight'>Hi, {value?.user.name}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar