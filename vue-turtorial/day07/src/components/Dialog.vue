<template>
    <div class="container">
         <div class="box">
            <p>标题</p>
            <!-- <p>代码是写出来给人看的，附带能在机器上运行</p> -->
            <button @click="handleDelete">取消</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Dialog",
        methods:{
            handleDelete(){
                this.$emit("del")
            }
        }
    }
</script>

<style scoped>
.container{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(107, 106, 106);
    opacity: .4;
}
</style>