const koa=require('koa');
const app=new koa();
const path=require('path')
const Router=require('koa-router');
const cors=require('koa2-cors');
const render=require("koa-art-template");
const AdminModel=require('./models/admin');
const router=new Router();
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html', //后缀也可以写成.art
    debug: process.env.NODE_ENV !== 'production'
});
router.get("/",async ctx=>{
    //get传值
    var {name}=ctx.query;
    var data=await AdminModel.find({name});
    if(data.length>0){
        ctx.body=data;
    }else{
        ctx.body={
            code:200,
            msg:"没有获取数据"
        }
    }
})
router.get('/admin/top',async ctx=>{
    var data=await AdminModel.find();
    await ctx.render('index',{data})
})
router.get('/delete',async ctx=>{
    var {id}=ctx.query;
    await AdminModel.remove({_id:id})
    /* 路由重定向，回到最开始的页面 */
    ctx.redirect('/admin/top')
})
app.use(cors());
app.use(router.routes())
app.listen(8080)