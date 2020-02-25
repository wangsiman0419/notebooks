<template>
  <div class="home">
    <Home></Home>
    <div class="wrap">
      <div class="link">
         <router-link tag="p" to="/">首页</router-link> >
         <router-link tag="p" to="/cart">商品详情</router-link>
      </div>
      <div class="top">
          <p>排序:<el-button class="default" @click="handleDefault">默认</el-button><span class="prices" @click="handleSort">价格<i class="iconfont ">{{(sortFlag==1)?'&#xe632;':'&#xe631;'}}</i></span></p>
      </div>
      <div class="search">
        <h3>price</h3>
        <div v-for="item of searchPrice" :key="item.id" class="search-price">
          <p @click="handlePrice(item.gt, item.lt)">
            {{ item.gt }}--{{ item.lt }}
          </p>
        </div>
      </div>
      <div class="content">
        <div v-for="item of goodsList" :key="item.productName" class="list">
          <img :src="item.productImage" alt="" />
          <p class="productname">{{item.productName}}</p>
          <p class="price">￥{{ item.salePrice }}</p>
          <button @click="addCart(item.productId)">加入购物车</button>
        </div>
      </div>
      <el-pagination  @current-change="getPage" background layout="prev, pager, next" :total="total"></el-pagination>
      </div>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
export default {
  name: "home",
  data() {
    return {
      searchPrice: [
        { gt: 0, lt: 100, id: 1001 },
        { gt: 100, lt: 500, id: 1002 },
        { gt: 500, lt: 1000, id: 1003 },
        { gt: 1000, lt: 5000, id: 1004 },
        { gt: 5000, lt: 10000, id: 1005 }
      ],
      total:30,
      limit:8,
      start:0,
      goodsList: [],
      sortFlag:1
    };
  },
  mounted() {
    this.initData()
  },
  methods: {
   handlePrice(gt,lt){
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
    getPage(page){
      /* page=1  start=0
         page=2  start=8
         page=3  start=16
       */
     this.start=(page-1)*this.limit;
     this.initData()
    },
    initData(){
        this.$http.get("/goods/list",{params:{start:this.start,limit:this.limit}}).then(res => {
          if(res.data.code==200){
              this.goodsList = res.data.result;
              this.total=Math.ceil(res.data.total/this.limit)*10;
          }
        });
    },
    compareUp(value){
      return (a,b)=>{
        return a[value]-b[value]
      }
    },
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
    handleDefault(){
      this.initData()
    },
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
  },
  components:{
    Home
  },
  /* 路由守卫 */
  beforeRouteLeave(to,from,next){
    this.$http('/users/checkLogin').then(res=>{
      if(res.data.code==200){
        next()
      }else{
        this.$message({
          message:res.data.msg,
          duration:1000
        })
      }
    })
  }
};
</script>
<style scoped>
.link{
  display: flex;
  font-weight: bold;
  padding-bottom: 30px;
  padding-top: 10px;
}
.link p{
  margin-right: 10px;
}
.link p:last-child{
   margin-left: 10px;
}
.home{
  height:800px;
}
img {
  width: 150px;
}
.top{
  line-height: 40px;
  background: #fff;
  text-align: right;
  margin-bottom: 10px;
}
.content {
  display: flex;
  flex-wrap: wrap;
  padding-left: 95px;
}
.home .search {
  width: 150px;
  padding-left: 60px;
  padding-top: 10px;
  float: left;
  text-align: center;
}
.list {
  width: 160px;
  height: 290px;
  margin: 10px 10px;
  background: #fff;
  border: 1px solid #e9e9e9;
}
.price {
  color: #d4434a;
}
.content button {
  width: 130px;
  color: #d4434a;
  background: rgb(247, 244, 244);
  border: none;
  border: 1px solid #d4434a;
  outline: none;
  margin-left: 10px;
  font-weight: bold;
  line-height: 30px;
  margin: 10px 10px;
}
.content button:hover{
  background: #d4434a;
  color: #fff;
}
.el-pagination{
  text-align: center;
  position: absolute;
  bottom: 10px;
  left: 45%;
}
.prices{
  padding: 0 10px;
  cursor: pointer;
}
.default{
  padding: 0 10px;
  color: #F07A23;
}
.wrap{
    padding: 0 150px;
    background: #F5F7FC;
    height: 800px;
    position: relative;
}
p{
  margin: 0;
}
.productname{
  text-align: center;
  margin: 20px 0;
}
.search-price{
  cursor: pointer;
}
.search-price p{
  margin:20px 0;
}
</style>
