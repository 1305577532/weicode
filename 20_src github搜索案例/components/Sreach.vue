<template>
        <div>
        <section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="enter the name you search" v-model="keyword" />&nbsp;
            <button @click="GetSreach">Search</button>
		</div>
		</section>
     
        </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'Sreach',
    data() {
        return {
            keyword: '',
        }
    }, 
    methods: {
        GetSreach(){
            this.$bus.$emit("updataListData",{isfirst:false,isLoading:true,users:[],errMsg:""})
            axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                response=>{
                    console.log("请求成功");
                    this.$bus.$emit("updataListData",{isfirst:false,isLoading:false,users:response.data.items,errMsg:""})
                },
                error =>{
                    console.log("请求失败",error.message);
                    this.$bus.$emit("updataListData",{isfirst:false,isLoading:false,users:[],errMsg:error.message})
                }
            )
        }
    },
}
</script>

