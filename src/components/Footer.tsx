import React from 'react'
import logo from '../assets/Icon 2.png'
import { footerURLs, socialURLs } from '../data'

const Footer = () => {
    return (
        <div className='w-full flex bg-black mt-12 justify-center'>
            <div className='container flex flex-col'>
                <div className='flex items-center justify-between py-5 border-b-2 border-solid border-textSecondary-200'>
                    <div className="about ">
                        <div className="company">
                            <div className='flex items-center mb-6'>
                                <img src={logo} alt="Finay logo" />
                                <p className='font-urbanist text-2xl text-textLight font-semibold ml-4'>Finay</p>
                            </div>
                            <p className='text-sm text-textLight w-96 font-medium font-urbanist'>The only marketplace selling unreleased music, music videos, stems, remixes, royalty rights and more as downloadable files packed into NFTs</p>
                        </div>
                    </div>
                    <div className="footer-links text-textLight font-urbanist text-sm mr-0">
                        {footerURLs.map((item, i) => (
                            <a key={i} href={item.url} className='px-4'>{item.label}</a>
                        ))}
                    </div>

                </div>
                <div className="last-div my-2 flex justify-between items-center">
                    <div className="copyright font-workSans text-textSecondary-100 text-xs font-normal"><p>&copy; Finay. All rights reserved.</p></div>
                    <div className="social-links flex text-2xl">
                        {
                            socialURLs.map((item,i)=>(
                                <a key={i} href={item.url} className='p-2 text-textLight'>{item.icon}</a>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer