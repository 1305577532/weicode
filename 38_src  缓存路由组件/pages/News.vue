<template>
  <ul>
    <li>news001 <input type="text"></li> 
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>


export default {
    name: "News",
    activated(){
      console.log("News被激活了");
    },
    deactivated() {
      console.log("News消失了");
    },
};
</script>

<style>
</style>