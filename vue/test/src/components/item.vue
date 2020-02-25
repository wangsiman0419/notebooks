<template>
    <div>
        <p>{{data.title}}</p>
    </div>
</template>
<script>
export default {
    name:"item",
    props:{
        data:{
            type:Object
        }
    }
}
</script>
<style scoped>
    
</style>