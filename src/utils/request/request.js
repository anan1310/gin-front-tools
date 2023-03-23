import axios from 'axios'

const baseURL = process.env.VUE_APP_BASE_API;
const timeout = 500000
//
const service =axios.create({
    baseURL,
    timeout,
    headers: {
        'Content-Type': 'application/json'
    }
})


// 添加请求拦截器
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);
// 添加响应拦截器
service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

// POST 方法封装 (处理参数与文件上传)
 const postRequest = (url, params) => {
    return service({
        method: 'post',
        url: url,
        data: params
    });
}
 
 
//  GET 方法封装
 const getRequest = (url, params) => {
    return service({
        method: 'get',
        url: url,
        params: params
    });
}

export  {postRequest,getRequest}