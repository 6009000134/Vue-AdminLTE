<template>
  <div>
    <h1>错误</h1>
    <span class="text-bold">错误码：</span>{{this.$route.params.status}}
    <span class="text-bold">错误信息</span>{{this.$route.params.msg}}
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$route);
  }
};
</script>
