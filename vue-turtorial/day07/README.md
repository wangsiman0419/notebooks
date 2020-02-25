### 一.单向数据流

```
//Tips:在vue中，子组件不能直接修改从父组件传递过来的数据
```

```javascript
//1.新建子组件
<template>
    <div @click="handleAdd">{{data}}</div>
</template>

<script>
    export default {
        props:{
            data:{
                type:Number,
                required:true
            }
        },
        methods:{
            handleAdd(){
                this.$emit("add")   //通过$emit传数据
            }
        }
    }
</script>
```

```javascript
//2.父组件
<template>
  <div class="home">
    <h4>{{count}}</h4>
    <count :data="count" @add="handleAdd"/>  
  </div>
</template>
/* @add=handleAdd:自定义属性传值 */
<script>
import Count from '@/components/Count.vue'
export default {
  name: 'home',
  data(){
    return{
      count:10
    }
  },
  components:{
    Count
  },
  methods:{
    handleAdd(){
      this.count++
    }
  }
 
}
</script>

```

### 二.双向数据流

```javascript
//1.新建一个组件并在父组件中引入
//子组件
<template>
    <div @click="add">
        {{data}}
    </div>
</template>

<script>
    export default {
        name:"Test",
        props:{
            data:{
                type:Number,
                required:true
            }
        },
        methods:{
            add(){
                this.$emit("update:data",12)    //数据更新
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

//2.在父组件中引入子组件
<template>
  <div class="home">
    <h4>{{count}}</h4>
    <test :data.sync="count"></test> 
  </div>
</template>
/* @add=handleAdd:自定义属性传值 */
<script>
import Test from '@/components/Test.vue'
export default {
  name: 'home',
  data(){
    return{
      count:10
    }
  },
  components:{
    Test
  },
}
</script>


```

### 三.页面跳转

```javascript
<template>
    <div>
     个人中心
     <router-link to="/detail" tag="button">
     跳转到detail
     </router-link>
    </div>
</template>


//传变量
  <router-link :to="'/detail/'+item.id" tag="button">


<script>
    export default {
        name:"Center"
    }
</script>

<style  scoped>

</style>
```

#### 3.1.router-link动态传值

```javascript
//1.center.vue--加id跳转
<template>
    <div>
     个人中心
     <router-link to="/detail/3232387" tag="button">
     跳转到detail
     </router-link>
    </div>
</template>

<script>
    export default {
        name:"Center"
    }
</script>

<style  scoped>

</style>


//2.router/index.js--配置
const routes = [
 ...
  {
    path: '/detail/:id',      //配置
    name: 'detail',
    component: () => import('@/views/Detail.vue')
  },
]

//3.detail.vue--使用
<template>
    <div>
        详情页
    </div>
</template>

<script>
    export default {
        name:"Detail",
        mounted(){
            console.log(this.$route.params)   //接收
        }
    }
</script>

```

### 四.keep-alive

包裹路由-组件。缓存组件，之后组件不会被销毁。组件对应的生命周期函数不会重新触发。

```javascript
//App.vue
  <keep-alive>
         <router-view/>
   </keep-alive>
```

#### 4-1使用activated(){}替代mounted(){}发送请求

```javascript
export default {
        name:"Detail",
        data(){
            return{
                imgUrl:""
            }
        },
        mounted(){},
        activated(){
            var id=this.$route.params.id;
            var url=`http://192.168.14.49:5000/playlist/detail?id=${id}`;
            this.axios.get(url).then(res=>{
               this.imgUrl=res.data.playlist.creator.avatarUrl;
            })
            console.log("发送detail-http")
        },
```

#### 4-2还可以使用exclude

```javascript
 //exclude：不包含哪一个.vue页面,一定要给组件name属性
<script>
    export default {
        name:"Detail",   //name名必须加
        data(){
            return{
                imgUrl:""
            }
        },
        mounted(){
            var id=this.$route.params.id;
            var url=`http://192.168.14.49:5000/playlist/detail?id=${id}`;
            this.axios.get(url).then(res=>{
               this.imgUrl=res.data.playlist.creator.avatarUrl;
            })
            console.log("发送detail-http")
        },
    }
</script>

//App.vue
<keep-alive exclude="Detail">   
          <router-view/>
</keep-alive>
```

### 五.动态组件

```javascript
//1.定义组件
//2.引入组件和data关联
<template>
  <div>
    <button @click="handleToggle">toggle</button>
    <component :is="isToggle?one:two"></component>
  </div>
</template>

<script>
import One from "@/components/One.vue";
import Two from '@/components/Two.vue'
export default {
  data() {
    return {
      isToggle:false,
      one: "One",
      two:"Two"
    };
  },
  components: {
    One,
    Two
  },
  methods:{
      handleToggle(){
          this.isToggle = !this.isToggle
      }
  }
};
</script>
```

### 六.vant-ui的局部导入

#### 6-1安装依赖

```javascript
yarn add vant babel-plugin-import
```

#### 6-2配置babel.config.js

```javascript
{
  "plugins": [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}
```

#### 6-3在main.js中引入

```
import { Button } from 'vant';
Vue.use(Button)
```

#### 6-4使用

```javascript
 <van-button type="default">默认按钮</van-button>
```

作业

```
https://douban.chengbenchao.top/
1.组件
2.执行上拉刷新
3.动态路由
4.keep-alive
```

