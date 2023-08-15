import {RouteRecordRaw} from "vue-router";

const editerRoute:RouteRecordRaw[] = [{
    path:'/editer',
    name:'Editer',
    component:() => import('@/view/editer/editer.vue'),
    meta:{
        name:'编辑者',
        rank:4
    }
}]
export default editerRoute