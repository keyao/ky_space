import {RouteRecordRaw} from "vue-router";

const homeRoutes:RouteRecordRaw[] = [{
    path:'/home',
    name:'Home',
    component:()=>import('@/view/home/home.vue'),
    meta:{
        name:'首页',
        rank:1
    }
}]

export default homeRoutes