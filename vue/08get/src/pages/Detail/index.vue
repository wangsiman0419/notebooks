<template>
    <div class="container">
       <p>detail页面</p>
       <button @click="toggle">跳转回music</button>
    </div>
</template>

<script>
    export default {
        name:"Detail",
        computed:{
            id(){
                return this.$route.qurey.id
            }
        },
        methods:{
            toggle(){
                this.$router.back()
            }
        }
    }
</script>

<style lang="less" scoped>
  .container{
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    z-index: 110;
    min-height: 100%;
    background: #fff;
}
</style>