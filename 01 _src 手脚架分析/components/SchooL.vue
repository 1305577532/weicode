<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>{{SchoolName}}</h2>
    <h2>{{Address}}</h2>
    <button @click="showName">笑死我了</button>
  </div>
</template>

<script>
// 组件交互相关的代码(数据、方法等等)
export default {
  name: 'SchooL',
  data() {
    return {
      SchoolName: "威威大学",
      Address: "广州"
    };
  },
  methods: {
    showName() {
      alert(this.SchoolName);
    }
  }
};

// export default school;
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: orange;
}
</style>