<template>
  <div class="content-wrapper fade-item" style="min-height: 921px;">
    <contentTop></contentTop>
    <router-view class="fade-item"></router-view>
  </div>
</template>
<script>
import contentTop from "./contentTop";
export default {
  components: {
    contentTop
  }
};
</script>
