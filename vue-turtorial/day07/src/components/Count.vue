<template>
    <div @click="handleAdd">
        {{data}}
    </div>
</template>

<script>
    export default {
        props:{
            data:{
                type:Number,
                required:true
            }
        },
        methods:{
            handleAdd(){
                this.$emit("add")
            }
        }
    }
</script>

<style  scoped>

</style>