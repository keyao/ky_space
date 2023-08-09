<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {Login} from "./api/login";
async function fn(){
  const [err,data] =await Login()
  if (err) {
    console.log(err)
    return
  }
  console.log(data.code)

}
</script>

<template>
  <el-button @click="fn()">按钮</el-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
