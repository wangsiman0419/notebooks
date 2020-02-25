//private  私有的  作用范围只在类中
//public  公有的  其他类型也可以访问
//不写变量修饰符  默认就是公有的
/* class Person{
    private name:string;
    private age:number;
} */

/* class Person{
    name:string='wangsiman';
    age:number;
    //构造函数就是构造一个对象的函数，当New的时候会触发
    constructor(){
        console.log(this.name)   //undefined
    }
    getName(){
        console.log(this.name)    //wang
    }
}
var p:Person=new Person(); */
class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    getName():void{
        console.log(this.name)
    }
    getAge():void{
        console.log(this.age)
    }
}
var p:Person=new Person("wang",20);
console.log(p)    //Person { name: 'wang', age: 20 }
export default Person;