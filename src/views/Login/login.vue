<template>
  <div class>
    <div class="skin-black">
      <header class="main-header ">
        <nav class="navbar navbar-static-top">
          <div class="navbar-custom-menu bg-">
            <ul class="nav navbar-nav">
              <!-- User Account: style can be found in dropdown.less -->
              <li class="dropdown user user-menu">
                <router-link :to="{name:'Todo'}"><span>Todos</span></router-link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>

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
                  <input v-model="IsRemberMe" @change="IsRember($event)" type="checkbox" />
                  记住我
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
import { login, validateToken } from "@/API/login";
import { getToken } from "@/utils/auth";
export default {
  name: "login",
  data() {
    return {
      User: {
        Account: "",
        Password: ""
      },
      IsRemberMe: false
    };
  },
  methods: {
    login: function() {
      if (this.IsRemberMe) {
        localStorage.setItem("Account", this.User.Account);
      }
      const that = this;
      login(this.User)
        .then(function(data) {
          console.log(data);return;
          if (data.S) {
            that.$router.push({ name: "DataBase" });
          } else {
            console.log(data);
            that.$toast.error({ message: "错误信息：" + data.M });
          }
        })
        .catch(function(data) {
          that.$toast.error({ message: "异常信息：" + data });
        });
      // this.$router.push('Index')
    },
    register: function() {
      this.$router.push({ path: "/Register" });
    },
    forgetPwd: function() {},
    IsRember(obj) {
      localStorage.setItem("IsRemberMe", obj.target.checked);
    },
    validateToken(token) {
      // 校验Token
      validateToken(token)
        .then(response => {
          return response.S;
        })
        .catch(error => {
          this.$toast.error({
            message: "Token校验失败：" + error + "。请重新登录!"
          });
        });
    }
  },
  mounted() {
    if (getToken() !== "") {
      if (validateToken(getToken())) {
      }
    }
    if (localStorage.getItem("IsRemberMe")) {
      this.IsRemberMe = localStorage.getItem("IsRemberMe") === "true";
      if (localStorage.getItem("Account") !== "") {
        this.User.Account = localStorage.getItem("Account");
      }
    }
  }
};
</script>
