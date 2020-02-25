<template>
    <div>
      detail
    </div>
</template>

<script>
    export default {
        name:"Detail",
        props:['id'],
        mounted(){
            console.log(this.id)
        }
    }
</script>

<style lang="scss" scoped>

</style>