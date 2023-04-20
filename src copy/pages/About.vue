<template>
	<h2>我是About的内容</h2>
</template>

<script>
	export default {
		name:'About',
		// beforeDestroy() {
		// 	console.log("About组件被销毁了");
		// },

		// 通过路由规则，进去组件时调用
		beforeRouteEnter(to,from,next){
			if(to.meta.isok){
				if(localStorage.getItem("school") === "weiwei"){
					next()
				}else{
					alert("你没有权限进去")
				}
			}else{
				next()
			}
		},
		// 通过路由规则，离开组件时调用
		beforeRouteLeave (to, from, next) {
				console.log("离开了about组件");
				next()
		}
	}
</script>