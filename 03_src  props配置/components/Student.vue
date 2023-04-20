<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生名称：{{Name}}</h2>
    <h2>学生地址：{{Sex}}</h2>
    <h2>学生地址：{{myage}}</h2>
    <button @click="updatedage"> 尝试修改改到的年龄</button>
  </div>
</template>

<script>
export default {
        name:"Student",
        data() {
            return {
                msg:"我是一个帅哥" ,
                myage:this.Age,
            }
        },

        // 简单声明接收
        props:['Name','Sex','Age'],

        // 接收的同时对数据类型进行限制
        // props:{
        //   Name:String,
        //   Sex:String,
        //   Age:Number,
        // },
          
        // props:{
        //   Name:{
        //       type:String, // type 传入类型
        //       required:true,  // required 必须传入
        //     // default:"123" 默认值
        //   },  
        //   Age:{
        //       type:Number,
        //       default:99
        //   },
        //   Sex:{
        //     type:String,
        //     required:true
        //   },

          methods: {
            updatedage() {
              this.myage++
            },
          },
        }

</script>

<style>
  
</style>