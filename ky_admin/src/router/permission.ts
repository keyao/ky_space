import router from "@/router/index";
import {RouteRecordRaw} from "vue-router";

const routeModules = import.meta.glob('./modules/*.ts', {
    eager: true
})
import {usePermission} from "@/store/permission";

// 权限路由
const routeModuleList: RouteRecordRaw[] = []
Object.keys(routeModules).forEach((key) => {
    // @ts-ignore
    const mod = modules[key].default;
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routeModuleList.push(...modList);
})
routeModuleList.sort((a, b) => {
    let one = a.meta?.rank ?? 0
    let two = b.meta?.rank ?? 0
    if (!one || !two) {
        return 0
    }
    if (one > two) {
        return 1
    } else if (one === two) {
        return 0
    } else {
        return -1
    }
})


const whiteModules = import.meta.glob('./white/*.ts')
// 路由白名单
const whiteList:RouteRecordRaw[] = []
Object.keys(whiteModules).forEach((key) => {
    // @ts-ignore
    const mod = modules[key].default;
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    whiteList.push(...modList);
})



router.beforeEach(async (to, form, next) => {
    const permission = usePermission()

}