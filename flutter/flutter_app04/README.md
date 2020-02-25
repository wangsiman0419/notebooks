## Flutter路由

### 一.安装插件

```
Awesome Flutter Snippets
Flutter
Flutter Widget Snippets
```

### 二.快捷键

```js
class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context){
    return MaterialApp(
      title: "Flutter",
      // fs自动生成
      home: Scaffold(   
      appBar: AppBar(
        title: Text('Title'),
      ),
      body: HomeContent(),
    ),
    );
  }
}
//内容主体部分
//StatelessWidget自动生成
class HomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text("hello world")
    );
  }
}
```

### 三.使用变量

```js
class HomeContent extends StatelessWidget {
  String str="flutter";
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text("$str")
    );
  }
}
```

### 四.点击事件

```js  
class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      home: Scaffold(
        appBar: AppBar(
         title: Text('title'),
      ),
        body: HomeContent(),
      )
    );
  }
}
//StatefulWidget   快捷键
//有状态组件由两个类组成：一个是statefulWidget,一个是state类。
class HomeContent extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return HomeContentState();
  }
  
 
}
//state类持有Widget的生命周期
class HomeContentState extends State {
  int _counter =1;
  @override
  Widget build(BuildContext context) {
    return Container(
       child: RaisedButton(
         child: Text("$_counter"),
         onPressed: addCount,
       ),
    );
  }
  void addCount(){
    setState(() {      //使用setState更改state
      _counter++;
    });
  }
}
```

### 五.Row布局

```js
class HomeContent extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return HomeContentState();
  }
  
 
}
//state类持有Widget的生命周期
class HomeContentState extends State {
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly, //每个元素间距一样，横着排，start从开头开始
      children: <Widget>[
        Text("html"),
        Text("css"),
        Text("javascript")
      ],
    );
  }
}
```

