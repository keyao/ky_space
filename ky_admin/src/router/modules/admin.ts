import {RouteRecordRaw} from "vue-router";

const adminRoute:RouteRecordRaw[] = [{
    path:'/admin',
    name:'Admin',
    component:() => import('@/view/editer/editer.vue'),
    meta:{
        name:'管理员',
        rank:3
    }
}]
export default adminRoute