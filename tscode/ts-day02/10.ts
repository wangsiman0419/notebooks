//接口  在面向对象的编程中，接口中规范。定义了行为的规范，在程序设计中，接口起到限制和规范的作用。
interface Animal{
    // name:string;
    eat():any;
    run():any;
}
//实现一个接口必须对里面的方法重写
//属于Animal必须要满足它的规范，Animal拥有两个属性，那么只要满足Animal就必须要也有要这两个属性，如果要写少了就会报错
class Dog implements Animal{
    // name:string;
    eat():void{
       console.log("吃骨头")
    }
    run():void{
       console.log("狗跑")
    }
}