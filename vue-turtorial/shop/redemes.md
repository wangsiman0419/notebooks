## shop

### 一.加载首页数据

```
/goods/list
{
    start:0,
    limit：8
}
```

```js
//1.前端代码实现
//只取八条数据，从第一条开始获取
export default{
    data(){
        return{
            limit:8,
            start:0,
            goodsList:[]
        }
    },
      methods: {
        initData() {   //封装HTTP
          this.$http
            .get("/goods/list", {
              //通过params属性传递参数给后端
              params: { start: this.start, limit: this.limit }
            })
            .then(res => {
              if (res.data.code == 200) {
                this.goodsList = res.data.result;
                this.total = Math.ceil(res.data.total / this.limit) * 10;
              }
            });
        }
      }
    },
      mounted() {   //直接调用
        this.initData();
      },
}
```

````js
//后端业务
router.get('/goods/list', async ctx => {
 var {start,limit}=ctx.query;
 var total=await GoodsModel.find({}).count();
 var data=await GoodsModel.find({}).skip(Number(start)).limit(Number(limit))
 ctx.body={
  code:200,
  msg:"首页数据请求成功",
  result:data,
  //total给前台设置分页用
  total:total
}
})
````

### 二.分页

```js
//前端代码
//taotal  10为1页  30为3页
<el-pagination  
//设置当前处于第几页
@current-change="getPage" 
background layout="prev, pager, next" 
:total="total"></el-pagination>
```

```js
methods:{
   getPage(page){     //获取当前点击的页数
      /* page=1  start=0
         page=2  start=8
         page=3  start=16
       */
      //改变从哪一个位置开始查询
     this.start=(page-1)*this.limit;
     this.initData()
    },
}
```

### 三.价格升序和降序

```js
//对goodsList进行升序和降序
//前端代码
<p>排序:<span class="default">默认</span><span class="prices" @click="handleSort">价格<i class="iconfont ">{{(sortFlag==1)?'&#xe632;':'&#xe631;'}}</i></span></p>
 data(){
    return{
        sortFlag:1
    }
}
methods:{
//升序 
 compareUp(value){
      return (a,b)=>{
        return a[value]-b[value]
      }
    },
 //降序
    compareDown(value){
      return (a,b)=>{
        return b[value]-a[value]
      }
    }, 
    handleSort(){
      this.sortFlag=(this.sortFlag==1)?-1:1;
      if(this.sortFlag==1){
        this.goodsList.sort(this.compareUp("salePrice"))
      }else{
        this.goodsList.sort(this.compareDown("salePrice"))
      }
    },
}
```

### 四.根据价格区间进行排序

```js
 <div v-for="item of searchPrice" :key="item.id" class="search-price">
     <p @click="handlePrice(item.gt, item.lt)">
        {{ item.gt }}--{{ item.lt }}
    </p>
</div>
methods:{
 handlePrice(gt,lt){     //向后台传递gt,lt
      this.$http({
        url: "/goods/price",
        method: "get",
        params: {
          gt,
          lt
        }
      }).then(res => {
        if (res.data.code == 200) {
          this.goodsList = res.data.result;
          this.total=10;
        } else {
          this.goodsList = [];
          this.$message({
            duration: 1000,
            message: res.data.msg,
            type: "warning"
          });
        }
      });
    },
}

//根据价格区间查询
//后台
router.get("/goods/price",async ctx=>{
  var {gt,lt}=ctx.query;
  var data=await GoodsModel.find({salePrice:{$gt:gt,$lt:lt}})
  if(data.length){
    ctx.body={
      code:200,
      msg:"数据请求成功",
      result:data,
      total:data.length
    }
  }else{
    ctx.body = {
      code:1001,
      msg:"没有数据"
    }
  }
})
```

### 五.默认

```js
<el-button class="default" @click="handleDefault">默认</el-button>
```

```
methods:{
    handleDefault(){
         this.initData()
    }
}
```

### 六.添加到购物车

```js
 <button @click="addCart(item.productId)">加入购物车</button>
```

```js
methods:{
    addCart(productId){
      /* post请求方式 */
      this.$http({
        url:"/users/addCart",
        method:"post",
        data:{
          productId
        }
      }).then(res=>{
        this.$message({
          message:res.data.msg,
          code:200,
          duration:1000,
          type:"success"
        })
      })
    } 
}
```

```js
//后端
//添加到购物车
router.get('/',async ctx => {
  var data=await UsersModel.find({})
  ctx.body={
    code:200,
    msg:"请求成功",
    result:data
  }
})
router.post('/addCart',async ctx=>{
  var userId="100000077"
  var {productId}=ctx.request.body;
  console.log(ctx.request.body)
  var goodsData=await GoodsModel.findOne({productId:productId})
  /* productNum  checked */
  var obj=JSON.parse(JSON.stringify(goodsData));
  obj.checked=true;
  obj.productNum=1;
  var userData=await UsersModel.findOne({});
  if(userData.cartList.every(item=>item.productId !=productId)){
    await UsersModel.update({userId:userId},{$push:{"cartList":obj}})
    ctx.body={
      msg:"添加成功",
      code:200
    }
  }else{
    ctx.body={
      msg:"已经添加到购物车",
      code:200
    }
  }
})
```

