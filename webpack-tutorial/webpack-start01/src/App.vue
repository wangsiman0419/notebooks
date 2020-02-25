<template>
    <div class="container">
       <div v-for="item of musics" :key="item.id">
           <img :src="item.coverImgUrl" alt="">
           <p>{{item.name}}</p>
       </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"App",
        data(){
            return{
                musics:[]
            }
        },
        mounted(){
            var url="https://music.aityp.com/top/playlist?cat=华语"
            axios.get(url).then(res=>{
                var musics=res.data.playlists;
                console.log(musics)
                this.musics=musics;
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>