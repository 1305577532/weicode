<template>
  <div>
    <h3 style="color:blue">count组件的求和为：{{ sum }}</h3>
    <h3>列表中第一个人的名字:{{ fristPersonname }}</h3>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入姓名" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个人名字随机</button>
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
            return this.$store.state.personAbout.personList
        },
        sum(){
            return this.$store.state.countAbout.sum
        },
        fristPersonname(){
            return this.$store.getters["personAbout/fristPersonname"]
        }
    },
    methods: {
        add(){
            const PersonObj = {id:nanoid(),name:this.name}
            this.$store.commit("personAbout/ADD_PERSON",PersonObj)
            this.name=" "
        },
        addWang(){
            const PersonObj = {id:nanoid(),name:this.name}
            this.$store.dispatch("personAbout/addpersonWang",PersonObj)
            this.name=" "   
        },
        addPersonServer(){
            this.$store.dispatch("personAbout/addpersonServer")
        }
    },
 
}
</script>

<style>

</style>