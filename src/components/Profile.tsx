import React, { useEffect } from 'react'
import Card from './Card'
import { getProfile, deleteBlog } from '../api'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const Profile = () => {
    const queryClient = useQueryClient();
    const { setEditId, setIsEditing,setBlogs} = useGlobalContext();
    const { data, isLoading } = useQuery({
        queryFn: () => getProfile(),
        queryKey: ['profile']
    })
    useEffect(()=>{
        setBlogs(data)
    },[data])
    // { mutate, isPending, isSuccess }
    const removeBlog = useMutation({
        mutationFn: (id) => deleteBlog(id)
    })

    const handleEdit = (id: string) => {
        setIsEditing(true);
        setEditId(id);
    }

    console.log(data)
    if (isLoading)
        return (
            <div className='flex justify-center items-center w-full h-screen'>
                <h2 className='font-bold text-3xl text-textLight'>Loading....</h2>
            </div>)
    if (removeBlog.isPending)
        return (
            <div className='flex justify-center items-center w-full h-screen'>
                <h2 className='font-bold text-3xl text-textLight'>Loading....</h2>
            </div>)
    return (
        <div className='flex w-full'>
            <div className='w-1/6 h-screen'></div>
            <div className='w-5/6'>
                <div className='w-full'>
                    <div className='w-full flex  items-center m-4'>
                        <div className='w-20 m-4 rounded-[50%] overflow-hidden border-2 border-accent border-solid'>
                            <img src="https://th.bing.com/th/id/OIP.0TsJGYhWWOy_hBFOH0hX-gHaHa?rs=1&pid=ImgDetMain" alt="user profile pic" className='w-full h-full object-contain' />
                        </div>
                        <div className='w-3/6 my-2'>
                            <p className='font-urbanist font-semibold text-xl text-textLight '>{data[0]?.data.data.name}</p>
                            <p className='font-workSans font-light text-sm text-textLight '>{data[0]?.data.data.email}</p>
                            <p className='font-workSans font-light text-sm text-textLight '>{data[0]?.data.data.number}</p>
                            <p className='font-workSans font-light text-sm text-textLight '>{data[0]?.data.data.role}</p>
                        </div>
                    </div>
                    <div className='w-full m-4 '>
                        <p className='font-urbanist font-bold text-3xl text-textLight ml-4'>My Blogs</p>
                    </div>
                    <div className='mt-8 grid grid-cols-[repeat(auto-fill,minmax(288px,1fr))]'>
                        {/* //return div */}
                        {data[1].data.data.map((item: { title: string; id: string; image: string; author: { name: string; }; createdAt: string; }, i: number) => (
                            <div key={i} className='mb-4'>
                                <Link to={`blogs/${item.id}`}><Card title={item.title} id={item.id} image={item.image} authorName={item.author.name} createdAt={item.createdAt} /> </Link>
                                <div >

                                    <div className='flex w-72 mt-1 justify-around'>
                                        <button onClick={() => removeBlog.mutate(item.id, {
                                            onSuccess: () => queryClient.invalidateQueries({ queryKey: ['profile'] })
                                        })} className='m-3 bg-accent rounded-3xl px-6 py-2 font-inter font-semibold text-sm text-textSecondary-100'>Delete</button>
                                        <button onClick={() => handleEdit(item.id)} className='m-3 border-[1px] border-solid border-textLight rounded-3xl px-4 py-2 font-inter font-semibold text-sm text-textLight flex items-center'><Link to={`/editblog/${item.id}`} >Edit</Link></button>
                                    </div>
                                </div>
                            </div>))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile