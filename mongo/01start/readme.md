一、启动数据库

```javascript
mongo
```

二、基本命令

```javascript
show dbs //查看数据库
use student //切换到student库
show collections //查看表

//增删改查
db.admin.insert()
db.admin.remove()

//修改 只修改一行数据中的某一个字段
db.admin.update({age:20},{$set:{age:19}})

//完全替换
db.admin.update({age:20},{age:30})

//查询
db.admin.find({name:"lisi"})

```

三、node.js连接mongoDB数据库

3-1 安装mongoose

```javascript
yarn add mongoose
```

3-2 导入mongoose

```javascript
const mongoose = require('mongoose');
```

3-3 mongoose连接数据

```javascript
//1.连接数据库
mongoose.connect( 'mongodb://127.0.0.1:27017/student', {useNewUrlParser: true});

//2.定义Schema映射数据库中的表
var AdminSchema = new mongoose.Schema({
    name:String,
    age:Number
})

//3.创建模型,操作数据库
var Admin = mongoose.model('Admin',AdminSchema,'admin');

//4.查询
Admin.find({}).then(data=>{
    console.log(data)
})
```

四、拆分models

```javascript
//models/db.js
const mongoose = require('mongoose');
mongoose.connect( 'mongodb://127.0.0.1:27017/student', {useNewUrlParser: true},(err)=>{
    if(err){throw err};
    console.log("数据库连接成功")
});
module.exports = mongoose;
//models/admin.js
const mongoose = require('./db');
var AdminSchema =new mongoose.Schema({
    name:String,
    age:Number
})
var Admin = mongoose.model('Admin',AdminSchema,'admin');
module.exports = Admin;
```

五、跨域

```javascript
yarn add koa2-cors
const cors = require("koa2-cors");
app.use(cors())
```

