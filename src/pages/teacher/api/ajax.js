import axios from 'axios'
import {message} from 'antd'
// Content-Type: "application/json;charset=utf-8"

axios.defaults.headers['Content-Type'] = "application/json;charset=utf-8"
axios.defaults.headers['Accept'] = "application/json, text/html"
axios.interceptors.request.use(function (config) {
    // let token = window.localStorage.getItem("accessToken")
    let token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZW8iLCJhdWQiOiJ0aWFuc2giLCJleHAiOjE2Mjg4Mjk1OTN9.JWjLCC6DJ1YTvYATaDbI_J5rArUhDa2pXIBPj_K46_4"
    config.headers.accessToken = token; 
    console.log(config);
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


export default function ajax(url, data={}, type='GET') {

  return new Promise((resolve, reject) => {
    let promise
    // 1. 执行异步ajax请求
    if(type==='GET') { // 发GET请求
      promise = axios.get(url, { // 配置对象
        params: data // 指定请求参数
      })
    } else { // 发POST请求
      promise = axios.post(url, data)
    }
    // 2. 如果成功了, 调用resolve(value)
    promise.then(response => {
      resolve(response.data)
    // 3. 如果失败了, 不调用reject(reason), 而是提示异常信息
    }).catch(error => {
      // reject(error)
      message.error('请求出错了: ' + error.message)
    })
  })


}