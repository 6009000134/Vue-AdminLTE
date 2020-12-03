<template>
  <div>
    <select :class="custClass" v-model="selectedItem" @change="change($event)">
      <option v-for="item in dt" :key="item.Key" :value="item">{{item.Key}}</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedItem: this.value,
      dataset: {},
      rawHtml: ""
    };
  },
  props: {
    dt: Array,
    rt: String,
    value: undefined,
    custClass: {
      type: String,
      default: function() {
        return "form-control";
      }
    }
  },
  methods: {
    change(e) {
      // if (this.rt === "k") {
      //   this.$emit("input",this.value=this.selectedItem.Key);
      //   // console.log('selectedItemIndex',e.target.selectedIndex);
      // } else if (this.rt === "v") {
      //   this.$emit("input",this.value=this.selectedItem.Value);
      // } else {
      //   this.value=this.selectedItem;
      // }
      // this.value=this.selectedItem;
      this.$emit("input", this.selectedItem);
      // this.parseToParent();
    },
    parseToParent() {
      this.$emit("input", this.selectedItem);
    }
  },
  watch: {
    value(n, o) {
      console.log("watch", n, o);
      this.selectedItem = n;
    }
  }
};
</script>
