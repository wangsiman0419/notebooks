//index.js
//获取应用实例
const http = require('../../models/http');
Page({
  data: {
    movies: [],
    total: "",
    isEnd:false
  },
  onLoad() {
    http.getTop250({ start: 0 }).then(res => {
      var { subjects, total } = res.data;
      this.setData({
        movies: subjects,
        total
      })
    })
  },
  onReachBottom() {
    var length = this.data.movies.length;
    if (length < this.data.total) {
      http.getTop250({ start: length }).then(res => {
        var { subjects } = res.data;
        this.setData({
          movies: [...this.data.movies, ...subjects]
        })
      })
    }else{
      console.log("已经到达底部")
      this.setData({
        isEnd:true
      })
    }
  },
  onPullDownRefreash(){
    http.getTop250({start:0}).then(res=>{
      var { subjects, total } = res.data;
      this.setData({
        movies: subjects,
        total
      })
    })
  }
})
