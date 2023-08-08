import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import to from 'await-to-ts'
const defaultConfig:AxiosRequestConfig = {
    baseURL:import.meta.env.VITE_URL,
    timeout:10000,
    headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    },
}

export class Http {
    constructor() {
        this.interceptorsRequest()
        this.interceptorsResponse()
    }
    // 创建请求
    private static axiosInstance = Axios.create(defaultConfig)
    private  interceptorsRequest():void {
        Http.axiosInstance.interceptors.request.use(async (config)=>{
            return config
        },error => {
            return Promise.reject(error)
        })
    }
    private interceptorsResponse():void{
        Http.axiosInstance.interceptors.response.use(response=>{
            return response.data;
        },error => {
            return Promise.reject(error)
        })
    }
    public request<T>(): Promise<T> {
        const config:AxiosRequestConfig = {}
        return new Promise( async (resolve, reject)=>{
            let error: Error, response: AxiosResponse<T>;
            [error, response] = await to(Http.axiosInstance.request(config));
            if (!error) {
                reject(error)
            }
            resolve(response.data)
        })

    }
}

export const http = new Http();