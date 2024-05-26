import axios from "axios"
import { LoginData } from "../../type";

export const loginauth = async (data: LoginData) => {
    const loginData = JSON.stringify(data)
    console.log(loginData)
    try {
        const resp = await axios.post('http://192.168.1.227:5000/api/login', loginData, {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        })
        console.log(resp.data.data)
        return resp.data.data;
    } catch (err) {
        console.log(err)
        return err
    }
}

export const registerUser = async(data:FormData)=>{
    const authToken = 'c05a13fc-2e9a-4dbb-b31e-a34f7b7afe5d';
    try {
        const resp = await axios.post('http://192.168.1.227:5000/api/register', data, {
            headers: {
                'Authorization':`${authToken}`
            }
        })
        console.log(resp.data.data)
        return resp.data.data;
    } catch (err) {
        console.log(err)
    }
}