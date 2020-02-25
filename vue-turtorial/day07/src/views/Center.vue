<template>
    <div>
     个人中心
     <router-link to="/detail/3232387" tag="button">跳转到detail</router-link>
     <button @click="handleChange">toggle</button>
     <keep-alive>
          <component :is="isToggle?one:two" ></component>
     </keep-alive>
    
    </div>
</template>

<script>
import One from '@/components/One.vue'
import Two from '@/components/Two.vue'
    export default {
        name:"Center",
        data(){
            return{
                one:"One",
                two:"Two",
                isToggle:false
            }
        },
        mounted(){
            console.log("https请求")
        },
        components:{
            One,
            Two
        },
        methods:{
            handleChange(){
               this.isToggle=!this.isToggle
            }
        }
    }
</script>

<style  scoped>

</style>