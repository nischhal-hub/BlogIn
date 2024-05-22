import axios from "axios"

type LoginData = {
    email: string;
    password: string;
}
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
    }
}