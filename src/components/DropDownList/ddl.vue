<template>
<select :class="custClass" v-model="selectedItem" @change="change($event)" >
    <option v-for='item in dt' :key='item.Key' :value='item' >{{item.Key}}</option>
</select>
</template>
<script>
export default{
  data () {
    return {
      selectedItem: undefined,
      dataset: {},
      rawHtml: ''
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
      if(this.rt === 'k') {
        this.$emit('input',this.selectedItem.Key);
        // console.log('selectedItemIndex',e.target.selectedIndex);
      }else if(this.rt==='v') {
        this.$emit('input',this.selectedItem.Value);
      }else{
        console.log('ddl',this.selectedItem);
        this.$emit('input',this.selectedItem);
      }
    }
  },
  created () {
  }
};
</script>
