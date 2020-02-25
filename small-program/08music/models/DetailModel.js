const HTTP = require('./HTTP');
class DetailModel extends HTTP{
    static getDetailData({id}){
        return this.request({
            url:"playlist/detail",
            data:{
                id
            }
        })
    }
}
module.exports =DetailModel