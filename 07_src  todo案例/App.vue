<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<MyHeader :addTodo="addTodo"/>
					<!-- 将todos放在app里并传给list 然后将addTodo方法传给header header再将todoObj传给app -->
				<MyList :todos="todos"  :checkTodo = "checkTodo" :deleteTodo="deleteTodo" />
				<MyFooter :todos="todos"  :checkAllTodo="checkAllTodo"  :clearAllTodo="clearAllTodo"/>
			</div>
		</div>
	</div>
</template>

<script>
	import MyFooter from './components/MyFooter.vue';
	import MyHeader from './components/MyHeader.vue';
	import MyList from './components/MyList.vue';

	export default {
		name:'App',
		components:{MyHeader,MyList,MyFooter},
		data() {
			return {
				todos:[
					{id:"001",title:"洗澡",done:true},
					{id:"002",title:"睡觉",done:false},
					{id:"003",title:"打游戏",done:true},
					{id:"004",title:"学习",done:true}
				]
			}
		},
		methods:{
			// 添加一个todo
			addTodo(todoObj){
				console.log(todoObj);
				this.todos.unshift(todoObj)
			},
			//勾选or取消勾选一个todo
			checkTodo(id){
				this.todos.forEach((todo)=>{
					if(todo.id === id) todo.done = !todo.done
				})
			},
			// 删除一个todo
			deleteTodo(id){
				  this.todos = this.todos.filter((todo)=>{
					return todo.id !== id
				})
			},
			// 全选or全不选
			checkAllTodo(done){
				this.todos.forEach((todo)=>{
					todo.done = done
				})
			},
			// 清楚所有已经完成的todo
			clearAllTodo(){
				this.todos = this.todos.filter((todo)=>{
					return todo.done !== true
					})

				}
				// 快速排序
				// quickSort(arr){
				// 	if(arr.length <= 1) return arr
				// 	let left = []
				// 	let right = []
				// 	let mid = arr.splice(0,1)
				// 	for(let i = 0; i < arr.length; i++){
				// 		if(arr[i] < mid){
				// 			left.push(arr[i])
				// 		}else{
				// 			right.push(arr[i])
				// 		}
				// 	}
				// 	return this.quickSort(left).concat(mid,this.quickSort(right))
				// }
				
						

				 

		}
	}
	
		
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>
