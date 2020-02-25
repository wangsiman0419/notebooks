<template>
    <div class="container">
      <router-link tag="p" :to="'/detail/'+item.id" v-for="item of playlists" :key="item.id" class="box">
          <img :src="item.coverImgUrl" alt="">
          <p>{{item.name}}</p>
      </router-link>
    </div>
</template>

<script>
    export default {   
    data(){
        return{
            playlists:[]
        }
    },
    mounted(){
        var url = "http://192.168.14.49:5000/top/playlist?cat=华语"
        this.axios.get(url).then(res=>{
           this.playlists=res.data.playlists
           console.log(this.playlists)
        })
    }
}
    
</script>

<style  scoped>
.container{
    display:flex;
    flex-wrap: wrap; 
    justify-content: space-between;
}
.box img{
    width:200px;
    height: 200px; 
    }
.box{
    width: 200px;
}
</style>