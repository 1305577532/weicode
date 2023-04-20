<template>
	<li>
		<label>
			<input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
			<!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
			<!-- <input type="checkbox" v-model="todo.done"/> -->
			<span v-show="!todo.isEdit">{{todo.title}}</span>
			<input  v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo,$event)" ref="inputfocus" >
		</label>
		<button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
		<button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>

	</li>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		name:'MyItem',
		//声明接收todo
		props:['todo'],
		methods: {
			//勾选or取消勾选
			handleCheck(id){
				//通知App组件将对应的todo对象的done值取反
				// this.checkTodo(id)
				this.$bus.$emit("checkTodo",id)
			},
			//删除
			handleDelete(id){
				if(confirm('确定删除吗？')){
					//通知App组件将对应的todo对象删除
					// this.deleteTodo(id)
					// this.$bus.$emit("deleteTodo",id)
					pubsub.publish("deleteTodo",id)
				}
			},
			handleEdit(todo){
					if(todo.hasOwnProperty("isEdit")){ // 判断todo身上有没有idEdit属性
						todo.isEdit = true
					}else{
					this.$set(todo,"isEdit",true)
				}

				// 因为vue执行到todo.isEdit时不会立刻去更新dom 而且都代码读完才执行 所以直接执行焦点获取时input还没出现
				// this.$refs.inputfocus.focus()

				// 等dom更新后才执行函数 $nextTick
				// 作用：在下一次dom更新结束后执行的其指定的函数
				this.$nextTick(function(){
					this.$refs.inputfocus.focus()
				})

			
				
			},
			// 失去焦点回调(并且修改title)
			handleBlur(todo,e){
				
				todo.isEdit = false
				if(!e.target.value.trim()){
					return alert("输入不能为空")
				}
				console.log(e.target.value);  //获取事件对象的value
				this.$bus.$emit("updataTodo",todo.id,e.target.value)
			}
			
		},
	}
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}
</style>