import axios from "axios"
 export const ceoAxios = axios.create({
    baseURL:'http://localhost:3000/api/ceo/',
    timeout:2000,
})

ceoAxios.interceptors.request.use(
    (config) => {
        let token =localStorage.getItem('login_token')
        if(token){
            config.headers.token = token
            return config;
        }
    },(error)=>{
        return Promise.reject(error)
    }
)
export const studentAxios = axios.create({
    baseURL:'http://localhost:3000/api/student/',
    timeout:2000,
})

ceoAxios.interceptors.request.use(
    (config) => {
        const token =localStorage.getItem('login_token')
        if(token){
            config.headers.token = token
            return config
        }
    },(error)=>{
        return Promise.reject(error)
    }
)

export const wsAxios = axios.create({
    baseURL:'http://localhost:3000/api:/connect/userId/',
    timeout:2000,
})
wsAxios.interceptors.request.use(
    (config) => {
        let token =localStorage.getItem('login_token')
        if(token){
            config.headers.token = token
            return config
        }
    },(error)=>{
        return Promise.reject(error)
    }
)