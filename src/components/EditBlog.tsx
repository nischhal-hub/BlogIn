import React, { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Editor from './Editor';
import { editBlog } from '../api';
import { useGlobalContext } from '../hooks/useGlobalContext';
import { Link, useParams } from 'react-router-dom';
import { FormFields } from '../type';
import imageURL from '../utils/imageURL';
//*icons import
import { IoIosArrowBack } from 'react-icons/io'
import { MdVerified } from "react-icons/md";
import { BiSolidImageAdd } from "react-icons/bi";
import { useAuth } from '../hooks/useAuth';
interface EditData {
    formData:FormData;
    id:string|undefined;
    authId:string|undefined;
}

const EditBlog: FC = () => {
    const value = useAuth();
    const authId = value?.user.id;
    const queryClient = useQueryClient();
    const { description, isEditing, setIsEditing, editId, setEditId,blogs } = useGlobalContext();
    const { id } = useParams();
    const [file, setFile] = useState("");
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormFields>();
    const [formImage, setFormImage] = useState<any>();
    
    //*list the item to be edited in the page.
    const blogDesc = blogs[1].data.data.find((item:any)=>item.id === id);
    
    
    //*below hook is for the initialization of content of editorjs
    const [story, setStory] = useState(JSON.parse(blogDesc.content))

    const updateBlog = useMutation({
        mutationFn: ({ formData, id,authId }:EditData) => editBlog(formData, id, authId),
    })
    

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data.title)
        const formData = new FormData();
        if (data.title !== undefined) {
            formData.append("title", data.title);
        } else {
            formData.append("title", ""); 
        }
    
        if (data.overview !== undefined) {
            formData.append("overview", data.overview);
        } else {
            formData.append("overview", "");
        }
    
        formData.append("content", JSON.stringify(description))
        formData.append("image", data.image)
        console.log(formData)
        updateBlog.mutate({formData,id,authId}, {
            onSuccess: () => {
                setEditId("");
                setIsEditing(false);
                queryClient.invalidateQueries({
                    queryKey:['blogs']
                })
            }
        })
    }

    const handleChange = (e: any) => {
        console.log(e.target.files[0])
        const selectedFile = e.target.files?.[0]
        console.log(selectedFile)
        if (selectedFile) {
            setFile(URL.createObjectURL(selectedFile));
            setFormImage(URL.createObjectURL(selectedFile));
        }
    }
    useEffect(() => {
        if (isEditing && editId === id) {
            console.log(blogDesc.image)
            setValue("title", blogDesc.title);
            setValue("image", blogDesc.image);
            setValue("overview", blogDesc.overview);
            setFormImage(imageURL(blogDesc.image));
        }

    }, [isEditing,editId,id])

    if (updateBlog.isPending)
        return (
            <div className='flex justify-center items-center w-full h-screen'>
                <h2 className='font-bold text-3xl text-textLight'>Loading....</h2>
            </div>
        )

    if (updateBlog.isSuccess)
        return (
            <div className='flex justify-center items-center w-full h-screen flex-col'>
                <h2 className='font-bold text-3xl text-textLight'>Blog edited successfully.</h2>
                <div className='flex mt-4'>
                    <button className='m-3 bg-accent rounded-3xl px-6 py-2 font-inter font-semibold text-sm text-textSecondary-100'><Link to='/addblog'>Add more blog</Link></button>
                    <button className='m-3 border-[1px] border-solid border-textLight rounded-3xl px-4 py-2 font-inter font-semibold text-sm text-textLight flex items-center'><Link to='/'>Go to home page.</Link></button>
                </div>
            </div>
        )

    if (updateBlog.isError)
        return (
            <div className='flex justify-center items-center w-full h-screen'>
                <h2 className='font-bold text-3xl text-textLight'>Error updating blog.</h2>
            </div>)
    return(
        <div className='flex w-full'>
            <div className='w-1/6'></div>
            <div className='w-5/6'>
                <div className='w-[90%] ml-2 mb-20'>
                    <div className='mt-5'>
                        <button className='flex items-center font-inter font-normal text-base text-textLight'><IoIosArrowBack className='mr-4' />Back</button>
                    </div>

                    <div className="isVerified flex w-[80%] mt-6 border-2 border-solid border-textLight bg-secondary rounded-sm px-6 py-5">
                        <div className="relative profile-image h-16 w-16 ">
                            <MdVerified className='absolute right-0 top-2 z-30 text-verified' />
                            <img src="https://s3-alpha-sig.figma.com/img/7081/d82b/13eaba07f4f5769915288bce7c28ba4f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AYHR5TVokwgjldhZ6iFDIq8i1J62u8oNMinFFO4fLceB~nskwon7GQCqE50BPON7DKb0wohKwayP55fflwD4PEd~bzfw-hHd9jHMjnVDfyRnfD6Lu4xsve5B-5aCNAODMXr5adUp7ARXiS0g-rmPVAUrPZZ7QYlYw52G3Fm~lPIsrECi8CZhUu~XR2iMFZf41ZUadpeTwqlZfoev41JawXjRe2gb9fo4LA2e3bFwLNW3Rcdza7S7K8iVtsq6UBDMfDVIEMNEzjmLqaN-X528hb3cNjmKxiHsoD78EDnOR5rkMFoi0s1tjnImL5Y8LO1nd-fCSx4uiyPkHE1xttz0Rg__" alt="" className='object-cover h-16 w-16 rounded-full' />
                        </div>
                        <div className=" message w-[70%] ml-6">
                            <h2 className='font-urbanist text-2xl font-bold'>Your artist account is under review!</h2>
                            <p className='font-workSans font-normal font-sm mt-4'>Once you create songs, events, merch, and backstage passes, we will include this information as well to verify. Once your account is verified, your items will be visible on the My Store page.</p>
                        </div>
                    </div>
                    <div className="active flex mt-10">
                        <div className='h-5 w-5 rounded-full mr-2 my-2 bg-textSecondary-100'></div>
                        <div className='h-5 w-8 rounded-[50px] m-2 bg-accent'></div>
                        <div className='h-5 w-5 rounded-full m-2 bg-textSecondary-100'></div>
                        <div className='h-5 w-5 rounded-full m-2 bg-textSecondary-100'></div>
                    </div>
                    <div className="form w-[80%] mt-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="pricing ">
                                <p className='text-textLight text-2xl font-semibold font-urbanist'>Blog title.</p>
                                <div className='pricing-input flex flex-col lg:flex-row mt-4'>
                                    <div className='flex flex-col w-full'>
                                        <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Title</p>
                                        <input type="text" {...register('title', {
                                            required: "Enter Title",
                                        })} className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm required:border-accent required:border-[1px]' placeholder='Eg. The rockerzz' />
                                        {errors.title && <span className='text-sm text-error font-workSans mt-2'>{errors.title.message}</span>}
                                    </div>
                                    <div className='flex flex-col mt-3 lg:mt-0 lg:ml-4 w-full'>
                                        <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Overview</p>
                                        <input type="text" {...register('overview', {
                                            required: "Enter no of releases.",
                                        })} className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm' placeholder='0' />
                                        {errors.overview && <span className='text-sm text-error font-workSans mt-2'>{errors.overview.message}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="upload mt-6">
                                <p className='text-textLight text-2xl font-semibold font-urbanist'>Upload your file</p>
                                <p className='font-workSans font-normal text-xs text-textLight mt-3'>Upload thumbnail.</p>
                                <p className='font-workSans font-normal text-xs text-textLight'>PNG,GIF,WEBP Max=30MB.</p>
                                <div className='w-full lg:w-[60%] relative'>
                                    <BiSolidImageAdd className='absolute top-0 left-0 bottom-0 right-0 m-auto w-full text-2xl text-textSecondary-200' />
                                    <button className='bg-accent absolute top-7 right-4 font-workSans font-normal text-base rounded-[50px] px-2'>Upload</button>
                                    <label htmlFor="file" className='bg-accent absolute top-7 right-4 font-workSans font-normal text-base rounded-[50px] px-2 cursor-pointer'>Upload</label>
                                    <div className='w-full h-52 mt-4 bg-formInput rounded-md overflow-hidden flex items-center justify-center'>
                                        <img src={formImage} className='object-contain' />
                                        <div className='w-[0.1px] opacity-0 overflow-hidden'>
                                            <input type="file" id='file' {...register("image",{
                                                onChange:(e)=>handleChange(e),
                                            })} />
                                        </div>
                                    </div>
                                    {errors.image  && <span className='text-sm text-error font-workSans mt-2 z-60'>{errors.image.message}</span>}
                                </div>
                            </div>
                            <div className="event details mt-6">
                                <p className='text-textLight text-2xl font-semibold font-urbanist'>Blog content.</p>

                                <div className='flex flex-col w-full'>
                                    <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Description</p>
                                    <Editor blockdata={story}/>
                                </div>
                            </div>
                            <button className='px-4 py-2 bg-accent rounded-3xl font-workSans mt-4'>Edit</button>
                            {/* <button className='px-4 py-2 bg-accent rounded-3xl font-workSans mt-4'>{isEditing ? `Edit` : `Submit`}</button> */}
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditBlog