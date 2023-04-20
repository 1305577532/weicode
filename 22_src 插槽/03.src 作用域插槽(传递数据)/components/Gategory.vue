<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 传games数据给app中的Gategory -->
        <slot :games="games"></slot>
    </div>
</template>

<script>

export default {
    name:"Category",
    props:["title"],
    data() {
        return {
            games:["LOL","GTA5","穿越火线","原神",],
        }
    },
    
}
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
    img{
        width: 100%;
    }
</style>