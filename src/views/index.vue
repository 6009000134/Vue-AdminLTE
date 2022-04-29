<template>
  <div class="wrapper">
    <navbar></navbar>
    <sidemenu></sidemenu>
    <div class="content-wrapper" style="min-height: 921px;">
      <contentTop></contentTop>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <!-- <contentMain></contentMain> -->
  </div>
</template>
<script>
import navbar from "@/layout/Navbar/navbar";
import sidemenu from "@/layout/sidebar/sidemenu";
import sidebar from "@/layout/sidebar/sidebar";
// import contentMain from "@/layout/ContentMain/contentMain";
import contentTop from "@/layout/ContentMain/contentTop";
export default {
  name: "index2",
  components: {
    navbar,
    sidebar,
    sidemenu,
    // contentMain,
    contentTop
  }
};
</script>
<style>
.fade-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-leave-active {
  transition: all 0.5s;
}
/* .fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
} */
</style>
