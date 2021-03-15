<template>
  <div>
    <h1>错误</h1>
    <h1>{{this.$router}}</h1>
    <router-link :to="{name:'Index'}">返回登录页</router-link>
  </div>
</template>
<script>
export default {
  mounted() {
  }
};
</script>
