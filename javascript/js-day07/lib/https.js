var baseUrl='https://music.aityp.com/'
function https({url,type="get",callback}){
    $.ajax({
        url:baseUrl+url,
        type,
        dataType:"json",
        success:res=>{
            callback(res)
        }
    })
}