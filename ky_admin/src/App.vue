<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {Login} from "./api/login";
async function fn(){
  const [err,data] =await Login({
    username:'admin',
    password:'123456'
  })
  if (err) {
    console.log(err)
    return
  }
  console.log(data)
  obj.value ++

}
const obj = ref<number>(15)
</script>

<template>
  <el-button @click="fn()">按钮</el-button>
  <div>{{obj}}</div>
</template>

<style scoped>

</style>
