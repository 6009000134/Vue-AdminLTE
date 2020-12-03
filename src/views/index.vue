<template>
<div class="wrapper">
  <navbar></navbar>
  <sidebar></sidebar>
  <contentMain></contentMain>
</div>
</template>
<script>
import navbar from '@/layout/Navbar/navbar';
import sidebar from '@/layout/sidebar/sidebar';
import contentMain from '@/layout/ContentMain/contentMain';

export default {
  name: 'index2',
  components: {
    navbar,
    sidebar,
    contentMain
  }
};
</script>
