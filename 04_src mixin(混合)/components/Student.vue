<template>
  <div>
    <h2 @click="showName">学生名称：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
// 引用一个mixin 
import {mixin,maxin} from "../mixin"
export default {
        name:"Student",
        data() {
            return {
              name:'张三',
              sex:'男'
            }
        },
       
        mixins:[mixin,maxin]
      }



</script>

<style>
  
</style>