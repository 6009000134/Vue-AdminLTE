<template>
  <div id="app">
    <load :IsShow.sync="isLoading"></load>
    <router-view />
  </div>
</template>

<script>
import load from "@/components/Modal/loading.vue";
export default {
  name: "App",
  data() {
    return {
      showLoading: false
    };
  },
  components: {
    load
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  },mounted(){
    console.log('111');
  }
};
</script>
