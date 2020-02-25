<template>
  <div class="home">
    <h4>{{count}}</h4>
    <count :data="count" @add="handleAdd"/>  
    <test :data.sync="count"></test> 
    <van-button type="default">默认按钮</van-button>
  </div>
</template>
/* @add=handleAdd:自定义属性传值 */
<script>
import Count from '@/components/Count.vue'
import Test from '@/components/Test.vue'
export default {
  name: 'home',
  data(){
    return{
      count:10
    }
  },
  components:{
    Count,
    Test
  },
  methods:{
    handleAdd(){
      this.count++
    }
  }
 
}
</script>
