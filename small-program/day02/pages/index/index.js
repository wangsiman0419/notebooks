//index.js
//获取应用实例
/* var b=require('../../models/http.js'); */

Page({
  data:{
     msg:"hello world",
     isFocus:false
  },
  handleClick(){
    this.setData({
      msg:"change"
    })
  },
  handleSubmit(event){
    console.log(event.datail.value)
  }
})

















/* Page({
  data: {
    msg:"hello",
    arr:['html','css','javascript'],
    isFocus:false,
    isPlay:false,
    text:false
  },
  handleConfirm(event){
    console.log(event.detail)
  },
  handleSubmit(event){
    console.log(event.detail.value)
  },
  handleClick(){
    this.setData({
      msg:"change"
    })
  },
  onLoad(){
    console.log(b.a)
    var reqTask = wx.request({
      url: 'http://192.168.14.49:3000/search?keywords=你',
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result)
      }  
    });
  },
  onShow(){
    console.log("show")
  },
  onReady(){
    console.log("ready")
  },
  handleMusic(){
    this.setData({
      isPlay:!this.data.isPlay
    })
  }
})
 */
