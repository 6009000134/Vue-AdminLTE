<template>
<div>
        <!-- <div class="modal fade in" id="modal-default" style="display:block;"> -->
        <div class="modal fade" id="tableAdd" >
          <div class="modal-dialog dialog-width">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">弹出框</h4>
              </div>
              <div class="modal-body">
                <div class="form-horizontal">
                  <div class="form-group">
                    <div class="col-sm-4">
                      <label class="control-label col-sm-4 padding-xs">数据库</label>
                      <div class="col-sm-8 padding-xs">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label class="control-label col-md-4 padding-xs">表名</label>
                      <div class="col-md-8 padding-xs">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-4 ">
                      <label class="control-label col-md-4 padding-xs">中文名称</label>
                      <div class="col-md-8 padding-xs">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-4">
                      <label class="control-label col-md-4 padding-xs">英文名称</label>
                      <div class="col-md-8 padding-xs">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label class="control-label col-md-4 padding-xs">备注</label>
                      <div class="col-md-8 padding-xs">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger pull-left "  data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-success" @click="save()" >确定</button>
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
import $ from 'jquery'
export default{
  props: ['dbname', 'status'],
  data () {
    return {
      DBName: this.dbname,
      Status: this.status,
      tableInfo: {
        name: ''
      }
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    save () {
      this.Status = false
      console.log(2, this.DBName)
      $('#tableAdd').modal('hide')
      this.$emit('close', this.Status)
    }
  },
  watch: {
    Status () {
      if (this.status) {
        console.log('sss')
      } else {
        console.log('ddd')
      }
    }
  }
}
</script>

<style>
.dialog-width{width:900px;}
</style>
