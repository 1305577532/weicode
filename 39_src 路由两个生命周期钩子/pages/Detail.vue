<template>
    <ul>
        <!-- <li>{{ $route.query.id}}</li>
        <li>{{ $route.query.title}}</li> -->
        <!-- <li>{{ $route.params.id}}</li>
        <li>{{ $route.params.title}}</li> -->
        <li>{{ id }}</li>
        <li>{{ title }}</li>
    </ul>
</template>

<script>


export default {
    name:"Detail",
    // props:["a","b"]
    props:["id","title"]
}
</script>

<style>

</style>