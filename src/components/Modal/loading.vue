
<template>
  <transition mode="out-in" name="fadem">
      <div v-if="visiable"
        class="modal fade in"
        :style="{display: display,background:'transparent',height:'300px'}"
      >
        <div class="box box-danger">
          <div class="overlay" style="height:300px;background:transparent">
            <!-- <div class="overlay" style="height:300px;"> -->
            <i class="fa fa-refresh fa-spin"></i>
          </div>
        </div>
        <!-- <div class="modal-backdrop fade in" style="height:100%;background:transparent"></div> -->
        <div class="modal-backdrop fade in" style="height:100%;background:rgba(255, 255, 255, 0.7)"></div>
      </div>
      <!-- /.box -->
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
.fadem-enter {
  opacity: 0;
  /* transform: translateY(-300px); */
}
.fadem-leave-to {
  transform: translateY(-300px);
  opacity: 0;
}
.fadem-enter-active {
  /* transition: all 0.1s; */
}
.fadem-leave-active {
  transition: all 1s;
}
</style>
