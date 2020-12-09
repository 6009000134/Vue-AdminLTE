<template>
  <div>
    <h1>错误</h1>
    <h1>{{this.$router}}</h1>
  </div>
</template>
<script>
export default {
  mounter() {
    console.log(this.$router);
  }
};
</script>
