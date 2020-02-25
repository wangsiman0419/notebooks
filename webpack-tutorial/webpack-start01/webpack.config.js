const path=require("path")
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const isDev=process.env.NODE_ENV==='development';
const {VueLoaderPlugin}=require('vue-loader');
const webpack=require('webpack');
const config={
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:"[name]-[hash]-bundle.js",
        path:path.join(__dirname,"dist")
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            // 这里定义在js中可以引用用于判断当前开发环境
            'process.env':{
                NODE_ENV:isDev?'"development"':'"production"'
            }
        })
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
            }
        ]
    },
    mode:"development"
}
if(isDev){
    config.devtool = '#cheap-module-eval-source-map',
    config.devServer={
        port:8080,
        host:'localhost',
        overlay:{
            errors:true
        },
       compress:true
    },
    config.plugins.push(
        // 作用：HMR插件将HMR Runtime代码嵌入到bundle中，能够操作APP代码，完成代码替换
       new webpack.HotModuleReplacementPlugin(),   
       // 作用：跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误。
       new webpack.NoEmitOnErrorsPlugin()                
   )
}
module.exports=config