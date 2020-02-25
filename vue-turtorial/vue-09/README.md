### 一.this.$store.commit()修改状态

```js
//1.通过commit方法向store/index.js/mutations派发一个事件
export default {
  name: 'home',
  methods:{
    handleClick(){
      this.$store.commit("changeCity")
    }
  }
}
//2.在mutaions函数中接收派发过来的事件,并更改数据
mutations:{
    changeCity(state){
        state.city="成都"
    }
}
```

### 二.mapState

##### Tips:如何有多个状态需要获取，使用这个辅助函数效率更高

###### 通过计算属性获取vuex中的数据

```js
//1.store/index.js
export default new Vuex.Store({
  state: {
    city:"武汉",
    name:"王思曼",
    age:"21",
    sex:"女"
  },
 ...
})
//2.方法及使用，通过...mapState
<template>
  <div class="home">
    <h2 >{{name}}</h2>
    <h2>{{age}}</h2>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'home',
  computed:{
    ...mapState(['city','name','age','sex'])
  }
}
</script>
```

### 例题.增加、减少

```js
//1.第一种方法
.vue
<template>
  <div class="home">
      <h2>{{this.$store.state.count}}</h2>
      <button @click="add">增加</button>
      <button @click="reduce">减少</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods:{
    add(){
      this.$store.dispatch("increase")
    },
    reduce(){
      this.$store.dispatch("decrease")
    }
  }
}
</script>

//store/index.js
export default new Vuex.Store({
  state: {
    count:0
  },
  /* 简单的更改状态(state)的逻辑 */
  mutations: {
    myIncrease(state){
      state.count++
    },
    myDecrease(state){
      state.count--
    }
  },
  /* 异步操作,处理一些复杂的业务逻辑 */
  actions: {
    increase(ctx){
      ctx.commit("myIncrease")
    },
    decrease(ctx){
      ctx.commit("myDecrease")
    }
  },
  modules: {
  }
})
//2.第二种方法
<template>
  <div class="home">
      <h2>{{this.$store.state.count}}</h2>
      <button @click="add">增加</button>
      <button @click="reduce">减少</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods:{
     add(){
     this.$store.commit("changeAdd")
  },
    reduce(){
       this.$store.commit("changeReduce")
     } 
  }
}
</script>
 mutations: {
     changeAdd(state){
       state.count++
     },
     changeReduce(state){
       state.count--
     }
```

### 三.mapActions

映射到组件的methods方法中

映射Actions中的事件 ,有多个actions需要映射的时候

```js
//store/index.js
export default new Vuex.Store({
  state: {
    count:0
  },
  /* 简单的更改状态(state)的逻辑 */
  mutations: {
  },
  /* 异步操作,处理一些复杂的业务逻辑 */
  actions: {
     increase(ctx){
       ctx.commit("myIncrease")
     },
     decrease(ctx){
       ctx.commit("myDecrease")
     } 
  },
  modules: {
  }
})


//.vue
<template>
  <div class="home">
      <h2>{{this.$store.state.count}}</h2>
      <button @click="increase">增加</button>
      <button @click="decrease">减少</button>
  </div> 
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'home',
  methods:{
    ...mapActions(['increase','decrease']), 
    add(){
      this.increase()
    },
    reduce(){
      this.decrease()
    }
  },
}
</script>
```

### 四.mapMutations

```js
//store/index.js
 mutations: {
    myIncrease(state){
      state.count++
    },
    myDecrease(state){
      state.count--
    }
  },
      
 //vue
<template>
  <div class="home">
      <h2>{{this.$store.state.count}}</h2>
      <button @click="myIncrease">增加</button>
      <button @click="myDecrease">减少</button>
  </div> 
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'home',
  methods:{
    ...mapMutations(['myIncrease','myDecrease']), 
    add(){
      this.myIncrease()
    },
    reduce(){
      this.myDecrease()
    }
  },
}
</script>
```

### 五.getters、mapGetters

映射到局部的计算属性中,computed

```js
//store/index.js
/* 对state中的数据进行再次处理 */
getters:{
    myCount(state){
      return "当前的数量:"+state.count
    }
  }
//使用
this.$store.getters.myCount;
```

![1574303284276](C:\Users\WANGSI~1\AppData\Local\Temp\1574303284276.png)

```js
//mapGetters
将 store 中的 getter 映射到局部计算属性：
import {mapGetters} from 'vuex'
export default {
  name: 'home',
  computed:{
    ...mapGetters(['myCount'])
  },
 ...
}
    
//使用
<template>
  <div class="home">
      <h3>{{myCount}}</h3>
  </div>
</template>
```

### 六.module

作用：当store对象非常复杂的时候，我们可以根据将其拆分成不同的模块

