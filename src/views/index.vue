<template>
  <div class="wrapper">
    <navbar></navbar>
    <sidemenu></sidemenu>
    <transition name="fade" mode="out-in">
      <contentMain></contentMain>
    </transition>
  </div>
</template>
<script>
import navbar from "@/layout/Navbar/navbar";
import sidemenu from "@/layout/sidebar/sidemenu";
import sidebar from "@/layout/sidebar/sidebar";
import contentMain from "@/layout/ContentMain/contentMain";

export default {
  name: "index2",
  components: {
    navbar,
    sidebar,
    sidemenu,
    contentMain
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
