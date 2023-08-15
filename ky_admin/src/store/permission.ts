import { defineStore } from "pinia";
import {RouteRecordRaw} from "vue-router";
// 第一个参数是应用程序中 store 的唯一 id
export const usePermission = defineStore('permission', () => {
    // token
    let token = ref()
    function setToken(token:string) {
        token.value = token
    }
    return {
        token,

    }
})
