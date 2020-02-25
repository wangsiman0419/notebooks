一、安装依赖模块

```javascript
 yarn add mongoose koa koa-router art-template koa-art-template
```

二、mongoose连接数据

//新建一个index.js

```javascript
//1.导入mongoose
const mongoose=require('mongoose')
//2.连接数据库
mongoose.connect( 'mongodb://127.0.0.1:27017/student', {useNewUrlParser: true},(err)=>{
     if(err){throw err};
     console.log("数据库连接成功")
});
//3.定义schema和数据库中的表映射
var AdminSchema=mongoose.Schema({
    name:String,
    age:Number
})
//4.定义模型，操作数据库
var Admin=mongoose.model('Admin',AdminSchema,'admin');
//5.查询数据库
Admin.fin({}).then(res=>{
console.log(res)
})
```

查询数据

```javascript
 AdminModel.find({}).then(res=>{
    console.log(res)
})
```



增加一条数据

```javascript
var data=new AdminModel({
    name:'koa',
    age:4
})
data.save(err=>{
    if(err){throw err}
}) 
```

修改数据

```javascript
AdminModel.updateOne({name:'vue'},{name:'koa'},(err,doc)=>{
   if(err){throw err}
    else{console.log(doc)}
 })
```

三、分拆路由

新建一个文件routes/index.js

routes/index.js

```javascript
const Router=require('koa-router');
const router=new Router();
const AdminModel=require('../models/admin')
router.get('/api',async ctx=>{
    var data=await AdminModel.find({})
    ctx.body=data
})
router.get('/admin',async ctx=>{   //显示前台数据
    await ctx.render('index')
})
module.exports=router;
```

index.js

```javascript
const koa=require('koa');
const app=new koa();
const render = require("koa-art-template");
const router=require('./routes')
const path=require('path')
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html', //后缀也可以写成.art
    debug: process.env.NODE_ENV !== 'production'
});
app.use(router.routes())
app.listen(8080)
```

新建views/index.html--可以放入前台数据

```
<h1>后台管理系统</h1>

//输入localhost:8080/admin  就可以查看
```

前台渲染数据

views/index.html

```javascript
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
  <body>
   <div class="container">
       //bs3-table
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>编号</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {{each data}}
                <tr>
                    <td>{{$index}}</td>  
                    <td>{{$value.name}}</td>
                    <td>{{$value.age}}</td>
                    <td>
                        <a href="#" class="btn btn-danger">删除</a>
                        <a href="#" class="btn btn-success">编辑</a>
                    </td>
                </tr>
            </tbody>
        </table>
        
    </div>
  </body>
```

没有数据要先在routes/index.js更改一下

```javascript
router.get('/admin',async ctx=>{
    var data=await AdminModel.find({})   //先查询数据
    await ctx.render('index',{data})
})
```

如果要删除数据

routes/index.js

```javascript
router.get('/delete',async ctx=>{
    var {id}=ctx.query;
    await AdminModel.remove({_id:id})
    ctx.redirect('/admin')  //重定向到admin页面
})
```

views/index.html

```javascript
 <td>
    <a href="/delete?id={{@ $value._id}}" class="btn btn-danger">删除</a>
    <a href="#" class="btn btn-success">编辑</a>
 </td>
```

五、解析post提交的数据

```
//1.安装
yarn add koa-bodyparser
//2.导入  在主模块index.js中
const bodyParser=require('koa-bodyparser')
//3.使用
app.use(bodyParser)
//routes/index.js
router.post('/doEdit',async ctx=>{
    ctx.body=ctx.request.body
})
```

5-1post-from提交数据

edit.html

```javascript
//id,name,age
 <form action="/doEdit" method="POST" role="form" name="myfrom">
            <legend>编辑页面</legend>
			//type="hidden"
            <input type="hidden" name="_id" value="{{data._id}}">
            ...
            <button type="submit" class="btn btn-primary">编辑</button>
        </form>
```

限制查询

```javascript
router.get('/api',async ctx=>{
    var {offset,limit}=ctx.request.query;   //接收get传值
    var data=await AdminModel.find({}).skip(Number(offset)).limit(Number(limit));
    ctx.body=data
})
```

