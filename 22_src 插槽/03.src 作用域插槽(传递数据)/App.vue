<template>
	<div class="container">
		 <Gategory title="游戏" >
			<!-- 接收数据 穿过来是个对象然后取值 -->
		<template scope="{games}">
			<!-- <h1>{{ weiwei }}</h1> -->
		<ul>
            <li v-for="(item,index) in games" :key="index">{{ item }}</li>
        </ul>
		</template>
		 </Gategory>

		 <Gategory title="游戏" >
			<template scope="{games}">
		<ol>
            <li v-for="(item,index) in games" :key="index">{{ item }}</li>
        </ol>
		</template>
		 </Gategory>

		 <Gategory title="游戏" >
			<template scope="{games}">
		
            <h4 v-for="(item,index) in games" :key="index">{{ item }}</h4>
      
		</template>
		 </Gategory>
		 
  	</div>

</template>

<script>
	import Gategory from './components/Gategory.vue';
	export default {
		name:'App',
		components:{
			Gategory,
		},
	
	}
</script>
<style>
.container,.foot{
	display: flex;
	justify-content: space-around;
}
h4{
	text-align: center;
}

</style>
