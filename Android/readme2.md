```
进程：在计算机上运行的一个应用程序就是一个进程。
```

```
线程：线程是进程的基本单位。一个进程由一个或者多个线程组成。线程和线程之间是独立的。
```

```js
进程和线程在使用内存的区别:
1.操作系统会给进程分配独立的内存空间
2.多个线程共享内存空间
```

### 一.给多个按钮设置点击事件

```js
//activity_main
<LinearLayout
       android:layout_width="match_parent"
       android:layout_height="match_parent"
       android:orientation="vertical">
       <Button
           android:text="发送http"
           android:id="@+id/send_http"
           android:layout_width="match_parent"
           android:layout_height="wrap_content" />
       <Button
           android:text="Btn2"
           android:id="@+id/btn2"
           android:layout_width="match_parent"
           android:layout_height="wrap_content" />
       <TextView
           android:id="@+id/response_txt"
           android:layout_width="match_parent"
           android:layout_height="wrap_content" />
   </LinearLayout>
```

```js
//MainActivity
public class MainActivity extends AppCompatActivity implements  View.OnClickListener{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button btn =(Button) findViewById(R.id.send_http);
        Button btn2=(Button) findViewById(R.id.btn2);
        btn.setOnClickListener(this);
        btn2.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()){
            case R.id.send_http:
                Log.d("main","send_http");
                break;
            case R.id.btn2:
                Log.d("main","btn2");
                break;
        }
    }
}
```

### 如果要读取网络资源必须要在manifests/AndroidManifest中加一段

```js
//授权   加在application上面
<uses-permission android:name="android.permission.INTERNET" />  
```

### 二.setText改变文本

```js
//setText()   MainActivity
public class MainActivity extends AppCompatActivity implements  View.OnClickListener{
    TextView responsetTxt;      //变量定义到最顶部，全局变量
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button btn =(Button) findViewById(R.id.send_http);
        responsetTxt=(TextView) findViewById(R.id.response_txt);
        btn.setOnClickListener(this);
    }
    
     @Override
    public void onClick(View v) {
        //alt+enter
        responsetTxt.setText("hello world");
        sendHttp();
    }
}
```

### 三.发送请求

```js
//1.安装依赖  build.gradle
implementation("com.squareup.okhttp3:okhttp:4.3.0")     //点击右上角synic now，导入进去
```

```js
package com.example.myapplication;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.drawee.view.SimpleDraweeView;
import com.squareup.picasso.Picasso;

import java.io.IOException;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class MainActivity extends AppCompatActivity implements  View.OnClickListener{
    TextView responsetTxt;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button btn =(Button) findViewById(R.id.send_http);
        responsetTxt=(TextView) findViewById(R.id.response_txt);
        btn.setOnClickListener(this);
    }


    @Override
    public void onClick(View v) {
        //alt+enter
       sendHttp();
    }

    //new Thread自动导入
    private void sendHttp() {
        new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    OkHttpClient client=new OkHttpClient();
                    Request request = new Request.Builder().url("https://music.aityp.com/").build();
                    Response response=client.newCall(request).execute();
                    String responseData=response.body().string();
                    showResponse(responseData);
                    Log.d("http",responseData);
                }catch (IOException e){
                    e.printStackTrace();
                }
            }
            //showResponse ALT+ENTER
            private void showResponse(final String res) {
            //android不允许在子线程中操作ui，可以通过runOnUiThread方法，切回主线程去操作ui
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        responsetTxt.setText(res);
                    }
                });
            }
        }).start();
    }
}

```

### 四.解析JSON

```js
//1.安装依赖
implementation 'com.alibaba:fastjson:1.1.71.android'
```

```js
//2.定义一个实体类和接口的数据映射   新建com.example.myapplication/AppData
package com.example.myapplication;
//javabena   实体类，里面全部是属性，有get,set
//右键单击Generate/get  set
public class AppData {
    public int getCode() {
        return code;
    }

    private String msg;
    private int code;

    public void setCode(int code) {
        this.code = code;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public String getMsg() {
        return msg;
    }
}
```

```js
//3.解析    MainActivity   这是解析的对象，如果是数组的话还要去fastjson官网看
 private void showResponse(final String res) {
       //android不允许在子线程中操作ui，可以通过runOnUiThread方法，切回主线程去操作ui
       runOnUiThread(new Runnable() {
           @Override
           public void run() {
           JSONObject obj= JSON.parseObject(res);
            //实例化一个对象
           AppData data=JSON.toJavaObject(obj,AppData.class);
           responsetTxt.setText(data.getMsg());
          }
      });
}
```

#### 发送请求步骤

```
//1.开启子线程发送http
//2.在ui线程中获取数据
//3.使用fastjson对数据进行解析
//4.创建实体类和接收数据映射
//5.获取数据
```

### 五.生命周期

```
onCreate()   --函数第一次创建的时候会触发
onStart()    --活动由不可见到可见的时候会触发
onResume()   --活动处于栈的顶部的时候会触发
onPause()    --活动处于暂停状态的时候会触发
onStop()     --活动不可见的时候触发
onDestroy()  --活动被销毁的时候触发
onRestart()  --活动从暂停变为运行状态的时候触发
```

```
//1.A活动初次加载的时候会触发的生命周期
-onCreate()
-onStart()
-onResume()
```

```
//2.A页面跳转的时候会触发的生命周期
-onPause()
-onStop()
```

```
//3.从B页面跳转回A页面的时候会触发的生命周期
-onRestart()
-onStart()
-onResume()
```

```
//生命周期函数的映射关系
onCreate()    --   onDestroy()   完整生存期
onStart()     --   onStop()      可见生存期
onResume()    --   onPause()     前台生存期

```

