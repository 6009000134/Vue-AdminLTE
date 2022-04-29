<template>
  <div>
    <input type="text" v-model="count" class="form-control" />
    <button @click="add">+</button>
    <button @click="minus">-</button>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number
    },
    clear: {
      type: Function
    },
    count2: {
      type: Number,
      default: 0
    },
    ms: {
      type: Object
    }
  },
  data() {
    return {
      count: 0,
      count3: this.count2,
      user: JSON.parse(JSON.stringify(this.ms))
    };
  },
  methods: {
    add() {
      this.ms.age++;
      this.user.name = "111";
      this.count++;
      console.log(this.ms);
      console.log(this.user);
      this.$emit("input", this.count);
    },
    minus() {
      this.count--;
      this.$emit("input", this.count);
    }
  }
};
</script>
