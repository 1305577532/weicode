<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button>把学校名给App</button>
	</div>
</template>

<script>
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
			this.$bus.$on("hello",(data)=>{
				console.log("我是school组件,收到数据",data);
			})
		},
		beforeDestroy(){
			this.$bus.$off("hello")
		}
		
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>