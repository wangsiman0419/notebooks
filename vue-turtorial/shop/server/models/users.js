var mongoose = require('./db');
var UsersSchema = new mongoose.Schema({
    userId:String,
    userName:String,
    userPwd:String,
    orderList:Array,
    cartList:[
      { 
          productImage:String,     //与goods表相映射
          salePrice:Number,
          productName:String,
          productId:String,
          productNum:Number,
          checked:{
              type:Boolean,
              default:true
          }
      }
    ],
    addressList:Array
})
var Users =  mongoose.model('Users',UsersSchema,'users');
module.exports = Users;