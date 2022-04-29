<template>
  <div>
    <input :class=cusClass type="text" v-model="cusCount" >
    <button @click="Add($event)">+</button>
    <button @click="Sub">-</button>
  </div>
</template>
<script>
export default {
  props: {
    cusClass: {type: String,
      required: false,
      default: "form-control"
    },
    cusCount: {type: Number,
      required: false,
      default: 1}
  },
  data() {
    return{
      msg: '123',
      myCount: this.cusCount
    };
  },
  methods: {
    Add(e) {
      this.cusCount++;
      this.$emit('input',this.cusCount);
    },
    Sub() {
      this.cusCount--;
    }
  }
};
</script>
