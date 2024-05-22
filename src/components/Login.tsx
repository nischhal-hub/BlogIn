import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { LoginForm } from '../type'
import icon from '../assets/Icon 2.png'
import { useMutation } from '@tanstack/react-query'
import { loginauth } from '../api/auth'
import { useAuth } from '../hooks/useAuth'


const Login = () => {
    const value = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>()
    const {mutate,isPending,isSuccess,isError} = useMutation({
        mutationFn:(data:LoginForm)=>{return loginauth(data)}
    })

    const onSubmit: SubmitHandler<LoginForm> = (loginData) => {
        mutate(loginData,{
            onSettled:(data)=>{
                console.log("successfull:",data)
                value?.login(data)
            }
        })
    }
    
    if (isPending)
        return (
            <div className='flex justify-center items-center w-full h-screen'>
                <h2 className='font-bold text-3xl text-textLight'>Logging in....</h2>
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
                        <p className='text-textLight text-xl font-semibold font-urbanist text-center'>Sign In.</p>
                        <div className='pricing-input w-[70%] m-auto'>
                            <div className='flex flex-col w-full'>
                                <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Email</p>
                                <input type="text" {...register('email', {
                                    required: "Enter email.",
                                })} className='bg-formInput  border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm required:border-accent required:border-[1px]' placeholder='Enter your email.' />
                                {errors.email && <span className='text-sm text-error font-workSans mt-2'>{errors.email.message}</span>}
                            </div>
                            <div className='flex flex-col mt-3 w-full'>
                                <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Password</p>
                                <input type="password" {...register('password', {
                                    required: "Enter the password.",
                                })} className='bg-formInput  border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm' placeholder='Enter your password.' />
                                {errors.password && <span className='text-sm text-error font-workSans mt-2'>{errors.password.message}</span>}
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center my-2'>

                        <button className='px-4 py-2 bg-accent rounded-3xl font-workSans mt-4'>Login</button>
                    </div>
                    <p className='font-workSans font-light text-textLight text-sm text-center mb-6'>Don't have an account? <a href="#" className='text-accent underline'>Register</a></p>
                </form>
            </div>
        </>
    )
}

export default Login