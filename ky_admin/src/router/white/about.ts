import {RouteRecordRaw} from "vue-router";

const adminRoute:RouteRecordRaw[] = [{
    path:'/about',
    name:'About',
    component:() => import('@/view/about/about.vue'),
    meta:{
        name:'关于我们',
    }
}]
export default adminRoute