安装插件
Easy LESS

新建一个.less的文件

#### 1.声明变量--@

```javascript
@fontColor:"#c20c0c";    //要语义化
body{
    background:@fontColor;
}

//编译后的效果
body{
    background:"#c20c0c"
}
```

##### 2.mixin--一段复用的css的代码

```javascript
.wh(@w,@h){
 width:@w;
 height:@h;
}
.one{
    .wh(100px,100px)
}
.two{
    .wh(150px,150px)
}
//效果
.one{
    width:100px;
    height:100px;
}
.two{
    width:150px;
    height:150px
}


2.还可以默认赋值
.wh(@w:100px,@h:150px){
 width:@w;
 height:@h;
}
.one{
    .wh()
}
.two{
    .wh(200px,200px)
}

//效果
.one{
    width:100px;
    height:100px;
}
.two{
    width:200px;
    height:200px
}
```

#### 3.嵌套

```javascript
.wh(@w:100px,@h:150px){
    width: @w;
    height: @h;
}
.one{
    .wh();
    /* 3.嵌套 本质上后代 */
    &:hover{
        color:red;
    }
    .child{
        border: 1px solid #333;
    }
}

//编译后的效果：
.one {
  width: 100px;
  height: 150px;
}
.one:hover {
  color: red;
}
.one .child {
  border: 1px solid #333;
}
```

#### 4.运算

```javascript
@width:0.5
.three{
    width:percentage(@width)
}

//效果
.three{
    width:50%;
}
```

#### 5.Maps

```javascript
#colors(){
    primaryColor:#337ab7;
    successColor:#5cb85c;
    infoColor:#5bc0de;
    dangerColor:#d9534f;
}
body{
    color: #colors[primaryColor];
}

//效果
body {
  color: #337ab7;
}
```

#### 6.作用域

```javascript
@bgColor:"#c22ccc";
body{
    @bgColor:"#999";      
    background: @bgColor;     //先去局部变量中找，如果找不到再去全局中找
    color: #colors[primaryColor];
}

//编译后的效果
body {
  background: "#999";
  color: #337ab7;
}
```

#### 7.继承

```javascript
.four:extend(.two){}

//效果
.two,
.four {
  width: 150px;
  height: 150px;
}
```

.four里面可以添加其他样式

```javascript
 .fout:extend(.two){
     border:1px solid red;
}


//效果
.two,.four{
    width: 150px;
    height: 150px; 
}
.four{
    border:1px solid red;
}
```

#### 8.循环

```javascript
.gen-col(@n) when(@n>0){
    .col-@{n}{
        width: 100%/12*@n;
    }
    .gen-col(@n - 1);
}
.gen-col(12);


//效果
.col-12 {
  width: 100%;
}
.col-11 {
  width: 91.66666667%;
}
.col-10 {
  width: 83.33333333%;
}
.col-9 {
  width: 75%;
}
.col-8 {
  width: 66.66666667%;
}
.col-7 {
  width: 58.33333333%;
}
.col-6 {
  width: 50%;
}
.col-5 {
  width: 41.66666667%;
}
.col-4 {
  width: 33.33333333%;
}
.col-3 {
  width: 25%;
}
.col-2 {
  width: 16.66666667%;
}
.col-1 {
  width: 8.33333333%;
}

```

#### 9.导入--import

```
@import "color"    //color.less
```

