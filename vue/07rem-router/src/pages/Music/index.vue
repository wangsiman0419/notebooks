<template>
  <div>
      music
      <p>{{"hello world" | format()}}</p>
      <bs-btn></bs-btn>
  </div>
</template>

<script>
import BsBtn from '@/components/BsBtn'
export default {
   name:"Music",
   components:{
       BsBtn
   }
}
</script>

<style>

</style>