<template>

  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">登录</el-button>
      <!--<el-button @click.native.prevent="handleReset">重置</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script>
import NProgress from "nprogress";
import md5 from "js-md5";
import common from "../common/js/com.js";

  export default {
    data() {
      return {
        logining: false,
        ruleForm: {
          account: 'admin',
          checkPass: 'admin'
        },
        rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass }
          ]
        },
        checked: true
      };
    },
    methods: {
      handleReset() {
        this.$refs.ruleForm.resetFields();
      },
      handleSubmit(ev) {
        var _this = this;
        this.$refs.ruleForm.validate((valid) => {
          if(valid)
            {
                 this.logining = true;
                NProgress.start();

                 var loginParams = {
                                    Account: this.ruleForm.account,
                                    Passwd: this.ruleForm.Passwd,
                                   };
                common.login(loginParams);                 
                NProgress.done();
                this.logining=false;
                this.$router.push("/");

            }
            else
            {
                console.log ("error submit!");
                return false;
            }
        });
      }
    }
  }

</script>
<style >
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 5px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
