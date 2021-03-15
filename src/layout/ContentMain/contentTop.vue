<template>
  <section class="content-header fade-item">
    <h1>
      {{this.$route.meta.title}}
      <small>{{this.$route.meta.subtitle}}</small>
    </h1>
    <ol class="breadcrumb">
      <!-- <li class="active">{{this.$route.meta.title}}</li> -->
      <li
        v-for="(item,key) in this.routePath"
        :key="key"
        :class="{'active':item.path==$route.path}"
      >
        <router-link v-if="item.path!=$route.path" :to="item.path">
          <i class="fa fa-dashboard"></i>
          {{item.meta.title}}
        </router-link>
        <span v-if="item.path==$route.path">{{item.meta.title}}</span>
      </li>
    </ol>
  </section>
</template>
<script>
export default {
  data() {
    return {
      routePath: []
    };
  },
  mounted() {
    this.routePath = this.$route.matched;
  },
  updated() {
    this.routePath = this.$route.matched;
  }
};
</script>
