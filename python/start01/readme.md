

### 一.基本语法

> 不需要转换符

```js
//int float str bool
```

```js
type(a)    //输出一个数据的类型
```

```js
//int float str
a=10           //int
a=10.23       //float
a="hello"     //str
```

```js
//bool    True和Flase首字母要大写
a=True      
```

#### 1-1str

```js
//'''换行
str='''hello 
world'''
```

### 二.数据类型之间的相互转换

#### 2-1其他类型转为字符串型

```js
a=10
b=str(a)
print(type(b))
```

#### 2-2其他类型转为int()---只能是整数

```js
a="10"
b=int(a)
print(type(b))
```

#### 2-3其他类型转为float

```js
a="10.26"
b=float(a)
print(type(b))
```

### 三.常量

> python中没有常量

> 常量就是声明之后不能改变的

> javascript中使用const声明的就叫常量

```js
//约定常量所有字母多要大写
GET=10
```

### 四.给多个变量赋值

```js
 a,b,c=1,2,3
 print(c)
```

### 五.字符串的运算

#### 5-1乘法

```js
a="hello"*3
print(a)
```

#### 5-2读取字符串中的某一位

```js
a="hello"
print(a[1])    //e
```

#### 5-3截取字符串中的某一段

```js
a="hello"
print(a[1:])    //ello  截取第一位之后的所有的字符
print(a[1:3])   //el   不包含第三位
```

#### 5-4format拼接字符串

```js
a="http://www.baidu.com/{}"
url=a.format("223")
print(url)       //   http://www.baidu.com/223
```

### 六.列表list

> python中的list相当于javascript中的数组

#### 6-1len()--获取长度

```js
arr=[1,2,3]
print(type(arr))     //list
print(len(arr))      //3
```

#### 6-2读取数组的某一段

```js
arr=[1,2,3]
print(arr[1:])   //[2,3]
```

#### 6-3数组相加

```js
a=[1,2,3]
b=[4,5]
c=a+b
print(c)     //[1, 2, 3, 4, 5]
```

#### 6-4乘法

```js
b=[4,5]
print(b*2)    //[4,5,4,5]
```

#### 6-5遍历

```js
arr=['html','javascript','vue']
for key in arr:
    print(key)
```

#### 6-6方法

#### 增加

```js
//向后增加--append()
arr=['html','css','react']
arr.append("vue")     //从后面添加
print(arr)  //['html', 'css', 'react','vue']
```

```js
//定点增加--insert()
arr=['html','css','react'] 
arr.insert(1,"vue")      //['html', 'vue', 'css', 'react']
print(arr)
```

#### 删除

```js
//remove()
arr=['html','css','react']
arr.remove("css")
print(arr)
```

#### index()--查找下标

```
arr=['html','css','react','javascript']
 print(arr.index('css'))    //1
```

#### pop()--从后面删除

```
arr=['html','css','react','javascript']
arr.pop()
print(arr)   //['html','css','react']
```

#### 6-7in|not in

```js
arr=[1,2,3,4,5]
print(5 in arr)    //True
print(5 not in arr)     //False
```

#### 6-8min|max

```js
arr=[1,2,3]
print(min(arr))
```

### 七.元组

```js
# 元组和列表不同的地方是，元组是不能修改的
arr=(1,2,3)
print(type(arr))
```

### 八.集合

> 特点：里面值是不能重复的，是无序的 

```
arr=[1,2,3,4,5]
print(5 in arr)
print(5 not in arr)
```

##### 并集

```js
a={1,2,3,4}
b={2,3,5}
print(a|b)     //{1,2,3,4,5}
```

##### 交集

```js
a={1,2,3}
b={2,3}
print(a&b)     //{2,3}
```

##### 差集

```js
a={1,2,3,4}
b={2,3,4,5}
print(a-b)     //{1}  减去前一个相同的部分
```

#### 8-1方法

##### 添加

```js
//add()
arr={'html','css'}
arr.add("js")    
print(arr)     //{'html', 'css', 'js'}
```

```
//update()向前增加  可以增加多个值
arr={'html','java','css'}
arr.update({'react','vue'})
print(arr)
```

##### 删除

```js
//remove()--定点删除
arr={'html','css','javascript'}
arr.remove('css')
print(arr)
```

```js
//clear()
arr={'html','css','js'}
arr.clear()
print(arr)     //set()
```

```js
//pop()
arr={'html','css','javascript'}
arr.pop()
print(arr)
```

### 九.字典

```js
obj={
    "name":"wang",
    "age":18
}
// print(type(obj))     <class 'dict'>
print(obj["name"])     //读取对象属性
```

#### 9-1逻辑运算

```
and  &&
or   |
```

```js
//and
//if-else   
age=19
flag=True
if age>18 and flag:
    print("net")
else:
    print("home")
```

```js
//or
age=19
flag=True
if age>18 or flag:
    print("net")
else:
    print("home")
```

### 十.函数

#### 10-1定义一个函数

```js
def test():
    print("hello world")
test()
```

```js
//有返回值
def test():
    return "hello world"
print(test())
```

#### 10-2默认参数

```js
def test(a=2,b=3):
    print(a+b)
test()    //5
test(b=6)    //8
```

#### 10-3range

```js
for value in range(0,11):
    print(value)    //0 1 2 3 4 5 6 7 8 9 10

for value in range(0,11):
    if(value==3):
       continue       //0 1 2 4 5 6 7 8 9 10
     print(value)
```

### 十一.创建一个pipenv的开发环境

#### 11-1全局安装pipenv

```js
pip install pipenv
```

#### 11-2创建一个pipenv的开发环境

新建一个文件夹  serve，用vscode打开,终端输入  

```js
// 进入虚拟环境
pipenv install 
//退出
exit
```

激活虚拟环境

```
pipenv shell
```

查看已经安装的安装包

```
pip list
```

安装

```
pipenv install flask
```

启动

```
pipenv app.py    //app.py是文件名
```

每次退出之后在启动之前要先激活

```
pipenv shell 
pipenv app.py
```

