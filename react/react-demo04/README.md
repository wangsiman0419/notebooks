

### 一.react中的样式

```js
//1.在src下新建一个.css文件,可以写样式
//2.在.js文件中导入.css文件,
import './App.css'
//3.App.js，class样式命名要写成className
 <div className="App">
      hello world 
  </div> 
  
 // App.css
  .App{
      color:red;
  }
//每个.js文件对应一个.css样式文件，样式名不要重复。
```

### 二.styled-components

> 避免样式命名空间重复的问题

```js
//1.安装依赖
yarn add styled-components
```

```js
//2.新建一个样式组件components-style/Wrapper.js，导入依赖
import styled from 'styled-components';
const Title = styled.h1`     //样式
font-size:1.5em;
text-align:center;
color:red;
`
export default Title;
```

```js
//3.在主组件中导入Title这个样式组件并使用
import Title from './components-style/Wrapper'
class App extends React.Component{
  render(){
    return(
      <div>
        <Title>react</Title>
      </div>
    )
  }
}
```

#### 2-1嵌套

```js
//Wrapper.js
import styled from 'styled-components';
const Title = styled.h1`
font-size:1.5em;
text-align:center;
color:red;
.one{
    color:pink;
}
h4{
    color:deeppink;
}
&:hover{
    color:yellow
}
`
//&表示的就是h1,就是最外层的元素，不用&也可以达到相同效果
export default Title;

//App.js
class App extends React.Component{
  render(){
    return(
      <div>
        <Title>react
          <p class="one">hello world</p>
          <h4>我喜欢react</h4>
        </Title>

      </div>
    )
  }
}
```



### 二.组件

#### 3-1如何定义一个组件，以及在父组件中的使用

```js
//如果要使用组件，在src下面新建一个components/Title.js
import React from 'react'
class Title extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <h1>{this.props.msg}</h1>
        )
    }
}
export default Title;
export default Header;
            
//在App.js中导入组件
import Title from './components/Title'

//在App.js中使用
   <Title/>
```

#### 3-2父组件给子组件传参

```js
//父组件
import React from 'react';
import Title from './components/Title'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      msg:"hello world"
    }
  }
  render(){
    return(
      <div>
        <Title 
        //1.子组件的属性接收父组件传递过来的方法
        deleteItem={this.handleDelete.bind(this)}
        msg={this.state.msg}></Title>
      </div>
    )
  }
  handleDelete(id){
    console.log(id)
  }
}

export default App;

```

```js
//子组件
import React from 'react'
class Title extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <h1 onClick={this.handleClick.bind(this,'1123')}>{this.props.msg}</h1>
        )
    }
    handleClick=(id)=>{
        //2.子组件调用方法，向父组件传参
        this.props.deleteItem(id)
    }
}
export default Title;
```

### 四.发送请求

#### 4.1直接发送请求

```js
//1.安装依赖
yarn add axios
//2.直接在页面发送请求
//2.1导入axios
import axios from 'axios'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      songs:[]
    }
  }
//2.2发送请求
componentDidMount(){
    var url='http://192.168.14.15:5000/search?keywords=海阔天空'
    axios.get(url).then(res=>{
      var songs=res.data.result.songs;
      this.setState({
        songs
      })
    })
  }
//2.3渲染   使用map
 render(){
  {this.state.songs.map(item=>{
      return (<div key={item.id}>
           <p> {item.name}</p>
           </div>)
    )
  }
  
```

#### 4.2将axios挂载到原型上

```js
//index.js中导入axios
import axios from 'axios'

//挂载到原型上
React.Component.prototype.$http=axios;    

//App.js
componentDidMount(){
    var url='http://192.168.14.15:5000/search?keywords=海阔天空'
    this.$http.get(url).then(res=>{
      var songs=res.data.result.songs;
      this.setState({
        songs
      })
    })
  }
```

