<template>
    <div>
    <Student Name="威威大王" Sex="nna" :Age=12 />  
    </div>
</template>

<script>
// 引入School组件
import Student from "./components/Student.vue";

export default {
    name:"App",
    components:{
       Student,
    },

}
</script>

<style>

</style>