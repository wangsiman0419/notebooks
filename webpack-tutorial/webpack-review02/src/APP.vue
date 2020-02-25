<template>
    <div>
        <div v-for="item of musics" :key="item.id">
           <p>{{item.name}}</p>
           <img :src="item.coverImgUrl" alt="">
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
       var url="http://192.168.14.49:3000/top/playlist?cat=日语"
      /*  this.axios(url).then(res=>{
           console.log(res)
       }) */
       axios.get(url).then(res=>{
           this.musics=res.data.playlists;
       })
    }
}
</script>
<style scoped>
    
</style>