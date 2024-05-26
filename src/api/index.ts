import axios from "axios"
//import authFetch from "../axios/custom"
const authToken = "c05a13fc-2e9a-4dbb-b31e-a34f7b7afe5d";
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


export const postBlog = async (blogData: FormData,authId:string|undefined) => {
    const url = "http://192.168.1.227:5000/api/blog/create";
    try {
        const response = await axios.post(url, blogData, {
            headers: {
                'Authorization': `${authId}`
            }
        });

        return response.data;
    } catch (error) {
        console.error("Failed to post blog:", (error as any).response.data);
    }
}

export const getProfile = async (id:string) => {
    const urls = [`http://192.168.1.227:5000/api/user/get/${id}`,
        `http://192.168.1.227:5000/api/blog/get/my`
    ]
    const requests = urls.map(url => axios.get(url, {
        headers: {
            'Authorization': `${id}`
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

export const deleteBlog = async (id: string) => {
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

export const editBlog = async (blogData:FormData,id:string|undefined,authId:string|undefined) => {
    console.log(id)
    console.log(blogData)
    try {
        const response = await axios.patch(`http://192.168.1.227:5000/api/blog/update/${id}`, blogData, {
            headers: {
                'Authorization': `${authId}`
            }
        })
        return response;
    }
    catch (error) {
        console.error("Failed to delete blog:", (error as any).response.error);
    }
}
