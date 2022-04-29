<template>
  <div>
    <h1>123</h1>
    <input type="text" v-model="id" />
    <button class="btn btn-primary" @click="query">query</button>
  </div>
</template>
<script>
import { query } from "@/API/query.js";
export default {
  data() {
    return { id: 1 };
  },
  methods: {
    query() {
      query(this.id).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
