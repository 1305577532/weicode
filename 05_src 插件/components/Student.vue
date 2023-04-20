<template>
  <div>
    <h2>学生名称：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="test">获取hello</button>
  </div>
</template>

<script>
// 引用一个mixin 
export default {
        name:"Student",
        data() {
            return {
              name:'张三',
              sex:'男'
            }
        },

        methods:{
          test(){
            this.demo()
          }
        }
      }



</script>

<style>
  
</style>