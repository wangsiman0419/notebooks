<template>
  <div id="app">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="formInline.age" placeholder="年龄"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleAdd">添加</el-button>
      </el-form-item>
    </el-form>
    <home-table :data="arr" @deleteItem="handleDelete"></home-table>
  </div>
</template>
<script>
import HomeTable from './components/HomeTable.vue'
export default {
  data() {
    return {
      formInline: {
        name: "",
        age: ""
      },
      arr: [{name:"张三",age:18}]
    };
  },
  methods: {
   handleAdd() {
      this.arr.push(this.formInline);
    },
    handleDelete(index){
      this.arr.splice(index,1)
    }
  },
  components:{
    HomeTable
  }
};
</script>
