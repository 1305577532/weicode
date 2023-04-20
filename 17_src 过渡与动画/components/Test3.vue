<template>
    <div>
            <button @click="isShow = !isShow">显示/隐藏</button>
            <transition-group 
            appear
            name="animate__animated animate__bounce" 
            enter-active-class="animate__rubberBand"
            leave-active-class="animate__zoomOutDown"
            >
                <!-- appear开始就启动动画 -->
                <h1 v-show="!isShow" key="index">weiweinihao</h1>
                <h1 v-show="isShow" key="index">yuyunihao</h1>
            </transition-group>
    </div>
</template>

<script>
import "animate.css"
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
        
      

</style>

