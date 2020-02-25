const koa=require('koa');
const app=new koa();
const render = require("koa-art-template");
const router=require('./routes')
const path=require('path')
const bodyParser=require('koa-bodyparser')
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html', //后缀也可以写成.art
    debug: process.env.NODE_ENV !== 'production'
});
app.use(bodyParser())
app.use(router.routes())
app.listen(8080)