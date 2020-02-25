

### 一.开发环境配置

```
npm i typescript -g
npm i node-ts -g
```

```
//查看输出结果
应用商店装Code Runner
右键单击run code
```

```
生成.ts文件
终端输入  tsc app.ts  自动生成
```

### 二.ts语言的特点

```js
//强类型语言 ，声明变量要指明其类型
var str:string="hello world"
```

### 三.数据类型

```js
//number,string,boolean
var num:number=20;

var str:string="hello";
var arr:string[]=['html','css','javascript']

var b:boolean=true;
```

```js
//数组
var arr:string[]=['html','css','javascript']
var all:number[]=[1,2,3,4]
arr.forEach(item=>{
    console.log(item)
})
```

```js
//对象Object
var obj:object={
    name:"wang",
    age:14
}
console.log(obj["name"])
```

```js
//声明一个数组，里面是的元素是object
var arr:object[]=[{name:"wang",age:20},{name:"li",age:18}]
```

#### 3-1枚举

> 枚举类型可以为一组数据赋予友好的名字

```js
//枚举
enum Status{
    success=200,
    file=400,
    serverError=500
}
var s:Status=Status.success;
console.log(s);
```

#### 3-2any

```js
//指明数据类型为any之后不会进行类型检查了，数据可以改变成任意类型
var data:any=[1,2,3];   
data='hello world';
data=1236;
console.log(data)
```

#### 3-3void  没有返回值

```js
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
```

#### 3-4null和undefined

```js
var n:null;
n=20;    //报错,因为变量已经声明为null，不能改变为其他类型
//解决方法：
var s:null|number;
s=30;

var a:undefined|number;
a=10;
```

### 四.函数

#### 4-1带参数的函数

```js
//匿名函数
//要指明类型,调用的时候要与声明类型一致
var fn=function(name:string,age:number):number{
    console.log(name,age)
    return 10;
}
fn("wang",20)
```

#### 4-2函数的默认参数

```js
//带参数
var fn=function(name:string,age:number=20):number{
    console.log(name,age)
    return 10;
}
fn("wang")
```

#### 4-3函数的可选参数

```js
//设置可选参数之后，调用函数的时候，这个参数是可传可不传的
//函数的可选参数，必须要在最后面
var fn=function(name:string,age?:number):number{
    console.log(name,age)
    return 10;
}
fn("wang")
```

### 五.class

```js
//private  私有的  作用范围只在类中
//public  公有的  其他类型也可以访问
//不写变量修饰符  默认就是公有的
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
export default Person;
```

```js
//调用之前的页面
import Person from './08'
//继承  子类继承父类，子类的构造函数中第一行一定要加super
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
```



