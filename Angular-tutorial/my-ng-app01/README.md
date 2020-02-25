angular插件

```
Angular Snippets(Version 8)
```

### 一.使用命令生成一个组件

```js
//新打开一个终端
ng g component components/header   //header是在components下新建的组件的组件名
```

#### 项目结构

```js
//app.module.ts   根模块   所有的项目要在根模块中注册

@NgModule({
  //注册组件
  declarations: [
    AppComponent,       //组件名
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

#### 1.去components/header/header.component.ts可以查看组件名字

```js
@Component({
  selector: 'app-header',    //组件名称
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
```

#### 2.去主组件中使用子组件  app.component.html

```
<app-header></app-headerr>
```

#### 3.业务要写在header.component.ts中

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',    //组件名称
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {     //写逻辑业务
  public arr:object[]=[{name:"html",age:10},{name:'css',age:30}]
  public imageUrl:string="https://c-ssl.duitang.com/uploads/item/201912/02/20191202100553_HPUuW.thumb.700_0.jpeg"
  public isShow:boolean=false;
  constructor() { }

  ngOnInit() {
  }
}
```

#### 4.组件中渲染业务部分*.component.html

```js
<div *ngFor="let item of arr">{{item.name}}</div>
<div *ngIf="isShow">你好</div>
<img [src]="imageUrl" alt="">
```

### 二.指令ngFor,ngIf

```js
//header.component.html
<div *ngFor="let item of arr">{{item.name}}</div>
<div *ngIf="isShow">你好</div>
```

```js
//header.component.ts
export class HeaderComponent implements OnInit {
  public arr:object[]=[{name:"html",age:10},{name:'css',age:30}]
  public isShow:boolean=false;
}
```

### 三.属性绑定

```js
//图片  src要用中括号括起来
<img [src]="imageUrl" alt="">   

//header.component.ts
export class HeaderComponent implements OnInit {
  public imageUrl:string="https://c-ssl.duitang.com/uploads/item/201912/02/20191202100553_HPUuW.thumb.700_0.jpeg"
  constructor() { }
  ngOnInit() {
  }
}
```

### 四.事件

#### 4-1(click)--点击更改

```js
//header.component.html
<p (click)="handleClick()">{{msg}}</p>
```

```js
//header.component.ts
export class HeaderComponent implements OnInit {
  public msg:string="我喜欢"
  constructor() { }
  ngOnInit() {
  }
  handleClick(){
    this.msg="change"
  }
}
```

#### 4-2(keyup)--获取input键盘码

```js
 //header.component.html
  <input type="text" (keyup)="handleEnter($event)">
```

```JS
//header.component.ts
export class HeaderComponent implements OnInit {
...
    handleEnter(event:any){
        console.log(event.keyCode)   //键盘码
      }
  }
```

#### 4-3(key.enter)--获取input输入框中的值

```js
 //header.component.html
<input #box (keyup.enter)="handleEnter(box.value)">
```

```js
//header.component.ts
handleEnter(value:string){
    console.log(value)
  }
```

