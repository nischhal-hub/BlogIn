import React, { ChangeEvent, FC, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { MdVerified } from "react-icons/md";
import { BiSolidImageAdd } from "react-icons/bi";
import { SubmitHandler, useForm } from "react-hook-form";
import { SiPanasonic } from 'react-icons/si';

// "price": "",
// "noofrelease": "",
// "eventname": "",
// "eventtype": "",
// "eventdate": "",
// "description": "",
// "vrstreaminglink":"",
// "streaminglink":""
type EventType = "jazz" | "pop" | "rock" | "indie";
type FormFields = {
    price: number;
    noofrelease: number;
    eventname: string;
    eventtype: EventType;
    thumbnailPic : File;
    eventdate: Date;
    description: string;
    vrstreaminglink: string;
    streaminglink: string;
}


const Profile:FC = () => {
    const [file, setFile] = useState<string>("");
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();
    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data)
    }
    const handleChange = (e:any)=>{
        console.log(e.target.files[0])
        const selectedFile = e.target.files?.[0]
        if(selectedFile){
            setFile(URL.createObjectURL(selectedFile));
        }
    }
    return (
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
                                <p className='text-textLight text-2xl font-semibold font-urbanist'>Pricing Details</p>
                                <div className='pricing-input flex mt-4'>
                                    <div className='flex flex-col w-1/2'>
                                        <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Choose Pricing</p>
                                        <input type="number" {...register('price', {
                                            required: "Enter Price.",
                                            validate: (value) => {
                                                if (value < 0) {
                                                    return "Enter price more than $0."
                                                }
                                                return true
                                            }
                                        })} className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm required:border-accent required:border-[1px]' placeholder='$45.99' />
                                        {errors.price && <span className='text-sm text-error font-workSans mt-2'>{errors.price.message}</span>}
                                    </div>
                                    <div className='flex flex-col ml-4 w-1/2'>
                                        <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>How many to release?</p>
                                        <input type="number" {...register('noofrelease', {
                                            required: "Enter no of releases.",
                                            validate: (value) => {
                                                if (value < 0) {
                                                    return "Enter 1 or more."
                                                }
                                                return true
                                            }
                                        })} className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm' placeholder='0' />
                                        {errors.noofrelease && <span className='text-sm text-error font-workSans mt-2'>{errors.noofrelease.message}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="upload mt-6">
                                <p className='text-textLight text-2xl font-semibold font-urbanist'>Upload your file</p>
                                <p className='font-workSans font-normal text-xs text-textLight mt-3'>Upload thumbnail.</p>
                                <p className='font-workSans font-normal text-xs text-textLight'>PNG,GIF,WEBP Max=30MB.</p>
                                <div className='w-[60%] relative'>
                                    <BiSolidImageAdd className='absolute top-0 left-0 bottom-0 right-0 m-auto w-full text-2xl text-textSecondary-200' />
                                    {/* <button className='bg-accent absolute top-7 right-4 font-workSans font-normal text-base rounded-[50px] px-2'>Upload</button> */}
                                    <label htmlFor="file" className='bg-accent absolute top-7 right-4 font-workSans font-normal text-base rounded-[50px] px-2 cursor-pointer'>Upload</label>
                                    <div className='w-full h-52 mt-4 bg-formInput rounded-md overflow-hidden'>
                                        <img src={file}  className='w-full object-cover' />
                                    <div className='w-[0.1px] opacity-0 overflow-hidden'>
                                        <input type="file"  id='file' {...register("thumbnailPic",{
                                            onChange: (e)=>(handleChange(e)),
                                            required:"Add a thumbnail.",
                                            validate : (value)=>{
                                                
                                                if( value[0].size > 76000)
                                                return "Select image file less than 78KB";
                                            }
                                        })} />
                                    </div>
                                    </div>
                                        {errors.thumbnailPic && <span className='text-sm text-error font-workSans mt-2 z-60'>{errors.thumbnailPic.message}</span>}
                                </div>
                            </div>
                            <div className="event details mt-6">
                                <p className='text-textLight text-2xl font-semibold font-urbanist'>Event Details</p>
                                <div className='pricing-input flex mt-4'>
                                    <div className='flex flex-col w-1/2'>
                                        <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Event name</p>
                                        <input type="text" className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm' {...register('eventname', {
                                            required: "Enter Event/album name."
                                        })} placeholder='Album name' />
                                        {errors.eventname && <span className='text-sm text-error font-workSans mt-2'>{errors.eventname.message}</span>}
                                    </div>
                                    <div className='flex flex-col ml-4 w-1/2'>
                                        <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Event type</p>
                                        {/* <input type="text" name='eventtype' className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm' placeholder='Jazz' /> */}
                                        <select defaultValue=""  className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm' {...register('eventtype', {
                                            required: "Select a option.",
                                        })}>
                                            <option value="" disabled>Choose event type</option>
                                            <option value="jazz">Jazz</option>
                                            <option value="pop">Pop</option>
                                            <option value="rock">Rock</option>
                                            <option value="indie">Indie</option>
                                        </select>
                                        {errors.eventtype && <span className='text-sm text-error font-workSans mt-2'>{errors.eventtype.message}</span>}
                                    </div>
                                </div>
                                <div className='flex flex-col  w-full'>
                                    <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Event date</p>
                                    <input type="date" {...register('eventdate', {
                                        required: "Enter a date.",
                                        validate: (value) => {
                                            let today = new Date();
                                            let selectedDate = new Date(value);
                                            today.setHours(0, 0, 0, 0);
                                            selectedDate.setHours(0, 0, 0, 0);

                                            if (selectedDate >= today) {
                                                return true;
                                            } else {
                                                return "Please select another date.";
                                            }
                                        }

                                    })} className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm' />
                                    {errors.eventdate && <span className='text-sm text-error font-workSans mt-2'>{errors.eventdate.message}</span>}
                                </div>
                                <div className='flex flex-col w-full'>
                                    <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Description</p>
                                    <textarea {...register('description')} id="" cols="30" rows="10" className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm resize-y' placeholder='Event description' >
                                    </textarea>
                                </div>
                            </div>
                            <div className="event-links mt-6">
                                <p className='text-textLight text-2xl font-semibold font-urbanist'>Event Links</p>
                                <div className='pricing-input flex mt-4'>
                                    <div className='flex flex-col w-1/2'>
                                        <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Live VR streaming</p>
                                        <input type="text" className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm' placeholder='Live VR link' {...register("vrstreaminglink", {
                                            pattern: {
                                                value: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                                                message: "Invalid link address"
                                            }
                                        })} />
                                    </div>
                                    <div className='flex flex-col ml-4 w-1/2'>
                                        <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Live streaming</p>
                                        <input type="text" {...register("streaminglink", {
                                            required: "Streaming link required.",
                                            pattern: {
                                                value: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                                                message: "Invalid link address"
                                            }
                                        })} className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm' placeholder='Live video link' />
                                    {errors.streaminglink && <span className='text-sm text-error font-workSans mt-2'>{errors.streaminglink.message}</span>}

                                    </div>
                                </div>
                            </div>
                            <button className='px-4 py-2 bg-accent rounded-3xl font-workSans mt-4'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile