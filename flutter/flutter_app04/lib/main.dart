import 'package:flutter/material.dart';
import "package:flutter_app04/views/Detail.dart";
import "package:flutter_app04/views/Home.dart";
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(     //入口文件
      title: 'Flutter Demo',
      routes: {     //路由
        "detail":(context)=>MyDetail(),
        "home":(context)=>MyHome(),
      },
      initialRoute: "home",   //初始化路由
    );
  }
}
