const Layout = () => import("@/layout/index.vue");

export default {
  path: "/wujie",
  name: "WuJie",
  component: Layout,
  redirect: "/wujie",
  meta: {
    icon: "Grid",
    title: "微前端",
    rank: 1,
    keepAlive:true,
  },
  children: [
    {
      path: "/vue2",
      name: "Vue2",
      component: () => import("@/views/wujie/vue2/Index.vue"),
      meta: {
        title: "Vue2子项目",
        keepAlive:true,
      }
    },{
      path: "/vue3",
      name: "Vue3",
      component: () => import("@/views/wujie/vue3/Index.vue"),
      meta: {
        title: "Vue3子项目",
        keepAlive:true
      }
    },{
      path: "/react",
      name: "React",
      component: () => import("@/views/wujie/React/Index.vue"),
      meta: {
        title: "React子项目",
        keepAlive:true,
      }
    }
  ]
} as RouteConfigsTable;
