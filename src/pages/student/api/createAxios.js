import axios from "axios"
 export const ceoAxios = axios.create({
    baseURL:'120.79.147.32:8089/ceo/',
    timeout:2000,
})

ceoAxios.interceptors.request.use(
    (config) => {
        const token =localStorage.getItem('login_token')
        if(token){
            config.headers.accessToken = token
            return config
        }
    },(error)=>{
        return Promise.reject(error)
    }
)
export const studentAxios = axios.create({
    baseURL:'120.79.147.32:8089/student/',
    timeout:2000,
})

studentAxios.interceptors.request.use(
    (config) => {
        const token =localStorage.getItem('login_token')
        if(token){
            config.headers.accessToken = token
            return config
        }
    },(error)=>{
        return Promise.reject(error)
    }
)