console.log("我和我的祖国")
import '../assets/index.css'
import Vue from 'vue'
import App from './App.vue'
const root=document.createElement("div");
document.body.append(root);
new Vue({
    render:h=>h(App)
}).$mount(root)