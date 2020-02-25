import React, { Component } from 'react';
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
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    {/* exact：路由的严格匹配，只有路径为/才会加载对应的路由 */}
                    {/* switch:只有对应的路由才会被加载 */}
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/detail/:id" component={Detail}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;