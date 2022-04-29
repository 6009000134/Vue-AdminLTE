<template>
  <div>
    <!-- <div class="modal fade in" id="modal-default" style="display:block;"> -->
    <div class="modal fade" v-bind:id="ids">
      <div class="modal-dialog dialog-width">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title">{{title==undefined?'弹出框':title}}</h4>
          </div>
          <div class="modal-body">
            <p>{{content==undefined?'':content}}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary">确定</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      IDs: "modal-default" + new Date().toLocaleString()
    };
  },
  props: ["title", "ids", "content"],
  methods: {
    showData() {
    }
  }
};
</script>

<style>
.dialog-width {
  width: 900px;
}
</style>
