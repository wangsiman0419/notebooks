import 'package:flutter/material.dart';    //fim快捷键
void main(){
  runApp(MyApp());
}
class MyApp extends StatelessWidget{
  //build 快捷键
   @override
  Widget build(BuildContext context) {
    return ListView(
      children:<Widget>[
        ListTile(

        )
      ]
    );
    // TODO: implement build
  //   return MaterialApp(
  //    home: Scaffold(
  //      appBar: AppBar(
  //         title:Text("flutter demo"),
  //         //热加载:shift+r
  //    ),
  //    body: Center(
  //      child: Text(          //文本样式
  //        "hello world",
  //        style: TextStyle(
  //          fontSize: 26,
  //          color: Colors.red
  //        ),
  //        ),
  //    ),
  //    ),
  //    theme: ThemeData(
  //      primarySwatch: Colors.green   //主题样式
  //    ),
  //  );
  }
}   