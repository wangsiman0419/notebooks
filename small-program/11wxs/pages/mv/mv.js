// pages/detail/detail.js
const MvModel=require('../../models/MvModel')
Page({
    data: {
        data:[]
        },
        async onLoad (options) {
            var res=await MvModel.getCat()
             var {data}=res.data;
             console.log(res)
             this.setData({
               data
             })
         },
})