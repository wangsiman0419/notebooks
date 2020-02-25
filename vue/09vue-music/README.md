### 一.动画

#### 1.1动画原理

![](E:\notebook\notebooks\vue\09vue-music\src\assets\images\1.png)

```javascript
三个状态：v-enter:动画起始的状态   v-enter-active：监听整个动画的执行过程  v-enter-to:最终要达到的状态 
enter表示从隐藏到显示
Tip:重点关注v-enter
leave表示从显示到隐藏
Tip:重点关注v-leave-to
v-enter-active,v-leave-active监听动画的执行过程
```

```javascript
 <transition>
        <p v-if="isShow">hello world</p>
    </transition>
    <button @click="handleClick">toggle</button>
 </transition>
 <script>
export default {
  name: 'home',
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    handleClick(){
      this.isShow=!this.isShow
    }
  }
}
</script>
```

css样式

```javascript
.v-leave-active,.v-enter-active{
    transition:opacity 4s;
}
.v-leave-to,.v-enter{
    opacity:0
}
```

#### 1.2动画封装成插槽

```javascript
//1.封装
<template>
     <transition>
        <slot name="fade"></slot>
    </transition>
</template>

<script>
    export default {
        name:"Fade"
    }
</script>

<style scoped>
.v-leave-active,.v-enter-active{
     transition: opacity 2s;
   }
.v-enter,.v-leave-to{
     opacity: 0;
   }
</style>
```

```javascript
//2.使用
  <fade>
       <h1 slot="fade" v-show="isShow">This is an about page</h1>
    </fade>

//完整代码
<template>
  <div class="about">
      <fade>
          <h1 slot="fade" v-show="isShow">This is an about page</h1>
       </fade>
  </div>
</template>
<script>
import Fade from '../components/Fade'
export default {
  name:"About",
  data(){
    return{
      isShow:true
    }
  },
  components:{
      Fade
  },
}
</script>
<style scoped>


</style>
```

### 三.三元表达式

```javascript
<img :src="isPlay?require('@/assets/images/play.png'):require('@/assets/images/pause.png')" @click="handlePlay" alt="">
    <script>
import Fade from "../components/Fade"
export default {
  components:{
    Fade
  },
  data(){
    return{
      isShow:true,
      isPlay:false
    }
  },
  methods:{
    handlePlay(){
      this.isPlay=!this.isPlay
    }
  }
}
</script>
```

### 四.获取DOM

```javascript
<template>
    <div>
        <p @click="getDom" ref="music">音乐播放</p>
        <img :src="isPlay?require('@/assets/images/play.png'):require('@/assets/images/pause.png')"
        @click="handlePlay" alt="">
    </div>
</template>

<script>
    export default {
        name:"Audio",
        data(){
            return{
               isPlay:false
       }
      },
        methods:{
            handlePlay(){
            this.isPlay=!this.isPlay
            },
            getDom(){
                console.log(this.$refs.music)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
```

### 五.音乐播放

```javascript
<template>
    <div>
        <p @click="getDom" ref="music">音乐播放</p>
        <img :src="isPlay?require('@/assets/images/play.png'):require('@/assets/images/pause.png')"
        @click="handlePlay"/>
        <audio :src="playUrl" controls ref="audio"
        @play="onPlay" @pause="onPause"></audio>
    </div>
</template>

<script>
export default {
    name:"Audio",
    data(){
        return{
            isPlay:false,
            playUrl:"http://m10.music.126.net/20191113111139/3518f37fdcbee4b02601a04edda5da83/ymusic/e54a/90bc/8f90/29b0d3a279414b2f9a1fd78c64a907cc.mp3"
    }
    },
    methods:{
        handlePlay(){
            if(this.isPlay){
                this.$refs.audio.pause()
                this.isPlay=false
            }else{
                this.$refs.audio.play()
                this.isPlay=true
            }
        },
        getDom(){
            console.log(this.$refs.music)
        },
        /* 监听音乐播放状态 */
        onPlay(){
            this.isPlay=false
        },
        /* 监听音乐暂停状态 */
        onPause(){
            this.isPlay=true
        }
    }
}
</script>

<style  scoped>
audio{
    visibility: hidden;
}
</style>
```

### 六.数据mock

#### 1.在线接口管理平台mock  yapi

#### 2.vue-cli mock

```
https://www.html.cn/archives/10066
```

