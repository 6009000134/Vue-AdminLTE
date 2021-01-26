<template>
<div class="wrapper">
  <navbar></navbar>
  <sidemenu></sidemenu>
  <contentMain></contentMain>
</div>
</template>
<script>
import navbar from '@/layout/Navbar/navbar';
import sidemenu from '@/layout/sidebar/sidemenu';
import sidebar from '@/layout/sidebar/sidebar';
import contentMain from '@/layout/ContentMain/contentMain';

export default {
  name: 'index2',
  components: {
    navbar,
    sidebar,
    sidemenu,
    contentMain
  }
};
</script>
