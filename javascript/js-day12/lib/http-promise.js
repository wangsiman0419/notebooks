var baseUrl="https://music.aityp.com/";
function http(url){
    return new Promise((resolve,reject)=>{
        $.ajax({
            url:baseUrl+url,
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
/* 小程序中 */
function Http(url){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: baseUrl+url,
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                resolve(res)
            },
            fail: (err)=>{
                reject(err)
            }
        });
    })
}