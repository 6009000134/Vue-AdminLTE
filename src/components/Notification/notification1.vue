<template>
  <div class="content" v-if="visible">
    <div class="modal fade in" style="margin:auto;display:block;pointer-events:none;height:300px;">
      <div class="col-md-offset-3 col-md-6" style="pointer-events:auto;">
        <div class="box box-default">
          <div class="box-head">
            <h1>{{title}}</h1>
            <input type="text" />
          </div>
          <div class="box-body">{{content}}</div>
          <div class="box-footer">
            <button class="btn btn-primary pull-right" @click="close">关闭</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade in" @click="close">></div>
  </div>
</template>
<script>
export default {
  name: "Notification1",
  data() {
    return {
      title: "Notification1",
      content: "内容xxx",
      visible: true
    };
  },
  methods: {
    close() {
      this.visible = !this.visible;
    }
  }
};
</script>
<style>
</style>