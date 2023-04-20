<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button>把学校名给App</button>
	</div>
</template>

<script>
	import pubsub from "pubsub-js"
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		
		},
		mounted(){
				//	监听hello事件 	 接收数据
			// this.$bus.$on("hello",(data)=>{
			// 	console.log("我是school组件,收到数据",data);
			// })

			// 订阅消息
		this.pubid = pubsub.subscribe("hello",(msgName,data)=>{
			// console.log(this);  //这个this是undefined的 因为是用第三方库
				console.log("有人发布hello消息，hello执行了",msgName,data);
			})
		},
		beforeDestroy(){
			// this.$bus.$off("hello")
			// 取消订阅 取消订阅想定时器一样需要一个id
			pubsub.unsubcribe('pubid')
		}
		
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>