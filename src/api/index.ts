import axios from "axios"

//import authFetch from "../axios/custom"
// type PostData = {
//     title: string;
//     overview: string;
//     content: string;
//     image:File;
// }

// const authToken = 'c05a13fc-2e9a-4dbb-b31e-a34f7b7afe5d';

type EditBlog = {
    blogData: FormData;
    id: string;
}
const authToken = "c05a13fc-2e9a-4dbb-b31e-a34f7b7afe5d";
//const {editId} = useGlobalContext()
export const fetchBlog = async () => {
    try {
        const resp = await axios('http://192.168.1.227:5000/api/blog/get-all')
        console.log(resp.data)
        return resp.data
    }
    catch (error) {
        console.log(`Error Fetching Data: ${error}`)
        throw error
    }
}

export const fetchSingleBlog: any = async (id: string) => {
    try {
        //console.log(id)
        const resp = await axios(`http://192.168.1.227:5000/api/blog/get/${id}`)
        console.log(resp.data)
        return resp.data.data
    }
    catch (error) {
        console.log(`Error Fetching Data: ${error}`)
        throw error
    }
}


export const postBlog = async (blogData: any) => {
    const url = "http://192.168.1.227:5000/api/blog/create";
    console.log(blogData)
    try {
        const response = await axios.post(url, blogData, {
            headers: {
                'Authorization': `${authToken}`
            }
        });

        return response.data;
    } catch (error) {
        console.error("Failed to post blog:", (error as any).response.data);
    }
}

export const getProfile = async () => {
    const urls = [`http://192.168.1.227:5000/api/user/get/c05a13fc-2e9a-4dbb-b31e-a34f7b7afe5d`,
        `http://192.168.1.227:5000/api/blog/get/my`
    ]
    const requests = urls.map(url => axios.get(url, {
        headers: {
            'Authorization': `${authToken}`
        }
    }))
    try {
        const responses = await Promise.all(requests)
        console.log(responses)
        responses.forEach((response, index) => {
            console.log(`Response ${index + 1}:`, response.data);
        });
        return responses;
    } catch (error) {
        console.error("Failed to post blog:", (error as any).responses.error);
    }
}

export const deleteBlog = async (id: any) => {
    try {
        const response = await axios.delete(`http://192.168.1.227:5000/api/blog/delete/${id}`, {
            headers: {
                'Authorization': `${authToken}`
            },
        });
        return response;
    } catch (error) {
        console.error("Failed to delete blog:", (error as any).response.error);

    }
}

export const editBlog = async (blogData:any,id:any) => {
    console.log(id)
    console.log(blogData)
    try {
        const response = await axios.patch(`http://192.168.1.227:5000/api/blog/update/${id}`, blogData, {
            headers: {
                'Authorization': `${authToken}`
            }
        })
        return response;
    }
    catch (error) {
        console.error("Failed to delete blog:", (error as any).response.error);
    }
}
