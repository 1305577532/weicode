<template>
    <div >
    <Student/> 
    <hr>
    <School/> 
    </div>
</template>

<script>
// 引入School组件
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
    name:"App",
    components:{
       Student,
       School
    },

}
</script>


<style lang="less">
    .demo{
        background-color: #d31212;
        .qwe{
            font-size: 400px;
        }
    }
</style>