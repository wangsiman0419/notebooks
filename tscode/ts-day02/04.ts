//指明数据类型为any之后不会进行类型检查了，数据可以改变成任意类型
var data:any=[1,2,3];   
data='hello world';
data=1236;
console.log(data)