<template>
  <div class>
    <div class="login-box">
      <div class="login-logo">
        <a href="../../index2.html">
          <b>Admin</b>LTE
        </a>
      </div>
      <!-- /.login-logo -->
      <div class="login-box-body">
        <p class="login-box-msg">登录</p>

        <form action="../../index2.html" method="post">
          <div class="form-group has-feedback">
            <input
              v-validate="'required'"
              name="Account"
              type="text"
              class="form-control"
              placeholder="账号"
              v-model="User.Account"
            />
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            <p class="text-danger" v-show="errors.has('Account')">{{errors.first("Account")}}</p>
          </div>
          <div class="form-group has-feedback">
            <input
              v-validate="'required'"
              name="password"
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="User.Password"
            />
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            <p class="text-danger" v-show="errors.has('password')">{{errors.first("password")}}</p>
          </div>
          <div class="row">
            <div class="col-xs-8">
              <div class="checkbox icheck">
                <label>
                  <input type="checkbox" /> 记住我
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
        </div>-->
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
import { login } from "@/API/users";

export default {
  name: "login",
  data() {
    return {
      User: {
        Account: "22",
        Password: "22"
      }
    };
  },
  methods: {
    login: function() {
      const that = this;
      login(this.User)
        .then(function(data) {
          console.log("data", data);
          if (data.S) {
            localStorage.setItem("UserName", data.D.UserName);
            that.$router.push("Dashboard");
          }
        })
        .catch(function(data) {
          console.log(data);
          that.$toast.error({ message: "错误信息：" + data });
        });
      // this.$router.push('Index')
    },
    register: function() {
      this.$router.push("/Register");
    },
    forgetPwd: function() {}
  },
  mounted() {
    console.log(this.$validator);
  }
};
</script>
