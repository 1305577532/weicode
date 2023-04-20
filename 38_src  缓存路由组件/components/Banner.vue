<template>
   <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <button @click="Forward">前进</button>
        <button @click="Back">后退</button>
        <button @click="Go">测试一下go</button>
      </div>
</template>

<script>
export default {
    name:"Banner",
    methods: {
      Forward(){
        this.$router.forward()
      },
      Back(){
        this.$router.back()
      },
      Go(){
        this.$router.go(1)
        // 正数是forword 比如go(1) = this.$router.forward()
        // 负数是forword 比如go(-1) = this.$router.back()
      }
    },
}
</script>

<style>

</style>