<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<button @click="sentStudentname"> 把学生名给school组件</button>
 	</div>
</template>

<script>
	import pubsub from "pubsub-js"
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男',
			}
		},
		methods:{
			sentStudentname(){
			pubsub.publish("hello",6666)
			}
		},
		mounted(){

		}
	}
</script>

<style lang="less" scoped>
	.student{
		background-color: pink;
		padding: 5px;
		margin-top: 30px;
	}
</style>
