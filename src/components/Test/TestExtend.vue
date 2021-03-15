<template>
  <div>
    <!-- <div class="modal fade in" id="modal-default" style="display:block;"> -->
    <div class="modal fade">
      <div class="modal-dialog dialog-width">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>{{msg}}</p>
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
import { getDBList } from "@/API/DB";
export default {
  data() {
    return {
      msg: "123"
    };
  },
  methods: {
    setData(data) {
      this.msg = data;
    }
  },
  created() {
    getDBList()
      .then(res => {
        return res.D;
      })
      .catch(error => {
        this.$toast.error({ message: "错误信息：" + error });
      });
  }
};
</script>
