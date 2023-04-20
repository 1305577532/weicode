<template>
    <div>
        <h1>当前求和为:{{ sum }}</h1>
        <h1>当前求和放大10倍1为:{{ bigSum }}</h1>
        <h2>我在{{ school }}</h2>
        <h2>我学{{ subject }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrment">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementwait">等一等再加</button>
    </div>
</template>

<script>
import {mapState,mapGetters} from "vuex"
export default {
    name:"Count",
    data() {
        return {
            n:1,
            
        }   
    },
    computed:{
        // 靠程序员自己亲自写的计算属性
        // sum(){
        //     return this.$store.state.sum
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // subject(){
        //     return this.$store.state.subject
        // },


        // 通过mapState来写
        // 借助mapState生成计算属性，从state中读取数据。(对象写法)
        // ...mapState({he:"sum",xuexiao:"school",xueke:"subject"})
        // 名字一样可以用(数组写法)
        ...mapState(["sum","school","subject"]),
        ...mapGetters(["bigSum"])
    },
    methods:{
        increment(){
            // 直接对接mutation不用跟actions对接
            this.$store.commit("JIA",this.n)
        },
        decrment(){
            this.$store.commit("JIAN",this.n)
        },
        incrementOdd(){   
            // 需要逻辑判断的话要到actions里面
            this.$store.dispatch("jiaOdd",this.n)
        },
        incrementwait(){
            this.$store.dispatch("WAIT",this.n)
           
        },
    },
    mounted(){
        // console.log("count",this.$store);
        const x = mapState({he:"sum",xuexiao:"school",xueke:"subject"})
    }
    
}
</script>

<style>
    bottom{
        background-color: blue;
    }
</style>