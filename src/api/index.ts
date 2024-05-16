import axios from "axios"
//import authFetch from "../axios/custom"
type PostData = {
    title: string;
    overview: string;
    content: string;
    image:File;
}

const authToken = 'c05a13fc-2e9a-4dbb-b31e-a34f7b7afe5d';

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

export const fetchSingleBlog:any = async (id: string) => {
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

// export const postBlog = async (newBlog:PostData):Promise<any> => {
//     const blogData = JSON.stringify(newBlog)
//     const config = {
//         headers: {
//             'Authorization': `Bearer ${authToken}`,
//             'Content-Type': 'application/json'
//         }
//     }
//     try {
//         const response = await axios.post('http://192.168.1.227:5000/api/blog/create', blogData, config);
//         return response;
//     } catch (error) {
//         console.error((error as any).data);

//     }
// }



export const postBlog = async (blogData)=> {
    const url = "http://192.168.1.227:5000/api/blog/create";
    const authToken = "c05a13fc-2e9a-4dbb-b31e-a34f7b7afe5d"; 
    //const blogs = JSON.stringify(blogData)
    //console.log(blogs)
    try {
        const response = await axios.post(url, blogData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            }
        });

        return response.data;
    } catch (error) {
        console.error("Failed to post blog:", (error as any).response.data);
    }
}
