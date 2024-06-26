import axios from "axios"
import authFetch from "../../axios/custom"
import { ILoginForm } from "../../type"

export const loginauth = async (data: ILoginForm) => {
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
    try {
        const resp = await authFetch.post('/register', data)
        console.log(resp.data.data)
        return resp.data.data;
    } catch (err) {
        console.log(err)
    }
}