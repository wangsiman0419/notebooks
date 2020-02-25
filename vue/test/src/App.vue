<template>
  <div id="app">
     <item :data="item" v-for="item of movies" :key="item.id"></item>
  </div>
</template>

<script>
import axios from 'axios-jsonp-pro';
import item from './components/item'
export default {
  name: 'app',
  data(){
    return{
     movies:[]
    }
  },
  methods:{
    handleClick(){
      this.msg="change"
    }
  },
  mounted(){
    var url="http://douban.uieee.com/v2/movie/top250";
    axios.jsonp(url).then(res=>{
      this.movies=res.subjects;
    })
  },
  components:{
    item
  }
}
</script>

<style>

</style>
