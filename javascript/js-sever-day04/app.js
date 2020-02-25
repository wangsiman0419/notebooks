const koa=require('koa');
const router=require('koa-router')();
const app =new koa();
const bodyParser=require('koa-bodyparser');
app.use(bodyParser());
router.get('/',async ctx=>{
    ctx.set("Access-Control-Allow-Origin","*")
    ctx.body={
        name:"wangsiman",
        age:20,
        sex:"女"
    }
})
   /*  console.log(ctx.request.query)
    var reqData=ctx.request.query;
    if(reqData.username == "admin" && reqData.pwd=="123456"){
        ctx.body="登录成功"
    }else{
        ctx.body="登录失败"
    }
}) */
router.post('/login',async ctx=>{
    ctx.body=ctx.request.body
})
router.get('/registet',async ctx=>{
    console.log(ctx.request.query)
})
app.use(router.routes());
app.listen(8080)