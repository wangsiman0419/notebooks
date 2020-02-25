import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import Vant from 'vant'
import 'vant/lib/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Vant)
Vue.use(ElementUI)
Vue.prototype.$http=axios;
Vue.config.productionTip = false
axios.defaults.withCredentials=true    //允许htp请求携带cookies
axios.defaults.crossDomain=true
//以上两条允许跨域访问cookies
axios.defaults.baseURL="http://192.168.14.13:3000";
Vue.filter("formats",function(val,params){
  return "$"+val.toFixed(params);   
  }
)
Vue.filter("format",function(val){
  if(val.length>7){
      val=val.slice(0,7)+'...'
  }
  return val
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
