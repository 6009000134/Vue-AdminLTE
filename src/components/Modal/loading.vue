
<template>
<transition mode="out-in" name="fadem">
  <div v-if="visiable">
    <div class="modal fade in" :style="{display: display,background:'transparent',height:'300px'}">
      <div class="box box-danger">
        <div class="overlay" style="height:100px;">
          <i class="fa fa-refresh fa-spin"></i>
        </div>
      </div>
    </div>
    <!-- /.box -->
    <div class="modal-backdrop fade in" style="height:300px;background:transparent"></div>
  </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      display: "block",
      padRight: 17
    };
  },
  props: {
    IsShow: {
      type: Boolean
    },
    title: {
      type: String
    },
    content: {
      type: String
    }
  },
  methods: {
    closeModal() {
      // this.display = "none";
      // this.padRight = 0;
      this.visiable = !this.visiable;
      this.$emit("update:IsShow", !this.IsShow);
    }
  },
  computed: {
    visiable: function() {
      return this.IsShow;
    }
  }
};
</script>

<style>
.dialog-width {
  width: 900px;
}
.fadem-enter {
  opacity: 0;
  transform: translateY(-30px);
}
.fadem-leave-to{
  transform: translateY(30px);
  opacity: 0;
}
.fadem-enter-active{
transition: all .5s;
}
.fadem-leave-active{
  transition: all .5s ;
}
</style>

