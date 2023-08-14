import {MockMethod} from "vite-plugin-mock";
import Mock from "mockjs";

const data = Mock.mock('/')
const  HttpRequest:MockMethod[] = [{
    url:'/login',
    method:'post',
    statusCode:200,
    response:({body}) => {
        return {
            code:500,
            msg:'服务器出错',
            data:{
                token:'eyJhbGciOiJIUzUxMiJ9',
                mock:'',
                ...body,
            }
        }
    }
}]

export default HttpRequest