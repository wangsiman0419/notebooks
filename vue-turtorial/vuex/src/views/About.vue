<template>
  <div class="about">
    <h1 class="nav" :style="{opacity:opacity}">This is an about page</h1>
    {{this.$store.state.city}}
  </div>
</template>
<script>
export default {
  data(){
    return {
      opacity:0.2
    }
  },
  mounted(){
    window.addEventListener("scroll",this.handle)
  },
  methods: {
    handle(){
       var height=document.documentElement.scrollTop;
       /* 达到300完全显示 */
       var opacity=height/300;
       if(opacity>1){
         opacity=1
       }
       this.opacity=opacity;
       console.log(height)
    }
  },
  destroyed(){
     window.removeEventListener("scroll",this.handle)
  }
}
</script>
<style scoped>
  .nav{
    width: 100%;
    height:40px ;
    background: red;
    position: fixed;
    top: 0;
    left: 0;
  }
  h1{
    margin: 0;
  }
</style>