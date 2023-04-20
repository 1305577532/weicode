<template>
    <div>
            <button @click="isShow = !isShow">显示/隐藏</button>
            <transition name="hallo" appear>
                <!-- appear开始就启动动画 -->
                <h1 v-show="isShow">weiweinihao</h1>
            </transition>
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
            background-color: orange;
        }
        /* .v-enter-active进入动画 */
        .hallo-enter-active{
            animation: weiwei 0.5s;
        }
        /* .v-leave-active 离场动画 */
        .hallo-leave-active{
            animation: weiwei 0.5s reverse; 
            /* reverse动画翻转 */
        }
        /* 关键帧 */
        @keyframes weiwei {
            /* 从哪里来 */
            from{
                transform: translateX(-100%);
                /* transform: translateX(-100px); */
            }
            /* 到哪里定住 */
            to{
                transform: translateX(0px);
            }
        }
</style>

