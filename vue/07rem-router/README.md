### 一.配置

#### 1.安装rem依赖

```
yarn add lib-flexible postcss-pxtorem
yarn add axios
```

#### 2.新建postcss.config.js文件

```javascript
module.exports={
    plugins:{
        "postcss-pxtorem":{
            "rootValue":75,
            "propList":["*"]
        }
    }
}
```

#### 3.main.js中导入

```javascript
import 'lib-flexible/flexible.js'
```

![1573435453873](C:\Users\WANGSI~1\AppData\Local\Temp\1573435453873.png)

点击空格键可以选中

public/index.html注释一行

![1573437819005](C:\Users\WANGSI~1\AppData\Local\Temp\1573437819005.png)

#### 4.自定义安装

```
1.选择自定义安装(第二个)  
2.选择less
3.选择第一个一路向下
```

#### 5.样式重置

```javascript
找到官网 reset.css将样式复制到assets/css/reset.css中
import '@/assets/css/reset.css'    //@是指src的根目录
```

### 二.路由配置

#### 2-1配置路由,在src根目录下新建routers/index.js

yarn add vue-router

```javascript
//routers/index.js
import Vue from 'vue';
import Router from 'vue-router';
import Music from '@/pages/Music'
import Mv from '@/pages/Mv'
Vue.use(Router);
export default new Router({
    mode:"hash",
    routes:[
        {
            path:'/music',     //新建的页面
            name:"music",
            component:Music
        },
        {
            path:'/mv',
            name:"mv",
            component:Mv
        }
    ]
})
```

#### 2-2App.vue

```javascript
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

```

#### 2-3pages--页面

```javascript
//Music/index.vue
<template>
  <div>
      music
  </div>
</template>

<script>
export default {
   name:"Music"
}
</script>

<style>

</style>

//Mv/index.vue
<template>
  <div>
     mv
  </div>
</template>

<script>
export default {
   name:"Mv"
}
</script>

<style>

</style>

```

#### 2-4main.js中引入

```javascript
import router from './routers'    //如果routers/index.js   index.js就不用写了
new Vue({
  router,     //把router加上
  render: h => h(App),
}).$mount('#app')

```

#### 2-5router-link--界面跳转

app.vue

```javascript
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/music">音乐</router-link>   
      <router-link to="/mv">MV</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
```

```javascript
<style lang="less">
#app #nav .router-link-exact-active{   
  color: blue;
}
</style>
```

![](C:\Users\wangsiman\Desktop\1.gif)

### 二.vue-router的简单使用

```javascript
//1.新建一个routers文件夹，建一个index.js文件
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
    mode:"hash",
    routes:[
        {
            path:"/music",       //页面路由
            name:"music",  
            component:()=>import('@/pages/Music')
        },
        ...
    ]
})
```



### 三.全局过滤器

```javascript
//main.js
Vue.filter("format",function(val){
  if(val.length>6){
    val=val.slice(0,6)+"..."
  }
  return val
})

//Mucic.vue中使用
<template>
  <div>
      music
      <p>{{"hello world" | format()}}</p>
  </div>
</template>

//Mv.vue中使用
<template>
    <div>
       mv
       <p>{{"从你的全世界路过" | format()}}</p>
    </div>
</template>
```

### 四.全局组件

```javascript
//main.js中注册
import BsBtn from '@/components/BsBtn.vue';   //导入
Vue.component('BsBtn',BsBtn)   //注册
//Music.vue中使用
<template>
    <div>
       mv
       <bs-btn></bs-btn>    //使用按钮组件
    </div>
</template>
```

### 五.插槽

```javascript
//main.js
import BsBtn from '@/components/BsBtn.vue';
Vue.component('BsBtn',BsBtn)

//components/BsBtn.vue
<template>
  <div>
      <slot name="header"></slot>
      <button class="btn">默认按钮</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn{
    width: 100px;
    height: 35px;
    background: red;
}
</style>

//mv.vue中使用
<template>
    <div>
       mv
       <p>{{"从你的全世界路过" | format()}}</p>
       <bs-btn>
           <p slot="header">hello world</p>    //插槽
       </bs-btn>
    </div>
</template>
```

### 六.拆分配置main.js

```javascript
//src/utils/config.js
import Vue from 'vue'
import 'lib-flexible/flexible.js'
import '@/assets/css/reset.css'
import BsBtn from '@/components/BsBtn.vue';
Vue.filter("format",function(val){
    if(val.length>6){
      val=val.slice(0,6)+"..."
    }
    return val
  })
  Vue.component('BsBtn',BsBtn)
  export default Vue;


//src/main.js
import Vue from 'vue'
import App from './App.vue'
import router from './routers'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

//main.js中引入config.js
import './utils/config.js'
```

### 七.跨域并发送请求

```javascript
//1.安装依赖
yarn add axios
//2.utils/config.js
import axios from 'axios'    //导入
axios.defaules.baseURL='http://192.168.14.49:5000'   //主地址
Vue.prototype.axios=axios;
//3.对应的文件index.vue中发送请求
import ItemIndex from '@/components/ItemIndex'
export default {
   name:"Music",
   data(){
       return{
           playlists:[]
       }
   },
    
    
    
    //注册组件
   components:{
       ItemIndex
   },
   mounted(){
       this.axios.get("/top/playlist?cat=华语&limit=12").then(res=>{
           this.playlists=res.data.playlists
       })
   }
}
//4.渲染数据
<template>
  <div class="container">
      <item-index :data="item" v-for="item of playlists" :key="item.id">
         <div slot="icon" class="icon">
            <img src="../../assets/images/p0.png" alt="">
            {{item.playCount}}
         </div>
      </item-index>
  </div>
</template>
```

