<template>
    <div>
            <button @click="isShow = !isShow">显示/隐藏</button>
            <transition-group name="hallo" appear>
                <!-- appear开始就启动动画 -->
                <h1 v-show="!isShow" key="index">weiweinihao</h1>
                <h1 v-show="isShow" key="index">yuyunihao</h1>
            </transition-group>
    </div>
</template>

<script>
export default {
    neme:"Test",
    data() {
        return {
            isShow:true,

        }
    },

}
</script>

<style scoped>
        h1{
            background-color: rgb(121, 143, 241);
            /* transition: linear 0.5s;  */
        }
        /* 动画开始的起点和离开的终点 */
        .hallo-enter,.hallo-leave-to{
           transform: translateX(-100%);
        }
        /* 进入动画和离开动画 */
        .hallo-enter-active,.hallo-leave-active{
            transition: linear 0.5s; 
        }
        /* 动画开始的终点和离开的起点 */
        .hallo-enter-to,.hallo-leave{
            transform: translateX(0);
            
        }
      

</style>

