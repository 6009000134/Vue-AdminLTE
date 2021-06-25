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
            <div class="form-horizontal">
              <div class="form-group">
                <div class="col-sm-4">
                  <label class="control-label col-sm-4 padding-xs">数据库</label>
                  <div class="col-sm-8 padding-xs">
                    <f-select
                      v-model="tableInfo2.DBInfo"
                      f-value="DBName"
                      :datasource="DBList"
                    ></f-select>
                  </div>
                </div>
                <div class="col-md-4">
                  <label class="control-label col-md-4 padding-xs">表名</label>
                  <div class="col-md-8 padding-xs">
                    <input type="text" v-model="tableInfo2.TableName" class="form-control" />
                  </div>
                </div>
                <div class="col-md-4">
                  <label class="control-label col-md-4 padding-xs">中文名称</label>
                  <div class="col-md-8 padding-xs">
                    <input type="text" v-model="tableInfo2.TableName_CN" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-4">
                  <label class="control-label col-md-4 padding-xs">英文名称</label>
                  <div class="col-md-8 padding-xs">
                    <input type="text" v-model="tableInfo2.TableName_EN" class="form-control" />
                  </div>
                </div>
                <div class="col-md-4">
                  <label class="control-label col-md-4 padding-xs">备注</label>
                  <div class="col-md-8 padding-xs">
                    <input type="text" v-model="tableInfo2.Remark" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
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
import $ from "jquery";
import { getDBList } from "@/API/db";
import { addTable } from "@/API/table";

export default {
  props: ["dbname", "status", "tableInfo2"],
  data() {
    return {
      tableInfo: {
        // DBInfo: undefined,
        // Status: this.status,
        // TableName: undefined,
        // TableName_EN: undefined,
        // TableName_CN: undefined,
        // Remark: undefined
      },
      DBList: []
    };
  },
  created() {
    // getDBList().then(res => {
    //   this.DBList = res.D;
    // });
    // 此种用法会报DBList undefined，因为此处的this不是vue对象
    //   getDBList().then(function(data) {
    //   this.DBList=data.D;
    // });
  },
  methods: {
    save() {
      let model = {
        TableName: this.tableInfo2.TableName,
        TableName_EN: this.tableInfo2.TableName_EN,
        TableName_CN: this.tableInfo2.TableName_CN,
        Remark: this.tableInfo2.Remark,
        DBCon: this.tableInfo2.DBInfo.DBCon,
        DBTypeCode: this.tableInfo2.DBInfo.DBTypeCode,
        DBType: this.tableInfo2.DBInfo.DBType,
        DBName: this.tableInfo2.DBInfo.DBName
        // DBTypeCode: this.tableInfo2.DBInfo.Value
      };
      addTable(model).then(res => {
        if (res.S) {
          this.$toast.success({ message: "添加成功！" });
          this.Status = false;
          $("#tableAdd").modal("hide");
          this.$emit("close", this.Status);
        } else {
          this.$toast.error({ message: "添加失败！" + res.M });
        }
      });
    }
  },
  watch: {
    Status() {
      if (this.status) {
      } else {
      }
    }
  },
  mounted() {
    getDBList().then(res => {
      this.DBList = res.D;
    });
  }
};
</script>

<style>
.dialog-width {
  width: 900px;
}
</style>
