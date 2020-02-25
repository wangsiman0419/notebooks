void main(){
  List<int> arr=[1,2,3,4];
  var newList=arr.map((item){
    return item*2;
  });
  print(newList);     //(2,4,6,8)
  print(newList.toList());   //toList()方法可以将元组转换为数组   [2,4,6,8]
}