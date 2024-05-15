import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
const Main = () => {
    return (
    <>
        <Navbar />
        <Sidebar />
        <Outlet/>
        <Footer />
    </>
  )
}

export default Main