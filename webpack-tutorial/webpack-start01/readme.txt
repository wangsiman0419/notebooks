һ.init-wepback
npm init -y   //���ֿ���npm�Ĳֿ�
npm i webpack webpack-cli -S

1.1�½�webpack.config.js
1.2����
����"text"����Ϊ
<scripts>
   "build":"webpack --config webpack.config.js"

1.3���δ��
 
npm run build

��.����plugins
npm i html-webpack-plugin -S
npm i clean-webpack-plugin -S

clean-webpack-plugin:ÿ�δ���Ȱ�dist�ļ����µĶ�����������´��һ��
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
 plugins:[
        new CleanWebpackPlugin(),
      ],


html-webpack-plugin
//��distĿ¼���Զ�����html,�ô����js�ļ��Զ�����
  plugins:[
        ...
        new HtmlWebpackPlugin({
            title:"webpack����"
        }),
    ],

��.webpack-server
npm i webpack-dev-server -S
npm i cross-env -S

3.1����package.json�ļ�
"scripts": {
    "build": "cross-env NODE_ENV=production webpack --config webpack.config.js",
    "serve":"cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js"
  },


��.loader
npm i style-loader css-loader -S

vue:
npm i vue-loader vue vue-template-compiler -S
4.1����pack
4.2����src/index.js
console.log("�Һ��ҵ����")
import '../assets/index.css'
import Vue from 'vue'
import App from './App.vue'
const root=document.createElement("div");
document.body.append(root);
new Vue({
    render:h=>h(App)
}).$mount(root)










���������п�����ͬ��Ŀ¼����Ҫ��./


 filename:"[hash]-bundle.js",//Ϊ�˱����ظ�������hash�����������һ���ֶ�
const {CleanWebpackPlugin}=require('clean-webpack-plugin');//�����֮ǰ�Ĵ���ļ������´��

npm i

�����
 

 
