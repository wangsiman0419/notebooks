let baseUrl="https://music.aityp.com/"
class http{
    request({url,data}){
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:baseUrl+url,
                dataType:"json",
                data,
                type:"get",
                success:res=>{
                    resolve(res)
                },
                error:err=>{
                    reject(err)
                }
            })
        })
    }
}
class HomeModel extends http{
    getBanner(){
        this.request({
            url:"banner"
        })
    }
    getCatChina(){
        return this.request({
            url:"top/playlist",
            data:{
                cat:"华语"
            }
        })
    }
    getNewSong(){
        return this.request({
            url:"top/album"
        })
    }
}