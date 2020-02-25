一.init-wepback
npm init -y   //将仓库变成npm的仓库
npm i webpack webpack-cli -S

1.1新建webpack.config.js
1.2配置
更改"text"属性为
<scripts>
   "build":"webpack --config webpack.config.js"

1.3初次打包
 
npm run build

二.配置plugins
npm i html-webpack-plugin -S
npm i clean-webpack-plugin -S

clean-webpack-plugin:每次打包先把dist文件夹下的东西清除，重新打包一个
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
 plugins:[
        new CleanWebpackPlugin(),
      ],


html-webpack-plugin
//在dist目录下自动生成html,让打包的js文件自动插入
  plugins:[
        ...
        new HtmlWebpackPlugin({
            title:"webpack测试"
        }),
    ],

三.webpack-server
npm i webpack-dev-server -S
npm i cross-env -S

3.1配置package.json文件
"scripts": {
    "build": "cross-env NODE_ENV=production webpack --config webpack.config.js",
    "serve":"cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js"
  },


四.loader
npm i style-loader css-loader -S

vue:
npm i vue-loader vue vue-template-compiler -S
4.1配置pack
4.2配置src/index.js
console.log("我和我的祖国")
import '../assets/index.css'
import Vue from 'vue'
import App from './App.vue'
const root=document.createElement("div");
document.body.append(root);
new Vue({
    render:h=>h(App)
}).$mount(root)










在命令行中开发，同级目录必须要加./


 filename:"[hash]-bundle.js",//为了避免重复，利用hash可以随机生成一个字段
const {CleanWebpackPlugin}=require('clean-webpack-plugin');//先清除之前的打包文件，重新打包

npm i

插件：
 

 
