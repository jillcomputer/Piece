import axios from 'axios'

import baseURL from './url'

export const service = axios.create({
    baseURL: baseURL,
    timeout: 20000,
    // headers:{
    //     'Accept-Language':'zh'
    // }
})
// 拦截器
// service.interceptors.request.use(
//     config => {
//         return config;
//     },
//     error => {
//         console.log(error);
//         return Promise.reject();
//     }
// );
//
service.interceptors.response.use(
    (response) => {
        return response.data
    }
);

class RequestServer {
    static get(url, params) {
        return service({
            url: url,
            method: 'get',
            params: params
        })
    }

    static post(url, params) {
        return service({
            url: url,
            method: 'post',
            data: params
        })
    }
}


export default RequestServer
