//index.js
//获取应用实例


Page({
  data: {
   
  },
  onLoad: function () {
      console.log("index")
  },
  onShow(){
   let storageInfo = wx.getStorageSync("isPlay");
   console.log(storageInfo);
   console.log(getApp())
  },
  handleClick(){
    wx.navigateTo({
      url: '/pages/detail/detail?',
    })
  }
  
})
