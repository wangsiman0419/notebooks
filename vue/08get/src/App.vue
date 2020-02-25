<template>
  <div id="app">
     <router-view></router-view>
    <div id="nav">
       <router-link to="/music" class="music">
          <img src="../src/assets/images/music.png" alt="">
          <p>音乐</p>
       </router-link>
       <router-link to="/mv" class="mv">
          <img src="../src/assets/images/mv.png" alt="">
          <p>Mv</p>
       </router-link>
       <router-link to="/list" class="list">
        <img src="../src/assets/images/list.png" alt="">
          <p>歌单</p>
       </router-link>
    </div>
  </div>
  </template>


<script>

export default {
  name: 'app',
}
</script>

<style lang="less">
#app #nav .router-link-exact-active{
  color: #c20c0c;
}
#app {
  width:  10rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 35px;
  min-height: 100%;
}
#nav{
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom: 15px;
}
img{
  width: 60px;
  height: 60px;
}
.music{
  margin-left: 100px;
}
.mv{
  margin: 0 150px;
}
</style>
