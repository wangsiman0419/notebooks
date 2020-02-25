//匿名函数
//要指明类型,调用的时候要与声明类型一致
// var fn=function(name:string,age:number):number{
//     console.log(name,age)
//     return 10;
// }
// fn("wang",20)

//函数的默认参数
var fn=function(name:string,age:number=20):number{
    console.log(name,age)
    return 10;
}
fn("wang")

//可选参数
var fn=function(name:string,age?:number):number{
    console.log(name,age)
    return 10;
}
fn("wang")