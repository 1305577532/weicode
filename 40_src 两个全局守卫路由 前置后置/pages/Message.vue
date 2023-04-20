<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>&nbsp;&nbsp; -->
       
        <!-- 跳转路由并携带params参数，to的对象写法 -->
        <router-link :to="{
          name:'xianqing',  //如果携带的是params不允许使用path路径
          query:{
            id:m.id,
            title:m.title
          }
        }">
          {{ m.title }}
          </router-link>
          <button @click="PushShow(m)">push查看</button>
          <button @click="ReplaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: "Message",
  data() {
    return {
        messageList:[
          {id:"001",title:"消息001"},
          {id:"002",title:"消息002"},
          {id:"003",title:"消息003"}
        ]
    }
  },
  methods: {
    PushShow(m){
      this.$router.push({
        name:'xianqing',  //如果携带的是params不允许使用path路径
          query:{
          id:m.id,
          title:m.title
          }
      })
    },
    ReplaceShow(m){
      this.$router.replace({
        name:'xianqing',  //如果携带的是params不允许使用path路径
          query:{
          id:m.id,
          title:m.title
          }
      })
    }
  },
  beforeDestroy(){
    console.log("Message要被清除了");
  }
};
</script>

<style>
</style>