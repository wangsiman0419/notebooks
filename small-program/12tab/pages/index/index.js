//index.js
//获取应用实例


Page({
  data: {
    currentIndex:0,
   tabs:['首页','电影','音乐']
  },
  handleItem(event){
    var {index}=event.currentTarget.dataset;
    this.setData({
      currentIndex:index
    })
    console.log(index)
  },
 
  onLoad: function () {
   
  },
 
})
