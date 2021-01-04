<template>
  <div>
    <transition name="fade" mode="out-in">
    <router-view :to="{name:'APIList'}"></router-view>
    </transition>
  </div>
</template>
<script>
export default {};
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
</style>
