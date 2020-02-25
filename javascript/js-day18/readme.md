#### 安装插件

```
px2vw
px2rem
```

#### 使用

```
写width：空一个格，再写大小，选第二个就可以了
```

### vm

```
屏幕  等分100vm
小程序  750rpx
```

### rem

```javascript
rem  10rem
//为什么使用rem可以实现适配
pc       1366  1366
iphone5  320   640px
iphone6  375   750px
iphone7  414   1242px
```

```javascript
设备像素width     window.screen.width
  var deviceWidth=window.screen.width;
布局视口width     window.innerWidth
  var layoutWidth=window.innerWidth;
设备像素比        window.devicePixelRatio
  var dpr=window.devicePixelRatio; 
```

如果要使用rem

![1573007406991](C:\Users\WANGSI~1\AppData\Local\Temp\1573007406991.png)

第二行不要，再引入一个外联样式

```javascript
 <script src="http://g.tbcdn.cn/mtb/lib-flexible/0.4.1/??flexible_css.js,flexible.js"></script>
```

