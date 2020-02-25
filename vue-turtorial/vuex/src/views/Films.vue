<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-link to="/detail" tag="p">{{city}}</router-link>
    <div>
      <router-link to="/films/nowPlaying">正在热映</router-link>
      <router-link to="/films/comingSoon">即将上映</router-link>
    </div>
     <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Films',
  computed:{
    city(){
      return this.$store.state.city
    }
  },
  mounted(){
    this.axios.get("https://api.apiopen.top/searchMusic?name=以后").then(res=>{
      console.log(res)
    })
  }

}
</script>
