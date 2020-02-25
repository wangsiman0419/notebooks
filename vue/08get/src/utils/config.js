import Vue from 'vue'
import 'lib-flexible/flexible.js'
import '@/assets/css/reset.css'
import BsBtn from '@/components/BsBtn.vue';
import axios from 'axios'
Vue.filter("format",function(val){
    if(val.length>6){
      val=val.slice(0,6)+"..."
    }
    return val
  })
Vue.filter("formatNum",function(sum){
    if(sum){
      if(sum>10000){
        sum=Math.floor(sum/1000)/10+"万"
      }else{
        sum="sum";
      }
      return sum
    }
  })
Vue.filter("formatTime",function(val,min,sec){
  if(val/1000/60<=10){
    min='0'+Math.floor(val/1000/60)
  }else{
    min=Math.floor(val/1000/60)
  }

  if(val/1000%60<=10){
     sec='0'+Math.round(val/1000%60)
  }else{
    sec=Math.round(val/1000%60)
  }
  return min+":"+sec
})
  axios.defaults.baseURL='http://192.168.14.49:5000';
  Vue.prototype.axios=axios;
  Vue.component('BsBtn',BsBtn)
  export default Vue;