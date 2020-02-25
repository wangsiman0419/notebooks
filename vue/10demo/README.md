### 一.数据持久化

```
localStorage
sessionStorage
```

![1573693968643](C:\Users\WANGSI~1\AppData\Local\Temp\1573693968643.png)

```javascript
//1.设置缓存
 sessionStorage.setItem
 
  <input type="text" v-model="keyword" @keyup="handleEnter">
 methods:{
    handleEnter(){
       sessionStorage.setItem("keyword",this.keyword)
    }
  },
 //2.获取缓存
 sessionStorage.getItem
 
 mounted(){
    var keyword=sessionStorage.getItem("keyword");
    if(keyword){
      this.keyword=keyword
    }
  }

//如果要永久保存则需要用到localStorage,主要不清楚永久存在,将sessionStorage换掉
```

```javascript
//使用localStorage+watch
<template>
  <div class="home">
      <input type="text" v-model="keyword" @keyup.enter="handleEnter" />
      <div v-for="item of arr" :key="item.word">
        <input type="checkbox" v-model="item.checked" />
        {{item.word}}
      </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return{
      keyword:"",
      arr:[],
      checked:false
    }
  },
  methods:{
    handleEnter(){
      this.arr.push({word:this.keyword,checked:false})
      /* localStorage值只能是字符串 JSON.stringify JSON.parse */
       var words=JSON.parse(localStorage.getItem("words"));
       words.push({"word":this.keyword,"checked":false});
       localStorage.setItem("words",JSON.stringify(words))
    }
  },
  mounted(){
    let words=localStorage.getItem("words");
    if(words){
        this.arr=JSON.parse(words);
    }else{
        localStorage.setItem("words","[]")
    }
  },
  watch:{
    arr:{
      handler(newVal){
        var words=JSON.parse(localStorage.getItem("words"));
        words=newVal;
        localStorage.setItem("words",JSON.stringify(words))
        
      },
      deep:true
    }
  }
}
</script>

```

### 二.生命周期函数和事件监听

```
created()     --组件创建时
mounted()     --组件被装载时
updated()     --data的数据更新，update生命周期函数会触发
destroyed()   --组件被销毁时     a-b b页面显示

//初次加载会触发
created()   mounted()
//a-b  b页面会显示
destroyed()
//a-b b-a  a页面会显示
created()   mounted()
```

```javascript
<template>
  <div class="about">
    
    <h1 ref="dom">This is an about page</h1>
    <input type="text" v-model="msg">
  </div>
</template>
<script>
export default {
  name:"About",
  data(){
    return{
      msg:"hello world"
    }
  },
  beforeCreate(){
    console.log(this.msg)
    console.log("组件被创建之前")
  },
  created(){
    console.log(this.msg)
    console.log(this.$refs.dom)
    console.log("组件被创建好了")
  },
  /* 组件被装载到真实DOM元素之前 */
  beforeMount(){
    console.log("组件被装载之前")
  },
  mounted(){
    console.log("组件被装载到DOM上")
    window.addEventListener("scroll",this.go)
  },
  /* data的数据更新，update生命周期函数会触发 */
  beforeUpdate(){
     console.log("beforeUpdate")
  },
  updated(){
    console.log("updated")
  },
  beforeDestroy(){
    console.log("组件销毁之前")
  },
  destroyed(){
    console.log("组件销毁的时候")
    window.removeEventListener("scroll",this.go)
  },
  methods:{
     go(){
       console.log(1)
     }
  }
}
</script>
<style scoped>
  
</style>
```

### 三.vant-ui实现适配

#### 3.1安装依赖

```
yarn add postcss-pxtorem amfe-flexible
```

#### 3.2main.js中引入依赖

```
import 'amfe-flexible/index.js'
```

#### 3.3配置 postcss.config.js

```javascript
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
```

Tip:public/index.html一定要加上视口

 <meta name="viewport" content="width=device-width,initial-scale=1.0"> 