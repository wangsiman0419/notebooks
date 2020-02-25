const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const isDev=process.env.NODE_ENV=='development';
const {VueLoaderPlugin} = require('vue-loader');
const config={
    entry:path.join(__dirname,'src/index.js'),
    output:{
        /* 打包的文件名 */
        filename:"[hash]-bundle.js",
        /* 打包文件的输入目录 */
        path:path.join(__dirname,'dist')
    },
    plugins:[
        /* 在dist目录在自动生成html,将打包js插入 */
        new HtmlWebpackPlugin({
            title:"webpack打包"
        }),
        /* 在打包之前将dist目录下的文件清除 */
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },{
                test:/\.vue$/,
                use:'vue-loader'
            },{
                test:/\.png|jpg|gif$/i,
                use:'file-loader'
            }
        ]
    },
    mode:"development"
}
if(isDev){
    config.devServer={
        host:'localhost',
        port:8080,
        /* 错误是否显示在界面上 */
        overlay:{
            errors:true
        },
        /* 是否进行热更新 */
        hot:true
    }
}
module.exports=config;