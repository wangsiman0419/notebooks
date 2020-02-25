<template>
     <div class="item">
        <div class="list" @click="handleClick(data.id)">
            <slot name="icon"></slot>
            <img :src="data.coverImgUrl" alt="" class="bg">
            <p>{{data.name | format()}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"MusicIndex",
        props:{
            data:{
                type:Object,
                required:true
            }
        },
        methods:{
            handleClick(id){
                this.$router.push(`/detail?id=${id}`)
            }
        }
    }
</script>

<style scoped>
.bg{
    width: 240px;
    height: 240px;
}
p{
    font-size: 32px;
}
.list{
   width: 240px;
   margin-bottom: 20px;
   position: relative;
}
.item{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>