#  wxs

##### 功能:可以在模板中使用javascript方法处理数据

## 1、utils/filter.wxs

```
function format(value){
    if(value.length>6){
      value = value.slice(0,6)+"..."
    }
    return value
}
module.exports = {
  format:format
}
```

## 2、导入wxs

```
<wxs src="../../utils/filter.wxs" module="tools"></wxs>
<text>{{tools.format(data.name)}}</text>
```

## 子组件给父组件传递参数

### 1.在子组件中自定义一个事件

```
methods: {
    handleClick(){
      var id = this.properties.data.id;
      this.triggerEvent("toggle",id)
    }
 }
```

### 2.在父组件中接收事件

```
<v-item bind:toggle="handleToggle"></v-item>
handleToggle(event){
    console.log(event.detail)
}
```