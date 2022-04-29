<template>
  <div>
    <select
      v-if="fKey==''&&fValue==''"
      :class="custClass"
      v-model="selectedItem"
      @change="change($event)"
    >
      <option v-for="item in datasource" :key="item" :value="item">{{item}}</option>
    </select>
    <select
      v-if="fKey==''&&fValue!=''"
      :class="custClass"
      v-model="selectedItem"
      @change="change($event)"
    >
      <option v-for="item in datasource" :key="item[fKey]" :value="item">{{item[fValue]}}</option>
    </select>
    <select v-if="fKey!=''" :class="custClass" v-model="selectedItem" @change="change($event)">
      <option v-for="item in datasource" :key="item[fKey]" :value="item[fKey]">{{item[fValue]}}</option>
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
    datasource: Array,
    value: undefined,
    fKey: {
      type: String,
      default: function() {
        return "";
      }
    },
    fValue: {
      type: String,
      default: function() {
        return "";
      }
    },
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
      this.selectedItem = n;
    }
  },
  mounted() {}
};
</script>
