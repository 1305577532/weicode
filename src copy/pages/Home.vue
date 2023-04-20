<template>
 			<div>
              <h2>Home组件内容</h2>
              <div>
                <ul class="nav nav-tabs">
                  <li>														
																				<!-- 二级路由要带着一级路由 -->
                    <router-link class="list-group-item " active-class="active" to="/home/news">News</router-link> 
                  </li>
                  <li>															
																				<!-- 二级路由要带着一级路由 -->
                    <router-link class="list-group-item " active-class="active" to="/home/message">Message</router-link>
                  </li>
                </ul>
               <keep-alive :include = "['News','Message']">  
                <!-- 缓存  include是指明要缓存那个组件 默认全部缓存   单个写法 include="News" 多个写法 :include = "['News','Message']-->
                <router-view></router-view>
               </keep-alive>
              </div>
            </div>
</template>

<script>
	export default {
		name:'Home',
		// beforeDestroy() {
		// 	console.log("home组件被销毁了"); //路由组件不用时被销毁
		// },
		// mounted(){
		// 	console.log("Home挂载完毕");
		// }

	}
</script>