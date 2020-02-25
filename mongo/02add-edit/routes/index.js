const Router=require('koa-router');
const router=new Router();
const AdminModel=require('../models/admin')
// 查询
router.get('/api',async ctx=>{
    // var data=await AdminModel.find({});
    // ctx.body=data;
    var {offset,limit}=ctx.request.query;
    var data=await AdminModel.find({}).skip(Number(offset)).limit(Number(limit));
    ctx.body=data
})
router.get('/admin',async ctx=>{
    var data=await AdminModel.find({})
    /* 渲染index页面 */
    await ctx.render('index',{data})   
})
//删除
router.get('/delete',async ctx=>{
    //接收上一个页面传过来的id
    var {id}=ctx.query; 
    await AdminModel.remove({_id:id})
    ctx.redirect('/admin')
})
//修改
router.get('/edit',async ctx=>{
    var item=ctx.query.item;
    var data=JSON.parse(item)
    console.log(data)
    await ctx.render('edit',{data})
})
router.post('/doEdit',async ctx=>{
    var {_id,name,age}=ctx.request.body;
    age=parseInt(age);
    await AdminModel.updateOne({_id},{name,age});
    ctx.redirect('/admin')
})
//增加
router.get('/add',async ctx=>{
    await ctx.render('add')
})
router.post('/doAdd',async ctx=>{
    var {name,age}=ctx.request.body;
    var data=new AdminModel({
        name,
        age:parseInt(age)
    })
    await data.save();
    ctx.redirect('/admin')
})
module.exports=router;