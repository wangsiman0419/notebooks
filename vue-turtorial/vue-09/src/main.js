import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vant from 'vant'
import 'vant/lib/index.css'
import { Loading } from 'vant'; 
Vue.use(Loading);
Vue.config.productionTip = false
Vue.prototype.axios=axios;
axios.interceptors.request.use(function (config) {
  store.state.isLoading=true;
  return config;
})
axios.interceptors.response.use(function (response) {
  store.state.isLoading=false;
  return response;
});
Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
