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
import axios from "axios"
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
    },
    mounted(){
        axios.get("/cart").then(res=>{
            console.log(res)
        })
    }
}
</script>

<style  scoped>
/* audio{
    visibility: hidden;
} */
</style>