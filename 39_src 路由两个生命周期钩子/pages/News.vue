<template>
  <ul>
    <h1 :style="{ opacity }">欢迎你哈哈哈</h1>
    <li>news001 <input type="text"></li> 
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>


export default {
    name: "News",
    data() {
      return {
        opacity:1
      }
    },
    activated(){
      console.log("News被激活了");
      this.time = setInterval(()=>{
        this.opacity -= 0.1
        if (this.opacity <=0){
          this.opacity = 1
        } 
      },500)
    },
    deactivated() {
      console.log("News消失了");
      clearInterval(this.time)
      // 作用：路由组件所独有的两个生命周期钩子，用于捕获路由组件的激活状态
      // 1.activated 路由组件被激活时触发
      // 2.deactivated 路由组件失活时触发
    },
};
</script>

<style>
</style>