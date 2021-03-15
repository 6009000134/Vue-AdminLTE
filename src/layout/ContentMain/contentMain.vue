<template>
  <div class="content-wrapper" style="min-height: 921px;">
    <contentTop></contentTop>
    <router-view ></router-view>
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
