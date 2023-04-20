<template>
  <div>
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address | myslice}}</h2>
  </div>
</template>

<script>
export default {
        name:"School",
        data() {
            return {
              name:'张三',
              address:'广州123456789'
            }
        },
      }



</script>

<style>
  
</style>