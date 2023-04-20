<template>
	<div class="todo-header">
		<input type="text" @keyup.enter="add" v-model="title" />
	</div>
</template>

<script>
import {nanoid} from 'nanoid'

	export default {
		name:'MyHeader',
		props:["addTodo"],
		data() {
			return {
				title:""
			}
		},
		methods:{
			add(){
				if (this.title.trim() == false ) {
					alert("输入不能为空")
					this.title = ""
					return	
				}
				

				// 将用户的输入包装成一个todo对象
				const todoObj = {id:nanoid(),title:this.title,done:false}
				// 通知app组件去添加一个app对象
				this.addTodo(todoObj)
				// 清空输入
				this.title = ""
			

				// console.log(event.target.value);
				// console.log(this.title);

			}
		}
	}
</script>

<style scoped>
	/*header*/
	.todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>