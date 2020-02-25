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