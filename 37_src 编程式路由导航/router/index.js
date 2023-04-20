// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from "../pages/News"
import Message from "../pages/Message"
import Detail from "../pages/Detail"


//创建并暴露一个路由器
export default new VueRouter({
	routes:[ 
		{	//一级路由
			name:"guanyu",
			path:'/about',
			component:About,
		},
		{
			path:'/home',
			component:Home,
			children:[
				{
					// 二级路由不用写斜杆
					path:"news",
					component:News,
				},
				{	
					// 二级路由不用写斜杆
					path:"message",
					component:Message,
					children:[
						{	
							name:"xianqing",
							// :id占位  声明接收params参数
							path:"detail/:id/:title",
							component:Detail,
							// props的第一种写法，值为对象,该对象中的所有key-value都会以props的形式传给Detail组件
							// props:{a:1,b:"hello"}

							// props的第一种写法，值为布尔值，如果是true就会把该路由接收到的所有params参数，以props的形式传给Detail组件
							// props:true

							props($route){
								return {
									id:$route.query.id,
									title:$route.query.title
								}
							}

							// props({query:{id,title}}){
							// 	// 解构赋值 先解构query然后解构里的id和title
							// 	return {id,title}
							// }
						}
					]
				}

			]
				
			
		}
	]
})
