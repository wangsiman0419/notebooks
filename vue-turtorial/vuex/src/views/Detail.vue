<template>
    <div>
        <h2>城市列表页</h2>
        <router-link to="/films/nowPlaying" tag="button" v-for="item of cities" :key="item"
        @click.native="handleClick(item)">
             {{item}}
        </router-link>
    </div>
</template>

<script>
    export default {
        name:"Detail",
        data(){
            return{
                cities:["上海","北京","深圳","广州"]
            }
        },
        methods:{
            handleClick(city){
                /* this.$store.dispatch  向vuex派发一个事件，同时传递一个参数 */
               console.log(city)
               this.$store.dispatch("changeCity",city)
            }
        }
    }
</script>

<style  scoped>

</style>