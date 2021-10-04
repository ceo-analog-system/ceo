import axios from "axios";
 const managerAxios = axios.create({
  baseURL: "http://120.79.147.32:8089/",
  timeout: 2000,
});

managerAxios.interceptors.request.use(
  (config) => {
    const token = (localStorage.getItem("login_token"));
    console.log(token);
    if (token) {
      config.headers.token = token;
      console.log(config);
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default managerAxios;
