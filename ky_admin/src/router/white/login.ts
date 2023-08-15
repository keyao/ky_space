import {RouteRecordRaw} from "vue-router";

const loginRoutes:RouteRecordRaw[] = [{
    path:'/login',
    name:'Login',
    component:()=>import('@/view/login/login.vue'),
    meta:{
        name:'登录'
    }
}]

export default loginRoutes