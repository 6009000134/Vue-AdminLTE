<template>
  <div>
    <section class="content-header">
      <h1>
        数据表
        <small>列表</small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <a href="#">
            <i class="fa fa-dashboard"></i> 首页
          </a>
        </li>
        <li class="active">数据表</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
        
    </section>
  </div>
</template>

<script>
export default{
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
