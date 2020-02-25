from flask import Flask
__author__="wangsiman"
app=Flask(__name__)
@app.route('/')
# 路由后面跟的十视图函数
def index():
    return "flask"
@app.route("/hello/")
def hello():
    return "hello world"
app.run(debug=True)