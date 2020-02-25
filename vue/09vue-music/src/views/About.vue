<template>
  <div class="about">
    <fade>
       <h1 slot="fade" v-show="isShow">This is an about page</h1>
    </fade>
    <img :src="isPlay?require('@/assets/images/play.png'):require('@/assets/images/pause.png')" @click="handlePlay" alt="">
  </div>
</template>
<script>
import Fade from "../components/Fade"
export default {
  components:{
    Fade
  },
  data(){
    return{
      isShow:true,
      isPlay:false
    }
  },
  methods:{
    handlePlay(){
      this.isPlay=!this.isPlay
    }
  }
}
</script>