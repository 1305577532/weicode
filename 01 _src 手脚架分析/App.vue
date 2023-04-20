<template>
  <div>
	<img src="./assets/logo.png" alt="logo">
	<SchooL></SchooL>
	<StudenT></StudenT>
	

  </div>
</template>

<script>
// 引入组件
	import SchooL from './components/SchooL'
	import StudenT from './components/StudenT'

   export default {
	name:"App",
	components:{
		SchooL,
		StudenT,
	}
}
</script>


