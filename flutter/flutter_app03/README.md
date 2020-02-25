## Flutter

```js
//热加载
r    shift+r
```

```js
//看样式
ctrl+左键
```

### 一.组件

#### 1.MaterialApp--头标题和文本内容

```js
//main.dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget{
  //runApp是flutter的入门函数，接收数组
  @override
  Widget build(BuildContext context){
    //MaterialApp是一个组件
    return MaterialApp(
      title: "Flutter",
      home: Scaffold(
        //头部分
        appBar: AppBar(
          title: Text("home"),
        ),
        //内容主体部分
        body:Center(
          child: Text("hello world"),
        )),
    );
  }
}
```

#### 2.Text--文本组件

```js
return Text(
      "hello world",
      textDirection: TextDirection.ltr,
      style: TextStyle(fontSize: 40,color: Colors.red),    //默认是color:Colors
    );
```

```js
//自定义文本字体颜色
style: TextStyle(fontSize: 40,color: Color(0xffFFFFFF)),   //color:Color  颜色前面要加0xff
//其他文本样式
    return Text(
      "hello world",
      textDirection: TextDirection.ltr,
      textAlign: TextAlign.center,    //设置字体文本对齐方式
      textScaleFactor: 3,    //设置字体缩放
      maxLines:1,            //最多有一行
      overflow:TextOverflow.ellipsis,    //以...结尾
      style: TextStyle(       //字体相关样式
        fontSize: 40,
        color: Color(0xffC20C0C),
        fontStyle: FontStyle.italic,
        decoration: TextDecoration.overline,
        decorationColor: Colors.white,
        fontWeight: FontWeight.w900,
        letterSpacing: 5.0
        ),
    );
```

#### 3.container

```js
//相当于div
//要在container外面套一个center,不然如果设宽高的话会铺满全屏，也可以使用MaterialApp调用一个模块
Widget build(BuildContext context){
    //MaterialApp是一个组件
    return Center(
      child: Container(
        width: 100.0,
        height: 100.0,
        decoration: BoxDecoration(color: Colors.red),
        ),
      );
  }
```

#### 4.Image

##### 4-1网络图片

```js
Image.netword(
url:"",
//其他样式
)
```

```js
return Container(
     child: Image.network(
     "https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1579587543&t=eff35c730fd2a7b13bc699831c8cb324",     
    
   ),
   );
```

##### 4-2本地图片

```js
//根目录下新建images,放入图片
//images下新建2.0x/3.0x文件夹
//pubspec.yaml  44行assets显示并写入图片路径
  assets:
   - images/music.jpg

return Container(
     child: Image.asset("/images/music.png",width: 100,)
   );
```

#### 5.调用一个模块--MaterialApp

```js
//此时设置宽高才有用，不会全屏覆盖
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget{
  //runApp是flutter的入门函数，接收数组
  @override
  Widget build(BuildContext context){
  return MaterialApp(
    home: Scaffold(
      appBar: AppBar(
        title: Text("flutterr demo"),
        ),
        body: HomeContent()       //引用HomeContent组件
       ),
  );
  }
}
class HomeContent extends StatelessWidget{
  @override
  Widget build(BuildContext context){
     return Container(
       width: 100,
       height: 100,
       decoration: BoxDecoration(
         color: Colors.red
         ),
       );
  }
}
```

#### 6.ListView

```js
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget{
  //runApp是flutter的入门函数，接收数组
  @override
  Widget build(BuildContext context){
  return MaterialApp(
    home: Scaffold(
      appBar: AppBar(
        title: Text("flutterr demo"),
        ),
        body: HomeContent()
       ),
  );
  }
}
class HomeContent extends StatelessWidget{
  @override
  Widget build(BuildContext context){
     return ListView(
       children: <Widget>[
         ListTile(
           leading: Icon(Icons.music_video,color: Color(0xffC20C0C),size: 30),//图标在前面
           title: Text("网易云音乐"),
           subtitle: Text("网易云音乐，听见世界"),
           ),
          ListTile(
          trailing: Icon(Icons.mail_outline,color: Color(0xffC20C0C),size: 30),//图标在文本后面
           title: Text("网易云音乐"),
           subtitle: Text("网易云音乐，听见世界"),
           ),
           ListTile(    
           leading:   Image.network("https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1579587543&t=eff35c730fd2a7b13bc699831c8cb324"),   //使用网络图片当图标
           title: Text("网易云音乐"),
           subtitle: Text("网易云音乐，听见世界"),
           )
       ],
     );
  }
}
```

数组循环

```js
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget{
  //runApp是flutter的入门函数，接收数组
  @override
  Widget build(BuildContext context){
  return MaterialApp(
    home: Scaffold(
      appBar: AppBar(
        title: Text("flutterr demo"),
        ),
        body: HomeContent()
       ),
  );
  }
}
class HomeContent extends StatelessWidget{
  List<Widget> _getData(){            //定义一个List<Widget>类型的函数
    List<Widget> arr=new List();
    for(var i=0;i<20;i++){
      arr.add(ListTile(
        title: Text("我是$i列表"),
      ));
    }
    return arr;
  }
  @override
  Widget build(BuildContext context){
     return ListView(
       children: this._getData()     //调用函数
     );
  }
}
```

引用本地数据进行遍历

```js
//lib/data.dart
List<Map> data=[
  {
    "title":"网易云音乐",
    "subtitle":"网易云音乐，让你听见世界"
  },
  {
    "title":"qq",
    "subtitle":"是腾讯公司出品的杀手级应用"
  }
];
```

```js
//lib/main.dart
//1.导入data.dart
import 'data.dart';
//2.使用map进行遍历，
class MyApp extends StatelessWidget{
  //runApp是flutter的入门函数，接收数组
  @override
  Widget build(BuildContext context){
  return MaterialApp(
    home: Scaffold(
      appBar: AppBar(
        title: Text("flutterr demo"),
        ),
        body: HomeContent()
       ),
  );
  }
}
class HomeContent extends StatelessWidget{
  List<Widget> getData(){
    var tempList =data.map((item){    //使用map方法遍历
      return ListTile(
        title: Text(item['title']),
        subtitle: Text(item['subtitle'])
        );
    });
    return tempList.toList();
  }
  @override
  Widget build(BuildContext context){
     return ListView(
       children: this.getData()
     );
  }
}
```

```js
//使用forEach遍历
class MyApp extends StatelessWidget{
  //runApp是flutter的入门函数，接收数组
  @override
  Widget build(BuildContext context){
  return MaterialApp(
    home: Scaffold(
      appBar: AppBar(
        title: Text("flutterr demo"),
        ),
        body: HomeContent()
       ),
  );
  }
}
class HomeContent extends StatelessWidget{
  List<Widget> getData(){
    List<Widget> tempList=new List();
    data.forEach((item){          //使用forEach进行遍历
      tempList.add(ListTile(
        title: Text(item['title']),
        subtitle: Text(item['subtitle']),
      ));
    });
    return tempList;
  }
  @override
  Widget build(BuildContext context){
     return ListView(
       children: this.getData()
     );
  }
}
```

