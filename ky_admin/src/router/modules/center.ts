import {RouteRecordRaw} from "vue-router";

const centerRoutes:RouteRecordRaw[] = [{
    path:'/center',
    name:'Center',
    component:()=>import('@/view/center/center.vue'),
    meta: {
        name:'个人中心',
        icon:'',
        rank:10
    }
}]

export default centerRoutes
