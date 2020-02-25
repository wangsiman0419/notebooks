<template>
  <div id="app">
    <div class="item" v-for="item of movies" :key="item.id">
      <p>{{item.title}}</p>
      <img :src="item.images.small" alt="">
    </div>
  </div>
</template>

<script>
import axios from 'axios-jsonp-pro';
export default {
  name: 'app',
  data(){
    return{
     movies:[]
    };
  },
  methods:{
    handleClick(){
      this.msg="change"
    }
  },
  mounted(){
    var url="https://douban.uieee.com/v2/movie/top250";
    axios.jsonp(url).then(res=>{
     console.log(res)
    })
  }
}
</script>

