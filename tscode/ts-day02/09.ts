import Person from './08'
//继承  子类继承父类，子类的构造函数中第一行一定要加super

/* var p:Person=new Person('wang',20);
console.log(p) */    //Person { name: 'wang', age: 20 }
//子类中调用父类的方法  this和super都可以调用
class Student extends Person{
   skill:string;
   //在构造函数的第一行要写super，指向父类  不写会报错
   constructor(name:string,age:number,skill:string){
       super(name,age);
       this.skill=skill;
       super.getAge()
   }
}
var s:Student=new Student("zhang",20,'lol');
console.log(s)
s.getName()
