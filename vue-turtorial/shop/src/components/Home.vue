<template>
  <div class="container">
    <img class="logo" src="@/assets/logo.jpeg" alt="" />
    <div class="sign">
      <span>{{successName}}</span>
      <el-button  @click="dialogFormVisible = true" >登录</el-button>
      <el-dialog title="登陆界面" :visible.sync="dialogFormVisible">
        <el-form :model="form"  status-icon :rules="rules">
          <el-form-item label="用户名"  prop="username" :label-width="formLabelWidth">
            <el-input v-model="form.username" ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass" :label-width="formLabelWidth">
            <el-input type="password" v-model="form.pass"> </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleLogin">确 定</el-button>
        </div>
      </el-dialog>
      <el-button @click="handleLogout">退出</el-button>
      <i class="iconfont cart icon-gouwuche" @click="handleClick"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
    };
    return {
      dialogFormVisible: false,
      form: {
        username: "",
        pass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" ,required:true}],
        username: [  { required: true, message: '请输入用户名', trigger: 'blur' }]
      },
      formLabelWidth: "120px",
      successName:""
    };
  },
  methods: {
    handleClose() {},
    //登录
    handleLogin(){
      if(this.form.username && this.form.pass){
        this.$http({
          url:"/users/login",
          method:"post",
          data:{
            userName:this.form.username,
            userPwd:this.form.pass
          }
        }).then(res=>{
          if(res.data.code==200){
            this.$message({
              message:res.data.msg,
              duration:1000,
              type:"success"
            })
            this.successName=res.data.result;
            this.dialogFormVisible=false
          }else{
            this.$message({
              message:res.data.msg,
              duration:1000,
              type:"error"
            })
          }
        })
      }else{
        this.$message({
          message:"用户名和密码不能为空",
          duration:1000,
          type:"error"
        })
      }
    },
    //退出
    handleLogout(){
      this.$http.get('/users/logout').then(res=>{
        this.$message({
            message:res.data.msg,
            duration:1000,
        })
        this.successName=""
      })
    },
    handleClick(){
      this.$router.push('/Cart')
    }
  },
  mounted(){
    this.$http.get('/users/checkLogin').then(res=>{
      if(res.data.code==200){
        this.successName=res.data.result;
      }else{
        this.$message({
          message:"未登录",
          duration:1000,
          type:"warning"
        })
      }
    })
  },
  
};
</script>

<style lang="scss" scoped>
.logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.container {
  background: #fff;
  width: 100%;
  line-height: 40px;
  display: flex;
  padding-left: 150px;
}
.container .sign {
  padding-left: 59%;
}
.sign button {
  width: 60px;
  height: 30px;
}
.cart {
  font-size: 25px;
}
p {
  margin: 0;
}
.el-button{
    line-height:5px;
}
.el-dialog__header{
    padding:20px 299px 10px
}
</style>
