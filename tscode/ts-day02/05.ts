//没有返回值时要加上void
function go():void{
    console.log('hello world')
}
go()
//有返回值时要在后面返回相同类型的返回值
function test():number{
    console.log("a");
    return 10;
}