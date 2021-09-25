import { message } from "antd"
import axios from "axios"
 export const ceoAxios = axios.create({
    baseURL:'http://localhost:3000/api/ceo/',
    timeout:2000,
})

ceoAxios.interceptors.request.use(
    (config) => {
        let token =localStorage.getItem('login_token')
        if(token){
            config.headers.accessToken = token
            return config;
        }
    },(error)=>{
        return Promise.reject(error)
    }
)

export const studentAxios = axios.create({
    baseURL:'http://localhost:3000/api/',
    timeout:2000,   
    method: 'post',
    headers: {
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZW8iLCJhdWQiOiIyMDE3MjExMDE4IiwiZXhwIjoxNjMyNjUwMzgxfQ.f3m0mk8kMvZu431jkOdqY25tsJPhtJusqkdyhbvFLMI'
    }
})

studentAxios.interceptors.request.use(  // 拦截器
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

studentAxios.interceptors.response.use(response => {
    console.log("response.data: ", response.data)
    switch (response.data.message) {
        case "资源访问受限!请重新登录！":
            message.warning("请提供有效Token！");
            break;
        default:
            break;
    }
    return response;
}, err => {
    console.log(err.response)
    return Promise.reject(err.response.statusText)
})

export const wsAxios = axios.create({
    baseURL:'http://localhost:3000/api:/connect/userId/',
    timeout:2000,
})
wsAxios.interceptors.request.use(
    (config) => {
        let token =localStorage.getItem('login_token')
        if(token){
            config.headers.accessToken = token
            return config
        }    
    },(error)=>{
        return Promise.reject(error)
    }
)
