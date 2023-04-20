// 引入vue
import Vue from "vue";
// 引入app
import App from "../src/App.vue"
// 关闭生产提示
Vue.config.productionTip = false 
// 创建vm
new Vue({
    el:"#App",
    render: h => h(App),
})