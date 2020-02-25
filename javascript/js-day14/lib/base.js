function onReachBottom() {
    var dh = $(document).height();  //页面高度
    var sh = $(window).scrollTop(); //滚动高度
    var wh = $(window).height();    //窗口高度
    return (Math.ceil(sh + wh) == dh) ? true : false;
}