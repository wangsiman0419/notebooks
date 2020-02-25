package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

import android.widget.TextView;
import android.widget.Toast;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;


import java.io.IOException;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class MainActivity extends AppCompatActivity implements  View.OnClickListener{
    TextView responsetTxt;
    @Override
    //函数第一次创建的时候会触发
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button btn =(Button) findViewById(R.id.send_http);
        responsetTxt=(TextView) findViewById(R.id.response_txt);
        btn.setOnClickListener(this);
        Log.d("main","onCreate");
    }


    @Override
    public void onClick(View v) {
        //alt+enter
//       sendHttp();
        Intent intent=new Intent(MainActivity.this,DetailActivity.class);
        startActivity(intent);
    }

    @Override
    //活动由不可见到可见的时候会触发
    protected void onStart() {
        super.onStart();
        Log.d("main","onStart");
    }

    @Override
    //活动处于栈的顶部的时候会触发
    protected void onResume() {
        super.onResume();
        Log.d("main","onResume");
    }

    @Override
    //活动处于暂停状态的时候会触发
    protected void onPause() {
        super.onPause();
        Log.d("main","onPause");
    }

    @Override
    //活动不可见的时候触发
    protected void onStop() {
        super.onStop();
        Log.d("main","onStop");
    }

    @Override
    //活动被销毁的时候触发
    protected void onDestroy() {
        super.onDestroy();
        Log.d("main","onDestroy");
    }

    @Override
    //活动从暂停变为运行状态的时候触发
    protected void onRestart() {
        super.onRestart();
        Log.d("main","onRestart");
    }

    //new Thread自动导入
    /*private void sendHttp() {
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
                        JSONObject obj= JSON.parseObject(res);
                        //实例化一个对象
                        AppData data=JSON.toJavaObject(obj,AppData.class);
                        responsetTxt.setText(data.getMsg());
                    }
                });
            }
        }).start();
    }*/
}
