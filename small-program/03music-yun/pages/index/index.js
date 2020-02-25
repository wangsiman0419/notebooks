//index.js
//获取应用实例
const audio= wx.getBackgroundAudioManager();
Page({
  data: {
    musics:[],
    /* 记录点击之后的id */
    prevId:"",
    /* 记录音乐是否播放 */
    isPlay:false
  },
  onLoad(){
{{}}
  },
  handleSubmit(event){
    var keyword=event.detail.value.keyword;
    wx.request({
      url: `http://192.168.14.49:5000/search?keywords=${keyword}`,
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
        var songs=res.data.result.songs;
        var musics=[];
        songs.forEach(item=>{
          var obj={};
          var minute=0;
          if(Math.floor(item.duration/1000/60)<10){
            minute="0";
          }
          var second=0;
          if(Math.floor(item.duration/1000%60)>=10){
            second="";
          } 
          obj.name=item.name;
          obj.id=item.id;
          wx.request({
            url: `https://music.aityp.com/song/detail?ids=${item.id}`,
            data: {},
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
               obj.picUrl=res.data.songs[0].al.picUrl;
            }
          });
          obj.artistName=item.artists[0].name;
          obj.time=minute+Math.floor(item.duration/1000/60)+":"+second+Math.floor(item.duration/1000%60);
          obj.musicUrl=`https://music.163.com/song/media/outer/url?id=${item.id}`
          musics.push(obj)
        })
        this.setData({
          musics
        })
      }    
    });
  },
  handlePlay(event){
    var {index}=event.currentTarget.dataset;   
    var {id,name,musicUrl}=this.data.musics[index];   
    if(id!==this.data.prevId){
      audio.title=name;
      audio.src=musicUrl;
      this.setData({
        isPlay:true,
        prevId:id
      })
    }else{
       /* 点击之后，将id设置给prevId */
      if(this.data.isPlay){
        audio.pause();
        this.setData({
          isPlay:false
        })
      }else{
        audio.title=name;
        audio.src=musicUrl;
        this.setData({
          isPlay:true
        })
      }
    }
  }
})