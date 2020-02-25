找到element ui的官网

```
yarn add element-ui
```

在main.js中引入

```javascript
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
```

如果console.log()报错可以新建一个文件vue.config.js

```javascript
module.exports={
    lintOnSave:false
}
```

alt+shift+f  //快速整理样式

### 增加删除

引用官网的框架

```javascript
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
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="arr" style="width: 540">
      <el-table-column type="index" label="编号"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="age" label="年龄" width="180"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        name: "",
        age: ""
      },
      arr: []
    };
  },
  methods: {
    onSubmit() {
      this.arr.push(this.formInline);
    },
    handleDelete(index, row) {
      this.arr.splice(index,1)
    }
  }
};
</script>

```

![1572850783079](C:\Users\WANGSI~1\AppData\Local\Temp\1572850783079.png)