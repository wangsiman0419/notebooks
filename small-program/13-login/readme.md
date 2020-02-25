## 登录授权

### 一.使用按钮授权

.wxml

```javascript
<view class="container">
  <image src="{{logo}}"></image>
  <view>{{name}}</view>
  <button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="onGetUserInfo">获       取用户信息</button>
</view>
```

.js

wx.getUserInfo()

```javascript
Page({
  data: {
    logo:"",
    name:""
  },
  onLoad(){
    wx.getUserInfo({
      success:(res)=>{
        var {nickName,avatarUrl}=res.userInfo;
        this.setData({
          logo:avatarUrl,
          name:nickName
        })
      }
    })
  },
  onGetUserInfo(e){
    var {nickName,avatarUrl}=e.detail.userInfo;
    this.setData({
      logo:avatarUrl,
      name:nickName
    })
  }
})

```

