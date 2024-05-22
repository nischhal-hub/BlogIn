import React, { useState } from 'react'
import icon from '../assets/Icon 2.png'
import { SubmitHandler, useForm } from 'react-hook-form'
import { RegisterForm } from '../type';
import { BiSolidImageAdd } from "react-icons/bi";
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../api/auth';
import { Link } from 'react-router-dom';


const Register = () => {
    const [file, setFile] = useState<string>("");
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>();
    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: (userData: FormData) => registerUser(userData)
    })
    const handleChange = (e: any) => {
        console.log(e.target.files[0])
        const selectedFile = e.target.files?.[0]
        console.log(selectedFile)
        if (selectedFile) {
            setFile(URL.createObjectURL(selectedFile));
        }
    }
    const onSubmit: SubmitHandler<RegisterForm> = (data) => {
        console.log(data)
        const registerData = new FormData();
        registerData.append("name", data.name)
        registerData.append("email", data.email)
        registerData.append("password", data.password)
        registerData.append("phoneNumber", data.phoneNumber)
        registerData.append("role", data.role)
        registerData.append("avatar", data.avatar[0])
        mutate(registerData, {
            onSettled: (data) => {
                console.log("successfull:", data)
            }
        })
    }
    if (isPending)
        return (
            <div className='flex justify-center items-center w-full h-screen'>
                <h2 className='font-bold text-3xl text-textLight'>Registering....</h2>
            </div>
        )
    if (isSuccess)
        return (
            <div className='flex justify-center items-center w-full h-screen flex-col'>
                <h2 className='font-bold text-3xl text-textLight'>User registered successfully.</h2>
                <div className='flex mt-4'>
                    <button className='m-3 bg-accent rounded-3xl px-6 py-2 font-inter font-semibold text-sm text-textSecondary-100'><Link to='/login'>Go to Login.</Link></button>
                </div>
            </div>
        )
    return (
        <>
            <div className='w-full h-screen flex items-center' >
                <form className="w-[40%] m-auto border-borderColor rounded-md bg-transparentBackground" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className="icon my-4 mx-2 flex justify-center items-center">
                            <img src={icon} alt="icon" />
                            <p className='text-textLight font-urbanist text-2xl font-semibold ml-3'>BlogIn</p>
                        </div>
                        <p className='text-textLight text-xl font-semibold font-urbanist text-center'>Register.</p>
                        <div className='pricing-input w-[70%] m-auto'>
                            <div className='flex flex-col w-full'>
                                <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Full name.</p>
                                <input type="text" {...register('name', {
                                    required: "Enter name.",
                                    maxLength: {
                                        value: 40,
                                        message: "Name cannot exceed 40 characters."
                                    }
                                })} className='bg-formInput  border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm required:border-accent required:border-[1px]' placeholder='Enter your name.' />
                                {errors.name && <span className='text-sm text-error font-workSans mt-2'>{errors.name.message}</span>}

                            </div>
                            <div className='flex flex-col w-full'>
                                <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Email</p>
                                <input type="text" {...register('email', {
                                    required: "Enter email.",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Enter a valid email."
                                    }
                                })} className='bg-formInput  border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm required:border-accent required:border-[1px]' placeholder='Enter your email.' />
                                {errors.email && <span className='text-sm text-error font-workSans mt-2'>{errors.email.message}</span>}
                            </div>
                            <div className='flex flex-col my-1 w-full'>
                                <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Password</p>
                                <input type="password" {...register('password', {
                                    required: "Enter the password.",
                                    minLength: {
                                        value: 5,
                                        message: "At least 5 characters needed."
                                    }
                                })} className='bg-formInput  border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm' placeholder='Enter your password.' />
                                {errors.password && <span className='text-sm text-error font-workSans mt-2'>{errors.password.message}</span>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Phone no.</p>
                                <input type="text" {...register('name', {
                                    required: "Enter phone number.",
                                    pattern: {
                                        value: /^\d{10}$/,
                                        message: "Enter a valid 10 digit number."
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Enter a valid phone number."
                                    }
                                })} className='bg-formInput  border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm required:border-accent required:border-[1px]' placeholder='Enter your phoneno.' />
                                {errors.name && <span className='text-sm text-error font-workSans mt-2'>{errors.name.message}</span>}
                            </div>
                            <div className='flex flex-col w-1/2'>
                                <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>User type</p>
                                <select defaultValue="" className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm' {...register('role', {
                                    required: "Select a option.",
                                })}>
                                    <option value="" disabled>Choose user type</option>
                                    <option value="USER">User</option>
                                    <option value="ADMIN">Admin</option>
                                </select>
                                {errors.role && <span className='text-sm text-error font-workSans mt-2'>{errors.role.message}</span>}
                            </div>
                            <div className="upload my-1">
                                <p className='text-textLight text-lg font-semibold font-urbanist'>Upload your image</p>
                                <p className='font-workSans font-normal text-xs text-textLight '>Upload thumbnail.</p>
                                <p className='font-workSans font-normal text-xs text-textLight'>PNG,GIF,WEBP Max=30MB.</p>
                                <div className='w-full lg:w-[60%] relative'>
                                    <BiSolidImageAdd className='absolute top-0 left-0 bottom-0 right-0 m-auto w-full text-2xl text-textSecondary-200' />

                                    <label htmlFor="file" className='bg-accent absolute top-4 right-4 font-workSans font-normal text-base rounded-[50px] px-2 cursor-pointer'>Upload</label>
                                    <div className='w-full h-52 mt-4 bg-formInput rounded-md overflow-hidden flex items-center justify-center'>
                                        <img src={file} className='object-contain' />
                                        <div className='w-[0.1px] opacity-0 overflow-hidden'>
                                            <input type="file" id='file' {...register("avatar", {
                                                required: "Upload an image.",
                                                onChange: (e) => handleChange(e)
                                            })} />
                                            {errors.avatar && <span className='text-sm text-error font-workSans mt-2'>{errors.avatar.message}</span>}

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center my-2'>

                        <button className='px-4 py-2 bg-accent rounded-3xl font-workSans mt-4 w-[80%]'>Register</button>
                    </div>
                    <p className='font-workSans font-light text-textLight text-sm text-center mb-6'>Already have an account?<Link to='/login' className='text-accent underline'>Login</Link> </p>
                </form>
            </div>
        </>
    )
}

export default Register