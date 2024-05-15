import React from 'react'
import { FaHeadphonesAlt } from "react-icons/fa";

const BuyAlbum = () => {
    return (
        <>
            <div className="card relative w-56 h-72 rounded-sm overflow-hidden bg-cover bg-[url('https://s3-alpha-sig.figma.com/img/87f8/7a9a/65b9e79a460a77cea10271e473197224?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dFhLwI2lYGi4-chKsdW7Wk~hKZVpPzrIMuhMb75CHf16aY3QKhNFlUwDmuA~hf6Cikndk8vd8E5rALrlgSAMmQzk3WXE2l4JYOI8QJ64EF9rdD4aS32~EdD-2y7Z-2KXdM7KevOXn29QHPdNY4cN-peBjjgR2ZSE7uLCQbwF~dQXmaofPE20uJ9SAf-eGYxrWW9jbdjmUi9bs34qRB-l~ks3FV1Tg1W8YmO8yE-ehjrnUmMODRTaB0bemIw0TiptegixVpxJWsuONZrqOARF-sfVZMaK2mKQRpQMJKJqVpPwA8UHVci422UvbXyaqHKLcir-~~pPHorINsZHnmolZA__')]">
                <div className='absolute top-5 right-5 p-1 border-[1px] border-solid border-textLight cursor-pointer rounded-md bg-transparentGlass '>

                    <FaHeadphonesAlt className='text-textLight ' />
                </div>
                <div className='h-3/5'></div>
                <div className='glass p-2'>
                    <div className="usernames flex justify-between items-center font-workSans text-sm font-light text-textLight">
                        <div className="user flex items-center">
                            <img src="https://th.bing.com/th/id/R.c67998fdc86a1310b0034a715fe5fbba?rik=5Xzz%2bDRM%2f6vCFQ&riu=http%3a%2f%2fsuzinassif.com%2fwp-content%2fuploads%2f2016%2f05%2fabstract-art-picture-gallery.jpg&ehk=AtSfz%2bOtjYNd41y5P2NNTzeQsVvCDUFP1%2bn7p4V6rT4%3d&risl=&pid=ImgRaw&r=0" alt="profile" className='h-4 w-4 rounded-full mr-1' />
                            <p>Reo Cragun</p>
                        </div>
                        <p className='uppercase'>Gems</p>
                    </div>
                    <div className="album-names flex justify-between">
                        <p className='text-xl font-bold font-workSans text-textLight'>Frameworks</p>
                        <p className='text-xl font-bold font-workSans text-textLight'>2.45</p>
                    </div>
                    <button className='mt-2 w-full border-[1px] border-solid border-textLight rounded-3xl px-4 py-2 font-inter font-semibold text-sm text-textLight'>Buy</button>
                </div>
            </div>
        </>
    )
}

export default BuyAlbum