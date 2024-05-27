import axios from "axios";

const authFetch = axios.create({
    baseURL: 'http://192.168.1.227:5000/api',
})

authFetch.interceptors.request.use(
    function(config){
        const authToken = 'c05a13fc-2e9a-4dbb-b31e-a34f7b7afe5d';
        if(config.url?.startsWith('/register'))
        config.headers["Authorization"] = `${authToken}`
        return config
    },
    function (error) {
        return Promise.reject(error);
    }
)
export default authFetch