#### 6.1新建modules文件夹，拆分store/index.js

![1574306450013](C:\Users\WANGSI~1\AppData\Local\Temp\1574306450013.png)

##### 1.新建modules/info.js--消息和user.js--用户

```js
//info.js
const info = {
    state: {
        tips:12,
        news:8
    },
    mutations: {
    },
    actions: {},
    getters: {}
  }
  export default info;
```

```js
//user.js
const user = {
    state: {
        name:"王思曼"
    },
    mutations: {},
    actions: {},
    getters: {}
  }
  export default user;
```

##### 2.将info.js和user.js导入到index.js中

```js
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';   
import info from './modules/info';
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    user,
    info
  }
})
```

#### 6.2使用数据

```js
<template>
  <div class="home">
      <h2>首页</h2>
      <h3>{{tips}}</h3>
      <h4>{{news}}</h4>
      <h5>{{name}}</h5>
      <button @click="add">增加</button>
      <button @click="reduce">减少</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'home',
  computed:{
    ...mapState({
      tips:state=>state.info.tips,
      news:state=>state.info.news,
      name:state=>state.user.name,
    })
  },
  methods:{
    ...mapMutations(['add','reduce'])
  }
}
</script>
```

### 七.vuex,axios拦截器实现Loading加载条

#### 7.1main.js设置axios拦截器

```
yarn add axios
```

```js
import axios from 'axios'
Vue.prototype.axios=axios;
axios.interceptors.request.use(function (config) {
  store.state.isLoading=true;
  return config;
})
axios.interceptors.response.use(function (response) {
  store.state.isLoading=false;
  return response;
});
```

```js
//使用vant-ui实现loading
1.安装依赖
yarn add vant
2.引入依赖
import Vant from 'vant'
import 'vant/lib/index.css'
import { Loading } from 'vant'; 
Vue.use(Loading);
Vue.use(Vant)
```

#### 7.2vuex

```js
//store/index.js
export default new Vuex.Store({
  state:{
    isLoading:true
  },
 ...
})
```

#### 7.3在全局组件里面使用--App.vue

```js
<template>
  <div id="app">
    <van-loading v-if="this.$store.state.isLoading" type="spinner" color="#1989fa" />
   ...
  </div>
</template>
```

### 八.模块化

#### 8-1export default

```js
//data.js
var a=10;
b=20;
export default{
    a,
    b
}
```

```js
//Data.vue页面导入
import data from './data.js';  
console.log(data);       //导出的是对象

//效果:{a:10,b:20}
```

#### 8-2export

```js
//data.js
var a=10;
b=20;
export {a,b}
```

```js
//Data.vue页面导入
import {a} from './data.js';
console.log(a);

//效果  10
```

### 九.图片滑动

```js
 <div class="wrapper">
        <div class="container">
            <img src="src/assets/logo.png" alt="">
            <img src="src/assets/logo.png" alt="">
            <img src="src/assets/logo.png" alt="">
            <img src="src/assets/logo.png" alt="">
            <img src="src/assets/logo.png" alt="">
            <img src="src/assets/logo.png" alt="">
        </div>
    </div>
```

```js
//css样式
<style>
        .wrapper{
            overflow-x: auto;
            overflow-y: hidden;
            border: 1px solid #333;
        }
        img{
            width: 250px;
        }
        /* 去掉滚动条，但是在移动端上划不动 */
        /* .wrapper::-webkit-scrollbar{
            display: none;
        } */
        .container{
            display: grid;
            grid-template-columns:repeat(5,250px) ;
            gap:10px;
        }
    </style>
```

### 十.命名路由

```
//配置
{
    path: '/detail',
    /* 命名路由 */
    name: 'detail',
    component: () => import('../views/Detail.vue')
}
```



#### 10.1router-link,get

```js
<template>
    <div>
          test
          <router-link :to="{name:'detail',query:{id:123}}">detail</router-link>
    </div>
</template>
```

#### 10.2router-link动态路由

```js
//配置动态路由
{
    path: '/detail/:id',
    /* 命名路由 */
    name: 'detail',
    component: () => import('../views/Detail.vue')
  }

//配置router-link
 <router-link :to="{name:'detail',params:{id:1213}}">detail</router-link>
```

#### 10.3$router.push()

```js
 this.$router.push({name:"detail",params:{id:1314}})
```

#### 10.4props解耦id

```js
//配置路由
{
    path: '/detail/:id',
    /* 命名路由 */
    name:'detail',
    component:() => import('../views/Detail.vue'),
    //core code
    props:true
  }
```

```js
//Detail.vue
export default {
    props:['id'],
    mounted(){
        console.log(this.id)
    }
};
```

