### 一.vuex

#### 1-1.如何获取vuex中的数据

$store.data.city

```javascript
//1.新建vue文件时，选中vuex
//2.在src/store/index.js中添加数据
export default new Vuex.Store({
  state: {
    city:"武汉"
  },
  ...
})
//3.在页面使用vue中的数据
  export default {
  name: 'home',
  mounted(){
    console.log(this.$store.state.city) 
  },
  computed:{
    city(){                      //可以通过计算属性拿到city
      return this.$store.state.city      
    }
  }
}
//4.使用
<p>{{city}}</p>     //或者 <p>{{this.$store.state.city}}</p>
```

#### 1-2this.$store.dispatch向vuex派发一个事件--actions

```javascript
  methods:{
      handleClick(city){
         /* this.$store.dispatch  向vuex派发一个事件，同时传递一个参数 */
         this.$store.dispatch("changeCity",city)
      }
}
```



### 二.组件@click事件

```js 
 @click.native   //给组件事件必须加上.native修饰符
```

### 三.vuex的工作

![](E:\notebook\notebooks\vue-turtorial\vuex\src\assets\vuex.png)

```js
//1.通过this.$store.dispatch()向vuex中的actions派发一个事件同时传递一个参数
  methods:{
      handleClick(city){
         /* this.$store.dispatch  向vuex派发一个事件，同时传递一个参数 */
         this.$store.dispatch("changeCity",city)
      }
}
//2.vuex-actions中接收dispatch派发过来的事件和参数
export default new Vuex.Store({
    ...
    actions: {
    changeCity(ctx,city){
      /* ctx表示上下文    this.$store
        city是自定义事件传递过来的参数 */
     //3.在actions中使用commit方法向mutations提交一个事件，同时传递一个参数
      ctx.commit("toggleCity",city)     //toggleCity:自定义一个事件名
    }
  },
})
//4.在mutations中接收actions派发过来的事件和参数，并修改参数
export default new Vuex.Store({
  state: {
    city:"武汉"
  },
  mutations: {
     toggleCity(state,city){
       state.city=city
     }
  },
  actions: {
    changeCity(ctx,city){
      ctx.commit("toggleCity",city)
    }
  },
})
```

### 四.数据持久化

```js
//1.设置缓存
export default new Vuex.Store({
 ...
  actions: {
    changeCity(ctx,city){
      ctx.commit("toggleCity",city)
      localStorage.setItem("city",city)
    }
  },
})
//2.获取缓存,有缓存就取缓存，没有缓存就设置缓存
function getCity(){
  let defaultCity="武汉";
  if(localStorage.getItem("city")){
    defaultCity=localStorage.getItem("city")
  }
  return defaultCity
}
//3.使用
export default new Vuex.Store({
  state: {
    city:getCity()
  },
    ...
})
```

### 五.当前所在位置接口

```
http://39.97.33.178/api/getLocation
```

### 六.子路由，嵌套路由

#### 6-1配置子路由--children

Tips：在主路由的children属性中取配置

```js
//1.新建两个页面views/ComingSoon.vue   NowPlaying.vue
//2.配置路由界面,router/index.js,挂在films页面下
const routes = [
  {
    path: '/films',
    name: 'films',
    component: Films,
    children:[
      {
        path:'nowPlaying',
        component:()=>import('../views/NowPlaying.vue')
      },
      {
        path:'comingSoon',
        component:()=>import('../views/ComingSoon.vue')
      }
    ]
  }
    ...
]
```

#### 6-2在主路由对应的组件中取设置router-view

> 目的：router-view去装载这些子路由。router-view本质上就是一个动态组件

```js
//在Films.vue组件中去配置
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-link to="/detail" tag="p">{{city}}</router-link>
    <div>
      <router-link to="/films/nowPlaying">正在热映</router-link>     //子路由
      <router-link to="/films/comingSoon">即将上映</router-link>
    </div> 
     <router-view></router-view>
  </div>
</template>
```

### 七.路由重定向--redirect

```js
重定向也是通过 routes 配置来完成，下面例子是从 /a 重定向到 /b：
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }
  ]
})
```

```js
//router/index.js
const routes = [
  {
    path: '/films',
    name: 'films',
    component: Films,
    children:[
      {
        path:'nowPlaying',
        component:()=>import('../views/NowPlaying.vue')
      },
      {
        path:'comingSoon',
        component:()=>import('../views/ComingSoon.vue')
      }
    ],
    redirect:"/films/nowPlaying"
  },
 ]
```

### 八.vm的使用

#### 8.1配置postcss.config.js

```js
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {}, 
      "postcss-write-svg": {
        utf8: false
      },
      "postcss-cssnext": {},
      "postcss-px-to-viewport": {
        viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 
        viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置 
        unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除） 
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw 
        selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名 
        minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值 
        mediaQuery: false // 允许在媒体查询中转换`px` 
      }, 
      "postcss-viewport-units":{},
      "cssnano": {
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false
      },
  }
}

```

#### 8.2安装依赖

```js
yarn add cssnano postcss-aspect-ratio-mini postcss-cssnext postcss-px-to-viewport postcss-viewport-units postcss-write-svg 
yarn add cssnano-preset-advanced 
yarn add postcss-import postcss-url autoprefixer 
```

#### 8.3在public/index.html中配置

```js
<script src="//g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js"></script>
<script>
      window.onload = function () {
        window.viewportUnitsBuggyfill.init({
          hacks: window.viewportUnitsBuggyfillHacks
        });
      }
</script>
```

### 九.渐隐渐显的导航

```
1.style样式的动态绑定
2.生命周期函数
3.事件监听
```

```js
<template>
  <div class="about">
    <h1 class="nav" :style="{opacity:opacity}">This is an about page</h1>
    {{this.$store.state.city}}
  </div>
</template>
<script>
export default {
  data(){
    return {
      opacity:0.2
    }
  },
  mounted(){
    window.addEventListener("scroll",this.handle)
  },
  methods: {
    handle(){
       var height=document.documentElement.scrollTop;
       /* 达到300完全显示 */
       var opacity=height/300;
       if(opacity>1){
         opacity=1
       }
       this.opacity=opacity;
       console.log(height)
    }
  },
  destroyed(){
     window.removeEventListener("scroll",this.handle)
  }
}
</script>
<style scoped>
  .nav{
    width: 100%;
    height:40px ;
    background: red;
    position: fixed;
    top: 0;
    left: 0;
  }
  h1{
    margin: 0;
  }
</style>
```
