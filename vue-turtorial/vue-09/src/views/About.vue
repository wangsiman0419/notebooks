<template>
  <div class="about">
    <p>{{ title }}</p>
    <img :src="pic" alt="" />
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      title: "",
      pic: "",
    };
  },
  mounted() {
      var url = "https://douban-api.uieee.com/v2/movie/subject/30221757";
      this.axios.get(url).then(res => {
        this.title = res.data.title;
        this.pic = res.data.images.small;
      });
  }
};
</script>
<style scoped>
</style>
