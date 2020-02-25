<template>
  <div class="home">
    <!-- 
      enter 从隐藏到显示的过程 
    三个状态：v-enter:动画起始的状态   v-enter-active：监听整个动画的执行过程  v-enter-to:最终要达到的状态
      leave  从显示要隐藏
      v-leave   v-leave-active  v-leave-to
     -->
    <transition>
        <p v-if="isShow">hello world</p>
    </transition>
    <button @click="handleClick">toggle</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    handleClick(){
      this.isShow=!this.isShow
    }
  },
  mounted(){
     axios.get("http://yapi.demo.qunar.com/mock/34774/").then(res=>{
       console.log(res)
     })
  }
}
</script>
/* scoped：避免样式重叠 */
<style scoped>
   /* 样式复用 */
   /* leave:关注v-leave-to的状态
      enter：关注 v-enter的状态
  */
   .v-leave-active,.v-enter-active{
     transition: opacity 2s;
   }
   .v-enter,.v-leave-to{
     opacity: 0;
   }
</style>