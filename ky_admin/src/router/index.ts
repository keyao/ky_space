import {Router,createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
// 白名单路由
const whiteModule = import.meta.glob('./white/*.ts',{eager: true})
const whiteList:RouteRecordRaw[] = []
Object.keys(whiteModule).forEach((key)=>{
    // @ts-ignore
    const mod = whiteModule[key].default;
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    whiteList.push(...modList);
})
console.log(whiteList)
const NotFundRoute:RouteRecordRaw = {
    path:'/:pathMatch(.*)*',
    name:'NotFound',
    component:()=> import('@/view/404.vue')
}

const routes:RouteRecordRaw[] = [{
    path:'/',
    name:'home',
    component:()=> import('@/view/home/home.vue'),
    meta:{
        icon:'',
        name:""
    }
},
...whiteList
,NotFundRoute]


const router:Router = createRouter({
    routes,
    history:createWebHashHistory()
})

export default router