// pages/test/test.js
const HTTP=require('../../models/http.js')
Page({
  data: {
    musics: []
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onShow:async function (options) {
    var res=await HTTP.getSearch("你");
    var songs=res.data.result.songs;
    var musics=[];
    for(let i=0;i<songs.length;i++){
      var obj={};
      var minute=0;
      if(Math.floor(songs[i].duration/1000/60)<10){
        minute="0";
      }
      var second=0;
      if(Math.floor(songs[i].duration/1000%60)>=10){
        second="";
      } 
      obj.name=songs[i].name;
      obj.id=songs[i].id;
      var data=await HTTP.getDetail(songs[i].id);
      obj.picUrl=data.data.songs[0].al.picUrl;
      obj.artistName=songs[i].artists[0].name;
      obj.time=minute+Math.floor(songs[i].duration/1000/60)+":"+second+Math.floor(songs[i].duration/1000%60);
      obj.musicUrl=`https://music.163.com/song/media/outer/url?id=${songs[i].id}`;
      musics.push(obj)
    }
    console.log(musics.length)
    this.setData({
      musics
    })
  }    
  
});