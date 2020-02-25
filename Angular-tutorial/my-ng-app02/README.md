### 一.双向数据绑定

#### 1-1app.modult.ts中配置

```js
//1.在app.module.ts根目录中导入并注册
import {FormsModule} from '@angular/forms'

@NgModule({
 ...
  imports: [
    ...
    FormsModule
  ],
 ...
})
```

#### 1-2在组件中使用

```js
//.html
<input type="text" [(ngModel)]="msg">       // [(ngModel)]="msg"   快捷键ng就可以出来

//.component.ts
 export class HeaderComponent implements OnInit {
  public msg:string='hello world';
    ...
  }
}
```

### 二.(change)

```js
//.html
<input type="text" [(ngModel)]="msg" (change)="handleChange($event)">

//.ts
handleChange(e){
    console.log(e.target)
  }
```

### 三.(ngModelChange)

> 只要ngModelChange中的内容改变时就会触发
>
> (ngModelChange)要放在[(ngModel)]后面

```js
//.html  
<input type="text" [(ngModel)]="msg" (ngModelChange)="handleChange()">

//.ts
handleChange(){
    console.log(1)
  }
```

### 四.导入数据到本地

```js
在组件下面新建一个data.ts文件
var cartList:object[]=  (数据)
export default cartList;    //导出一下

//2.在要使用数据的组件的.ts文件中导入data.ts
import { Component, OnInit } from '@angular/core';
import cartList from './data';
...
export class HeaderComponent implements OnInit {
  public msg:string='hello world';
  public checked:boolean=true;
  public cartList:any=cartList;
  constructor() {
    console.log(cartList)   //可以打印看一下有没有
   }
  ...
  
}
//.html   页面渲染
<div *ngFor="let item of cartList">
  {{item.productName}}
</div>
```

### 五.ant-design

#### 5-1自动构建

```js
退出命令行  重新输入
ng add ng-zorro-antd

直接在.html页面中使用组件
<button nz-button nzType="primary">Primary</button>
```

![1576138735514](C:\Users\WANGSI~1\AppData\Local\Temp\1576138735514.png)

### 六.发送请求

#### 6-1在app.module.ts中配置

```js
import {HttpClientModule} from '@angular/common/http'

 imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
```

#### 6-2在发送http请求的组件中配置HttpClient,作为构造函数的参数设置 .ts

```js
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'    //导入
...
export class ContentComponent implements OnInit {

  constructor(public http:HttpClient) { }  //配置

  ngOnInit() {
  }

}
```

#### 6-3发送请求

> 取数据时不能直接取到，要用[]将要遍历的数据装起来

```js
//.ts
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public programs:any;      //定义一个对象装数据
  constructor(public http:HttpClient) { }

  ngOnInit() {
    var url:string="http://192.168.14.15:5000/dj/program?rid=336355127";
    this.http.get(url).subscribe(res=>{
      this.programs=res['programs'];      //将取到的数据设置给定义的对象
    })
  }
}
```

#### 6-4渲染数据

```js
//.html
<div *ngFor="let item of programs">
<p>{{item.name}}</p>
<img [src]="item.coverUrl" alt="">
</div>
```

### 七.父子组件传值

#### 7-1父组件向子组件传值

> 在父组件中，子组件通过属性接收传递过来的参数

```js
<app-header [title]="title"></app-header>
```

#### 7-2子组件中引入Input模块

```js
import { Component, OnInit,Input } from '@angular/core';   //导入Input


export class HeaderComponent implements OnInit {
  @Input() title:string   //定义类型
  constructor() { }

  ngOnInit() {
  }

}
```

#### 7-3子组件中接收父组件传过来的值

```
<p>{{title}}</p>
```

