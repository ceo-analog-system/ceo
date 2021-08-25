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

// const login_data = JSON.parse(localStorage.getItem("login_data"))

export const studentAxios = axios.create({
    baseURL:'http://localhost:3000/api',
    timeout:2000,   
    method: 'post',
    headers: {
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZW8iLCJhdWQiOiIyMDE3MjExMDE4IiwiZXhwIjoxNjI5OTQxOTU3fQ.33zwAoRR8kXhW4WUOjt7bwDprLg6BrnbO3IQdP2xS78'
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
    console.log("响应成功：", response)
    return response;
}, err => {
    console.log("响应失败：", err.response)
    return Promise.reject(err)
})