//index.js
//获取应用实例
const IndexModel = require('../../models/IndexModel');
Page({
  data:{
    playlists:[],
    banners:[],
    albums:[]
  },
  async onLoad(){
    var cat = await IndexModel.getCatChina();
    var {playlists} = cat.data;
    var banner = await IndexModel.getBanner();
    var {banners} = banner.data;
    var newData = await IndexModel.newMusic();
    var {albums} = newData.data;
    console.log(albums)
    this.setData({
      playlists,
      banners,
      albums
    })
  }
})
