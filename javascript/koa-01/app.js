const koa=require("koa");
const axios=require("axios")
const app=new koa();
app.use(async ctx=>{
    var url="https://music.aityp.com/song/url?id=35625825";
    var data=await axios.get(url);
    console.log(data)
    ctx.body=data.data
})
app.listen(8080)