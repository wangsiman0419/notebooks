### mongoose

```
show dbs   //显示所有的数据库
use shop   //切换数据库
show collections  //查询数据库中的表
```

```
db.goods.find({})    //查询表中的所有数据
//只查第一条和第二条  skip  limit
//skip是下标  limit查询多少条
db.goods.find({}).skip(1).limit(2)
```

```js
//升序sort({condition:1}) 
根据价格大小排序  
db.goods.find().sort({price:1})
//降序sort({condition:-1})  
db.goods.find().sort({price:-1})
```

```js
//&gt  大于某个数
find({condition:{$gt:}})
//选择price大于1000的商品
db.goods.find({price:{$gt:1000}})

//&gte   //大于等于
//选择price大于等于2000的商品
db.goods.find({price:{&gte:2000}})
//&lt    //小于某个数

//&lte   //小于等于

//选择price大于400,小于2000的商品
db.goods.find({price:{$gt:400,$lt:2000}})
```

```
//统计数据,一共有多少条  count()
db.goods.find().count()
```

![1575255728912](C:\Users\WANGSI~1\AppData\Local\Temp\1575255728912.png)



### 二.内嵌数组的添加和删除，更新

```
//carts
{
    userId:1001,
    cartList:[
        {id:100,name:"book"}
    ]
}
```

```
//$push 向carts这张表中的cartList添加一条数据
db.carts.update({userId:"1001"},{$push:{cartList:{id:"101",name:"iphone"}}})
```

```
//$pull 删除 将carts这张表中的cartList中id等于100的数据删除
db.carts.update({userId:"1001"},{$pull:{cartList:{id:"100"}}})
```

```
//$set  更新的操作
db.carts.update({userId:1001},"cartList.id":100},{$set:{"cartList.$.name":"xiaomi"}})
```

