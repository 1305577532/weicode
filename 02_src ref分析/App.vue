<template>
    <div>
        <h1  ref="title">123456</h1>
        <button ref="btn" @click="show">点我输出上方的dom元素</button>

        <School ref="sch"/>

        
    </div>
</template>

<script>
// 引入School组件
import School from "./components/School.vue";
import { ref } from 'vue';

export default {
    name:"App",
    components:{
        School,
    },
    data() {
        return {
            msg:"欢迎学习VUE",
            s:false
        }
    },
    methods: {
        show(){
            console.log(this.$refs.title); //真实的dom元素
            console.log(this.$refs.btn);    //真实的dom元素
            console.log(this.$refs.sch);    // School组件的实例对象
            
            // ref属性
            // 1.被用来给元素或子组件注册引用信息（id的替代者）
            // 2.应用在html标签上获取的是真是dom元素，应用在组件标签上是组件实例对象
            // 3.使用方式
            // 打标识 <h1 ref = "xxx">... </h1> 或  <School ref = "xxx"> </School>
            // 获取 this.$refs.xxx
            
        }
    },
}
</script>

<style>

</style>