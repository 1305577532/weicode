<template>
	<div class="container">
		<Gategory title="美食"><img src="./yuyu.jpg" alt=""></Gategory>

		 <Gategory title="游戏" :listData="games">
		<ul>
            <li v-for="(item,index) in games" :key="index">{{ item }}</li>
        </ul>	
		 </Gategory>

		<Gategory title="电影"><img src="./yuyu.jpg" alt=""></Gategory> 
  	</div>

</template>

<script>
	import Gategory from './components/Gategory.vue';
	export default {
		name:'App',
		components:{
			Gategory,
		},
		data() {
        return {
            foods:["火锅","麻辣烫","麻辣香锅","关东煮",],
            games:["LOL","GTA5","穿越火线","原神",],
            films:["《教父》","《西红柿》","《拆弹专家》","《威威是大王》",],
        }
    },
	}
</script>
<style>
.container{
	display: flex;
	justify-content: space-around;
}
</style>
