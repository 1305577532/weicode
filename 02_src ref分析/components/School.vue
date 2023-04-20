<template>
  <div>
    <h2>学校名称：{{Name}}</h2>
    <h2>学校地址：{{Address}}</h2>
  </div>
</template>

<script>
export default {
        name:"School",
        data() {
            return {
                Name:"威威大学",
                Address:"广州"

            }
        },
}
</script>

<style>
    div{
        background-color: greenyellow ;
    }
</style>