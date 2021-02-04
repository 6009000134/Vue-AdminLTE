<template>
  <section class="content-header fade-item">
    <h1>
      {{this.$route.meta.title}}
      <small>{{this.$route.meta.subtitle}}</small>
    </h1>
    <ol class="breadcrumb">
      <li>
        <a href="#">
          <i class="fa fa-dashboard"></i> 首页
        </a>
      </li>
      <li class="active">{{this.$route.meta.title}}</li>
    </ol>
  </section>
</template>
<script>
export default {};
</script>
