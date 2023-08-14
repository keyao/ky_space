import {http} from "../utils/http";
export function Login<T,D>(data:{username:T,password:D}) {
   return http.request<{username:T,password:D}>({
      method:'post',
      url:'/login',
      data
   })
}