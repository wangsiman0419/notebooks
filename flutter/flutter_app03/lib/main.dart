import 'package:flutter/material.dart';
import 'data.dart';
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
  List<Widget> getData(){
    List<Widget> tempList=new List();
    data.forEach((item){
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