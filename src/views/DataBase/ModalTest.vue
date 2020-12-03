<template>
  <div>
    <!-- <div class="modal fade in" id="modal-default" style="display:block;"> -->
    <div class="modal fade" id="tableAdd">
      <div class="modal-dialog dialog-width">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title">弹出框</h4>
          </div>
          <div class="modal-body">
            <h1>是否关闭</h1>
            <button @click="ok($event)">确定</button>
            <button @click="close2()">取消</button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger pull-left" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-success" @click="save()">确定</button>
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
  props: {
    msg: String,
    IsShow: Boolean,
    close: Function
  },
  data() {
    return {

    };
  },
  methods: {
    close2() {
      this.IsShow=true;
    },
    ok() {
      this.IsShow=false;
      this.$emit('close',this.msg);
    }
  }
};
</script>
