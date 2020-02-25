function go(x:number):void{
    console.log(x)
}
function show(y:string):string{
    return y;
}
go(6)
console.log(show("hello"))

function test(x:number,y:number,z:number):void{
    console.log(x)
    console.log(x+y)
    console.log(x+y+z)
}
test(1,4,5)