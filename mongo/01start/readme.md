һ���������ݿ�

```javascript
mongo
```

������������

```javascript
show dbs //�鿴���ݿ�
use student //�л���student��
show collections //�鿴��

//��ɾ�Ĳ�
db.admin.insert()
db.admin.remove()

//�޸� ֻ�޸�һ�������е�ĳһ���ֶ�
db.admin.update({age:20},{$set:{age:19}})

//��ȫ�滻
db.admin.update({age:20},{age:30})

//��ѯ
db.admin.find({name:"lisi"})

```

����node.js����mongoDB���ݿ�

3-1 ��װmongoose

```javascript
yarn add mongoose
```

3-2 ����mongoose

```javascript
const mongoose = require('mongoose');
```

3-3 mongoose��������

```javascript
//1.�������ݿ�
mongoose.connect( 'mongodb://127.0.0.1:27017/student', {useNewUrlParser: true});

//2.����Schemaӳ�����ݿ��еı�
var AdminSchema = new mongoose.Schema({
    name:String,
    age:Number
})

//3.����ģ��,�������ݿ�
var Admin = mongoose.model('Admin',AdminSchema,'admin');

//4.��ѯ
Admin.find({}).then(data=>{
    console.log(data)
})
```

�ġ����models

```javascript
//models/db.js
const mongoose = require('mongoose');
mongoose.connect( 'mongodb://127.0.0.1:27017/student', {useNewUrlParser: true},(err)=>{
    if(err){throw err};
    console.log("���ݿ����ӳɹ�")
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

�塢����

```javascript
yarn add koa2-cors
const cors = require("koa2-cors");
app.use(cors())
```

