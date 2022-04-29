<template>
  <div>
    <h1>错误</h1>
    <span class="text-bold">错误码：</span>{{this.$route.params.status}}
    <span class="text-bold">错误信息</span>{{this.$route.params.msg}}
    <router-link :to="{name:'Index'}">返回登录页</router-link>
  </div>
</template>
<script>
export default {
  mounted() {
  }
};
</script>
