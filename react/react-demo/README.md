### 一.组件

```
//Tips:每个页面级的组件第一行必须加
import React from 'react'
```

### 二.无状态组件

```js
//就是一个函数，无状态组件中不能写事件，不能对
import React from 'react';
function App() {
  return (
    <div className="App" >
       hello world
    </div>
  );
}
export default App;
```

### 三.有状态组件

```js
import React from 'react';
class App extends React.Component{
    //数据放在构造函数的state属性中
  constructor(props){
    super(props);
    this.state={
      msg:"hello world"
    }
  }
  render(){
    return(
        //使用数据   {this.state.msg}
      <div>{this.state.msg}</div>
    )
  }
}
export default App;
```

### 四.事件

#### 4.1改变this指向问题

```js
//1.改变事件内部this指向的问题  bind(this)
render(){
    return(     //执行事件时必须要加上bind   bind(this)改变this关键字的指向问题
      <div onClick={this.handleClick.bind(this)}>{this.state.msg}</div>
    )
  }  //事件直接写
  handleClick(){
    this.setState({
      msg:"change"
    })
  }
```

```js
//2.使用箭头函数  改变this指向问题
  render(){
    return(
      <div onClick={this.handleClick}>{this.state.msg}</div>
    )
  }
  handleClick=()=>{
    this.setState({
      msg:"change"
    })
  }
```

#### 4.2事件传参

```js
//Tips:传递参数一定要加bind(this,params)   params:要传递的参数
render(){
    return(
      <div onClick={this.handleClick.bind(this,"101")}>{this.state.msg}</div>
    )
  }
   handleClick=(id)=>{
    console.log(id)
    this.setState({
      msg:"change"
    })
  }
```

