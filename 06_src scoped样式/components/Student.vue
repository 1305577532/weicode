<template>
  <div class="text">
    <h2 class="qwe">学生名称：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
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

      }



</script>

<style>
    .text{
      background-color: #e31818;
    }
</style>