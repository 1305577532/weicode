//该文件用于创建VueX中最为核心的store
import Vue from 'vue'
// 引入vuex
import Vuex from "vuex"
// 引入count
import countOptions from './Count'
// 引入Person 
import personOptions from './Person'
// 应用Vuex插件

Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
   modules:{
    countAbout:countOptions,
    personAbout:personOptions
   }
})


