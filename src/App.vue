<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
// import User from './components/index.vue'
// import User from './views/Login/login'
export default {
  name: 'App'// ,
  // components:{
  //   User
  // }
}
</script>

<style>
.fade-enter {
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
  transition:opacity 0s;
}
</style>
