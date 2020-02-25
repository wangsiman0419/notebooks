<template>
  <div class="container">
      <music-index :data="item" v-for="item of playlists" :key="item.id" class="item">
        <div slot="icon" class="icon">
          <img src="../../assets/images/p0.png" alt="">
           {{item.playCount |formatNum()}}
        </div>
      </music-index>
  </div>
</template>

<script>
import MusicIndex from '../Music/components/MusicIndex'
export default {
   name:"Music",
   data(){
     return{
       playlists:[]
     }
   },
   components:{
     MusicIndex
   },
   mounted(){
     this.axios.get('/top/playlist?cat=华语&limit=12').then(res=>{
       this.playlists=res.data.playlists;
     })
   }
}
</script>

<style>
 .container{
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
 }
 .icon{
    z-index: 101;
     position: absolute;
     top: 10px;
     right: 10px;
     color: #fff;
     font-size: 25px;
 }
 .icon img{
   width: 30px;
   height: 30px;
 }
 .item:nth-child(even){
   border: 1px solid red;
 }
</style>