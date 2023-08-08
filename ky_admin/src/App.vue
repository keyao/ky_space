<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {Login} from "./api/login";
async function fn(){
  const data = await Login()
  data.code
  data.data
}
</script>

<template>
  <el-button>11</el-button>
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
