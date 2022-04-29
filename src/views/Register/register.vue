<template>
  <div class="register-box">
    <div class="register-logo">
      <a href="../../index2.html">
        <b>Admin</b>LTE
      </a>
    </div>
    <div class="register-box-body">
      <p class="login-box-msg">用户注册</p>

      <form action="../../index.html" method="post">
        <div class="form-group has-feedback" :class="{'has-error':errors.has('UserName')}">
          <input
            v-model="User.UserName"
            name="UserName"
            v-validate="'required|min:6|max:18'"
            type="text"
            class="form-control"
            placeholder="姓名"
          />
          <span class="glyphicon glyphicon-user form-control-feedback"></span>
          <p v-show="errors.has('UserName')" class="text-danger">{{errors.first("UserName")}}</p>
        </div>
        <div :class="{'form-group':true,'has-feedback':true,'has-error':errors.has('Account')}">
          <input
            type="text"
            v-model="User.Account"
            v-validate="'required'"
            class="form-control"
            name="Account"
            placeholder="账号"
          />
          <span class="glyphicon glyphicon-user form-control-feedback"></span>
          <p v-show="errors.has('Account')" class="text-danger">{{errors.first('Account')}}</p>
        </div>
        <div class="form-group has-feedback">
          <input
            v-validate="'required'"
            name="password"
            v-model="User.Password"
            type="password"
            class="form-control"
            placeholder="密码"
             ref="password"
          />
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          <p v-show="errors.has('password')" class="text-danger">{{errors.first('password')}}</p>
        </div>
        <div class="form-group has-feedback">
          <input
            type="password"
            v-model="User.Password2"
            class="form-control"
            v-validate="'required|confirmed:password'"
            placeholder="再次输入密码"
            name="password2"
          />
          <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
          <p v-show="errors.has('password2')" class="text-danger">两次输入的密码不一致</p>
        </div>
        <div class="row">
          <div class="col-xs-8">
            <div class="checkbox icheck">
              <label>
                <input type="checkbox" v-model="User.IsAgree" /> 已阅读并同意
                <a href="#">协议</a>
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button
              type="button"
              class="btn btn-primary btn-block btn-flat"
              @click="register()"
            >Axios注册</button>
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
      </div>-->

      <!-- <a href="login.html" class="text-center">已有账号，去登录！</a> -->
      <button class="text-center btn-link" @click="toLogin()">已有账号，去登录！</button>
    </div>
    <!-- /.form-box -->
  </div>
  <!-- /.register-box -->
</template>

<script>
import { register } from "@/API/users";

export default {
  data() {
    return {
      User: {
        UserName: "",
        Account: "",
        Password: "",
        Password2: "",
        IsAgree: false
      },
      UserName: "",
      IsPwdEqual: true
    };
  },
  methods: {
    toLogin: function() {
      this.$router.push("/");
    },
    register: function() {
      this.$validator.validate().then(valid => {
        if (valid === true) {
          if (!this.User.IsAgree) {
            this.$toast.error({ message: "请阅读协议！" });
            return;
          }
          if (this.User.Password !== this.User.Password2) {
            this.$toast.error({ message: "密码不一致" });
            return;
          }
          register(this.User)
            .then(res => {
              if (res.S) {
                this.$toast.success({ message: "error" });
              } else {
                this.$toast.error({ message: res.M });
              }
            })
            .catch(error => {
              this.$toast.error({ message: error });
            });
        } else {
          this.$toast.error({ message: "请按表单要求填写！" });
        }
      });
    }
  },
  mounted() {
    this.$validator.localize("zh_CN", {
      attributes: {
        UserName: "用户名",
        Account: "账号",
        password: "密码",
        password2: "再次输入密码"
      }
    });
  }
};
</script>

<style>
</style>
