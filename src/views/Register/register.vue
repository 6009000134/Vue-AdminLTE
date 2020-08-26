<template>
<div class="register-box">
  <div class="register-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>
  <div class="register-box-body">
    <p class="login-box-msg">用户注册</p>

    <form action="../../index.html" method="post">
     <div class="form-group has-feedback" :class="{'has-error':$v.User.UserName.$invalid}">
        <input v-model="User.UserName"  type="text" class="form-control" placeholder="姓名">
        <span class="glyphicon glyphicon-user form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback" :class="{'has-error':$v.User.Account.$invalid}">
        <input type="text" v-model="User.Account" class="form-control" placeholder="账号" >
        <span class="glyphicon glyphicon-user form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback" :class="{'has-error':$v.User.Password.$invalid}">
        <input v-model="User.Password" type="password" class="form-control" placeholder="密码" >
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback " :class="{'has-error':$v.User.Password2.$invalid}">
        <input type="password" v-model="User.Password2" class="form-control" placeholder="再次输入密码" >
        <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
      </div>
      <div class="row">
        <div class="col-xs-8">
          <div class="checkbox icheck">
            <label>
              <input type="checkbox" v-model="User.IsAgree"> 已阅读并同意 <a href="#">协议</a>
            </label>
          </div>
        </div>
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="button" class="btn btn-primary btn-block btn-flat" @click="register()">Axios注册</button>
        </div>
        <!-- /.col -->
      </div>
    </form>

    <!-- <div class="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign up using
        Facebook</a>
      <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign up using
        Google+</a>
    </div> -->

    <!-- <a href="login.html" class="text-center">已有账号，去登录！</a> -->
    <button class="text-center btn-link" @click="toLogin()">已有账号，去登录！</button>
  </div>
  <!-- /.form-box -->
</div>
<!-- /.register-box -->
</template>

<script>
import {register} from '@/API/users';
import { required } from 'vuelidate/lib/validators';
export default{
  data () {
    return {
      User: {
        UserName: '',
        Account: '',
        Password: '',
        Password2: '',
        IsAgree: false
      },
      UserName: ''
    };
  },
  validations: {
    User: {
      UserName: {
        required
      },
      Account: {
        required
      },
      Password: {
        required
      },
      Password2: {
        required
      }
    }

  },
  methods: {toLogin: function () {
    this.$router.push('/');
  },
  register: function () {
    if (!this.User.IsAgree) {
      this.$toast.error({title: 'dd',message: '请阅读协议！'});
      return;
    }
    if (this.User.Password !== this.User.Password2) {
      this.$toast.error({title: 'dd',message: '密码不一致'});
      return;
    }
    var r = register(this.User);
    console.log(r);
  }
  }
};
</script>

<style>
</style>
