<template>
  <div>
    <h3 style="color:blue">count组件的求和为：{{ sum }}</h3>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入姓名" v-model="name">
    <button @click="add">添加</button>
    <ul>
        <li v-for="(item) in personList" :key="item.id">{{ item.name }}</li>
       
    </ul> 
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
    name: "Person",
    data() {
        return {
            name: "",
        }
    },
    computed: {
        personList(){
            return this.$store.state.personList
        },
        sum(){
            return this.$store.state.sum
        }
    },
    methods: {
        add(){
            const PersonObj = {id:nanoid(),name:this.name}
            this.$store.commit("ADD_PERSON",PersonObj)
            this.name=" "
        }
    },
 
}
</script>

<style>

</style>