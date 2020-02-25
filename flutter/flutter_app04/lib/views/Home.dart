import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
class MyHome extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _MyHomeState();
  }
}

class _MyHomeState extends State{
  String msg;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("首页"),
        ),
        body: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
         children: <Widget>[
          FlatButton(child: Text('跳转到detail'),onPressed: goDetail,),
          FlatButton(child: Text("发送http"),onPressed: getHttp,)
        ],
        ),
        );
  }
  void goDetail(){
    Navigator.pushNamed(context, "detail",arguments: "1001");
  }
  void getHttp() async{
    try{
      Response response=await Dio().get("http://douban.uieee.com/v2/movie/top250");
     var title=response.data['title'];
     setState(() {
       msg=title;
     });
    }catch (e){
      print(e);
    }
  }
}