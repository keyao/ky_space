import {http} from "../utils/http";
export function Login() {
   return http.request<{code:number,data:any}>({
      method:'post',
      url:'/login',
   })
}