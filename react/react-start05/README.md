### 一.ant

##### 应用商店装reactjs code snippets  快捷键  rcc

#### 1-1.安装ant

```
yarn add antd
```

#### 1-2.导入组件

```js
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
//样式一定要配置在入口文件中
import 'antd/dist/antd.css'
ReactDOM.render(<App />, document.getElementById('root'));

```

```js
//在app.js中使用  在需要使用组件的页面引入即可
import {Button} from 'antd';
//使用
<Button></Button>
```

### 二.input类似于vue中v-model

```js
//value是可变的，input要加上onChange事件
 <input type="text" value={this.state.userName} onChange={this.handleChange}/>

handleChange=(e)=>{
    this.setState({
      userName:e.target.value
    })
  }
```

### 三.react-touter

```
//3-1安装依赖
yarn add react-router-dom
```

```js
//3-2配置路由  app.js
import React, { Component } from 'react';
//要先导入
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from './views/Home'
import About from './views/About'
import Detail from './views/Detail'
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    //如果要使用link，要在router里面使用
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    {/* exact：路由的严格匹配，只有路径为/才会加载对应的路由 */}
                    {/* switch:只有对应的路由才会被加载 */}
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/detail" component={Detail}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}
export default App;
```

### 四.路由跳转和get传值

#### 4-1link跳转

```js
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd'
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            id:1001
        }
    }
    render() {
        return (
            <div>
                主页
                <Link to={`/detail?id=${this.state.id}`}>    //传值
                    <Button>detail</Button>
                </Link>
            </div>
        );
    }
}

export default Home;
```

#### 4-2事件跳转 this.props.history.push()

```js
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            id:1001
        }
    }
    render() {
        return (
            <div>
                主页
                <Button onClick={this.handleToggle}>detail</Button>
            </div>
        );
    }
    handleToggle=()=>{
        this.props.history.push(`/detail?id=${this.state.id}`)
    }
}
```

#### 4-3query-string解析get传值

因为传过来的是字段，所以要安装query-string将字段转成对象   {id=123456}

```
//1.安装
yarn add query-string
```

```js
//在detail页面接收
   this.props.location.search


import React, { Component } from 'react';
import queryString from 'query-string'
class Detail extends Component {
    render() {
        return (
            <div>
                详情页
            </div>
        );
    }
    /* cdm */
    componentDidMount() {
        var url=this.props.location.search;   
        console.log(queryString.parse(url))
    }
}
```

### 五.动态路由

```js
//5-1配置动态路由  app.js
<Route path="/detail/:id" component={Detail}></Route>
```

```js
//5-2跳转
<Button onClick={this.handleToggle}>detail</Button>

handleToggle=()=>{
        this.props.history.push(`/detail/${this.state.id}`)
    }
```

```js
//5-3详情页接收  this.props.match.params
 componentDidMount() {
     console.log(this.props.match.params.id)   //收到的是字符串
 }
```

