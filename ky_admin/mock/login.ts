import {MockMethod} from "vite-plugin-mock";

const  HttpRequest:MockMethod[] = [{
    url:'/login',
    method:'post',
    statusCode:404,
    response:({body}) => {
        return {
            code:500,
            msg:'服务器出错',
            data:{
                token:'eyJhbGciOiJIUzUxMiJ9',
                ...body,
            }
        }
    }
}]

export default HttpRequest