<template>
    <div>
        <h1>当前求和为:{{ sum }}</h1>
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
export default {
    name:"Count",
    data() {
        return {
            n:1,
            sum:0
        }   
    },
    methods:{
        increment(){
            this.sum += this.n
        },
        decrment(){
            this.sum -= this.n
        },
        incrementOdd(){
            if(this.sum%2){
                this.sum += this.n
            }else return
        },
        incrementwait(){
            setTimeout(() => {
                this.sum += this.n
            }, 1000);
        },
    },
    
}
</script>

<style>
    bottom{
        background-color: blue;
    }
</style>