<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
import {Login} from "./api/login";
async function fn(){
  const [err,res] =await Login({
    username:'admin',
    password:'123456'
  })
  if (err) {
    console.log(err)
    return
  }
  console.log(res)
}
fn()
const color = ref<string>('red')
</script>
<style scoped lang="less">

@color:v-bind(color);
@import url('./app.less');

</style>
