import 'package:flutter/material.dart';
class MyDetail extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // var args=ModalRoute.of(context).setState(fn)
   return Scaffold(
      appBar: AppBar(
        title: Text("详情"),
        ),
        body:Container(
          child: Text('详情页'),
          )
        );
  }
}
