//index.js
//获取应用实例
const http=require('../../models/http');
Page({
  data: {
   offset:0,
   playlists:[]
  },
  onLoad:async function(){
    var res=await http.getCatData(this.data.offset)
    console.log(res)
    var playlists=res.data.playlists;
    this.setData({
      playlists
    })
    console.log(playlists)
  },
  /* 到达底部触发 */
 onReachBottom:async function(){
   var offset=this.data.offset;
   offset+=30;
   var res=await http.getCatData(offset)
   var playlists=res.data.playlists;
   this.setData({
     offset,
     playlists:this.data.playlists.concat(playlists)
   })
 }
})
