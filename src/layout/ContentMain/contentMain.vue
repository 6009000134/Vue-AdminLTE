<template>
<div class="content-wrapper" style="min-height: 921px;">
    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
    <!-- Content Header (Page header) -->
    <!-- <section class="content-header">
      <h1>
        Dashboard
        <small>Control panel</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
      </ol>
    </section> -->

    <!-- Main content -->
    <!-- <section class="content">
      <div class="row">
      </div>

    </section> -->
    <!-- /.content -->
  </div>
</template>

<script>
export default{

};
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
  transition:opacity .5s;
}
</style>
