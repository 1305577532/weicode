<template>
	<div class="container">
		<Sreach/>
		<List/>
  	</div>

</template>

<script>
	import Sreach from './components/Sreach.vue'
	import List from './components/List.vue'
	export default {
		name:'App',
		components:{
			Sreach,
			List
		}	
	}
</script>

