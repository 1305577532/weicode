
// 该文件是整个项目的入口文件

// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false

// 创建vue实例对象 -- vm
new Vue({
  el:"#App",
// 关于不同版本的vue
// 1.vue.js与vue.runtime.xxx.js的区别
// (1).vue.js是完整版的vue,包含：核心功能+模板解析器(template)
// (2).vue.runtime.vue是运行版的vue 只包含核心功能 没有模板解析器(template)

// 2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项
// 需要使用render函数接收到的createElement函数去指定具体内容
render: h => h(App),

function(params) {

}
}
)
