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
