import axios from "axios";

const authFetch = axios.create({
    baseURL: 'http://192.168.1.227:5000/api',
})

export default authFetch