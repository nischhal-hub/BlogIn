// import React from 'react'
import { TiHome } from "react-icons/ti";
//import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { SiWritedotas } from "react-icons/si";
//import { MdOutlineStorefront } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlinePerson } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { FaLinkedin, FaTelegram,FaDiscord,FaInstagram,FaTwitter } from "react-icons/fa";


type SidebarLink = {
    label: string;
    icon: JSX.Element; // Assuming these are React icons
    url: string;
};

type SidebarSection = {
    page: string;
    links: SidebarLink[];
};

type SidebarLinks = SidebarSection[];


export const sidebarLinks: SidebarLinks = [
    {
        page:'page-urls',
        links : [
            {label:"Home",icon:<TiHome />,url:'/' },
            //{label:"Explore",icon:<MdOutlineExplore/>,url:'/explore' },
            {label:"Add blog",icon:<SiWritedotas />,url:'/addblog' },
        ]
    },
    {
        page:'personal',
        links : [
            {label:"Profile",icon:<MdOutlinePerson/>,url:'/profile' },
            {label:"Saved",icon:<MdOutlineVideoLibrary/>,url:'/saved' },
            // {label:"Calendar",icon:<FaRegCalendarAlt/>,url:'/calendar' },
            // {label:"Settings",icon:<AiOutlineSetting/>,url:'/settings' },
            // {label:"Discord",icon:<FaDiscord/>,url:'/discord' },
            {label:"Log out",icon:<MdLogout/>,url:'/logout' },
        ]
    }
]

export const footerURLs = [
    {label:'Home', url:'/'},
    {label:'Community', url:'/'},
    {label:'Explore', url:'/'},
    {label:'Contact', url:'/'},
    {label:'Terms', url:'/'},
    {label:'Privacy', url:'/'},
]

export const socialURLs = [
    {icon:<FaLinkedin/>, url:'/'},
    {icon:<FaTelegram/>, url:'/'},
    {icon:<FaDiscord/>, url:'/'},
    {icon:<FaInstagram/>, url:'/'},
    {icon:<FaTwitter/>, url:'/'},
]