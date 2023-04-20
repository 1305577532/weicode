// 引入vue
import Vue from "vue";
// 引入app
import App from "../src/App.vue"
// 引入插件(plugins.js)
import plugins from "./plugins"
// 关闭生产提示
Vue.config.productionTip = false 

Vue.use(plugins)

// 创建vm
new Vue({
    el:"#App",
    render: h => h(App),
})