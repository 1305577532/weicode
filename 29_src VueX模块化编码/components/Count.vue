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
        <button @click="JIA(n)">+</button>
        <button @click="JIAN(n)">-</button>
        <button @click="jiaOdd(n)">当前求和为奇数再加</button>
        <button @click="WAIT(n)">等一等再加</button>
        <h1 style="color:blue">下方总人数：{{ personList.length }}</h1>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from "vuex"
export default {
    name:"Count",
    data() {
        return {
            n:1,
            
        }   
    },
    computed:{
        ...mapState("countAbout",["sum","school","subject"]),
        ...mapState("personAbout",["personList"]),
        // ...mapState(["a","b"]), 
        ...mapGetters("countAbout",["bigSum"])
    },
    methods:{
        ...mapMutations("countAbout",["JIA","JIAN"]),
        ...mapActions("countAbout",["jiaOdd","WAIT"])
    },
    mounted(){
        // const x = mapState({he:"sum",xuexiao:"school",xueke:"subject"})
    }
    
}
</script>

<style>
    bottom{
        background-color: blue;
    }
</style>