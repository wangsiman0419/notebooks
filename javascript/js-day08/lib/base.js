function onReachBottom(){
    var dh=document.documentElement.scrollHeight;   //获取滚动区域的高度
    var sh=Math.ceil(document.documentElement.scrollTop);
    var ah=document.documentElement.clientHeight;
    return sh+ah==dh?true:false;
}