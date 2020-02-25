### 一.异步路由

```javascript
export default new Router({
    mode:"hash",
    routes:[
       ...
        {
            path:'/detail',
            name:"detail",
            /* 异步路由 */
            component:()=>import('@/pages/Detail')
        }
    
})
```



### 二.get传值

#### 2-1在列表页传值this.$router.push()

```javascript
//1.在子组件中定义一个事件，传id
<template>
  <div @click="handleClick(data.id)">
    <img :src="data.coverImgUrl" />
    <p>{{data.name | format()}}</p>
  </div>
</template>

//2.在methods方法中触发
methods:{
    handleClick(id){
        console.log(id)
        this.$router.push(`/detail?id=${id}`)
    }
}
```

#### 2-2在详情页接收这个值--computed

```javascript
 export default {
        name:"Detail",
        computed:{
            id(){
                return this.$route.qurey.id
            }
        }
    }
```

#### 2-3在详情页跳转回列表页

```
this.$router.back()
```

```javascript
//定义一个事件
<template>
    <div>
       <p>detail页面</p>
       <button @click="toggle">跳转回列表页面</button>
    </div>
</template>
//methods中触发
 export default {
        name:"Detail",
        ...
        methods:{
            toggle(){
                this.$router.back()
            }
        }
    }
```

![](C:\Users\wangsiman\Desktop\1.gif)



![](E:\notebook\notebooks\vue\07rem-router\src\assets\images\1.gif)

### 四.通过id发送请求

```javascript
//Detail/index.vue
 export default {
        name:"Detail",
        computed:{
            id(){
                return this.$route.query.id     //接收上个页面传递的id
            }
        },
        methods:{
            toggle(){
                this.$router.back()
            }
        },
        mounted(){
            var id=this.id;     //获取id
            this.axios.get(`/top/playlist/detail?id=${id}`).then(res=>{    
                console.log(res)
            })
        }
    }
```

### 五.视频播放

```javascript
//1.安装依赖
yarn add video.js

//2.在utils的config.js中导入
import Video from 'video.js'
Vue.prototype.$video=Video;

//3.视频播放
<video :src="url" class="video" controls preload="auto"></video>
```

