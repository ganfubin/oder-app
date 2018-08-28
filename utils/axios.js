import axios from 'axios';
const instance = axios.create({
    //当创建实例的时候配置默认配置
    xsrfCookieName: 'xsrf-token'
});

//添加请求拦截器
instance.interceptors.request.use(function(config){
    return config;
},function(error){
    return Promise.reject(error);
});

//todo 也可添加响应拦截

export default instance;
