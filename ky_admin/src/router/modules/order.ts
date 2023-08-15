import {RouteRecordRaw,RouteMeta} from "vue-router";

const orderRoutes:RouteRecordRaw[]=[{
    path:'/order',
    name:'Order',
    component:()=>import('@/view/order/order.vue'),
    meta:{
        name:'订单',
        rank:2
    }
}]

export default orderRoutes