<template>
<div class="">
<div class="login-box">
  <div class="login-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg">登录</p>

    <form action="../../index2.html" method="post">
      <div class="form-group has-feedback">
        <input type="text" class="form-control" placeholder="Email" v-model="User.Account">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" class="form-control" placeholder="Password" v-model="User.Password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row">
        <div class="col-xs-8">
          <div class="checkbox icheck">
            <label>
              <input type="checkbox"> 记住我
            </label>
          </div>
        </div>
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="button" class="btn btn-primary btn-block btn-flat" @click="login()">登录</button>
        </div>
        <!-- /.col -->
      </div>
    </form>
    <!-- <div class="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using
        Facebook</a>
      <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign in using
        Google+</a>
    </div> -->
    <!-- /.social-auth-links -->

    <!-- <a href="#">忘记密码</a><br> -->
    <!-- <a href="" class="text-center" @click="register()">注册</a> -->
    <button class="btn btn-link" @click="forgetPwd()">忘记密码</button>
    <button class="btn btn-link" @click="register()">注册</button>
  </div>
  <!-- /.login-box-body -->
</div>
</div>
<!-- /.login-box -->
</template>
<script>

import {login} from '@/API/users';

export default{
  name: 'login',
  data () {
    return {
      User: {
        Account: '22',
        Password: '22'
      }
    };
  },
  methods: {
    login: function () {
      const that = this;
      login(this.User).then(function (data) {
        if (data.S) {
          localStorage.setItem('UserName',data.D.UserName);
          that.$router.push('Dashboard');
        }
      });
      // this.$router.push('Index')
    },
    register: function () {
      this.$router.push('/Register');
    },
    forgetPwd: function () {

    }
  }
};
</script>
