<template>
  <!-- <input type='text' v-bind:value='values' v-on:input='showInput($event)'> -->
  <input type="text" v-model="d" @input="showInput()" />
</template>
<script>
export default {
  data() {
    return {
      d: ""
    };
  },
  props: {
    value: String
  },
  methods: {
    showInput() {
      // this.value=e.target.value;
      this.$emit("input", this.d);
    }
  }
};
</script>
