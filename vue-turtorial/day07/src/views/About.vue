<template>
    <div>
       <Dialog v-show="isShow" @del="handleDelete"></Dialog>
       <button @click="toggle" >切换</button>
    </div>
</template>

<script>
import Dialog from '@/components/Dialog.vue'
    export default {
        name:"About",
        data(){
          return{
            isShow:false
          }
        },
        components:{
            Dialog
        },
        methods:{
          toggle(){
            this.isShow=true
          },
          handleDelete(){
            this.isShow=false
          }
        }
    }
</script>

<style  scoped>
.box{
    width: 300px;
    height: 150px;
    background: #fff;
    border: 1px solid #999;
    margin-left: auto;
    margin-right: auto;
}
</style>