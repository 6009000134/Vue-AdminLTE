<template>
  <div>
    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box">
            <div class="box-header">
              <h3>标题</h3>
            </div>
            <div class="form-horizontal">
              <div class="box-body">
                <div class="form-group">
                  <label class="control-label col-sm-1">列名</label>
                  <div class="col-sm-3">
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="columnInfo.ColumnName" />
                      <span class="input-group-addon">
                        <a href="#" @click.prevent="columnInfo.ColumnName=''">
                          <i class="glyphicon glyphicon-trash text-red"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <label class="control-label col-sm-1">英文名称</label>
                  <div class="col-sm-3">
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="columnInfo.ColumnName_EN" />
                      <span class="input-group-addon">
                        <a href="#" @click.prevent="columnInfo.ColumnName_EN=''">
                          <i class="glyphicon glyphicon-trash text-red"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <label class="control-label col-sm-1">中文名称</label>
                  <div class="col-sm-3">
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="columnInfo.ColumnName_CN" />
                      <span class="input-group-addon">
                        <a href="#" @click.prevent="columnInfo.ColumnName_CN=''">
                          <i class="glyphicon glyphicon-trash text-red"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-1">类型</label>
                  <div class="col-sm-3">
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="columnInfo.ColumnName" />
                      <span class="input-group-addon">
                        <a href="#" @click.prevent="columnInfo.ColumnName=''">
                          <i class="glyphicon glyphicon-trash text-red"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <label class="control-label col-sm-1">尺寸</label>
                  <div class="col-sm-3">
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="columnInfo.ColumnName" />
                      <span class="input-group-addon">
                        <a href="#" @click.prevent="columnInfo.ColumnName=''">
                          <i class="glyphicon glyphicon-trash text-red"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <label class="control-label col-sm-1">是否可空</label>
                  <div class="col-sm-3">
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="columnInfo.ColumnName" />
                      <span class="input-group-addon">
                        <a href="#" @click.prevent="columnInfo.ColumnName=''">
                          <i class="glyphicon glyphicon-trash text-red"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-1">默认值</label>
                  <div class="col-sm-3">
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="columnInfo.ColumnName" />
                      <span class="input-group-addon">
                        <a href="#" @click.prevent="columnInfo.ColumnName=''">
                          <i class="glyphicon glyphicon-trash text-red"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <label class="control-label col-sm-1">备注</label>
                  <div class="col-sm-3">
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="columnInfo.ColumnName" />
                      <span class="input-group-addon">
                        <a href="#" @click.prevent="columnInfo.ColumnName=''">
                          <i class="glyphicon glyphicon-trash text-red"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-footer">
              <!-- <button class="btn btn-success" @click="test()">测试</button> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// import { getDBList } from "@/API/DB";
// import { addTable } from "@/API/Table";

export default {
  data() {
    return {
      columnInfo: {
        TableID: undefined,
        ColumnName: undefined,
        ColumnName_EN: undefined,
        ColumnName_CN: undefined,
        ColumnType: undefined,
        Size: undefined,
        IsNullable: undefined,
        DefaultValue: undefined,
        Remark: undefined
      }
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
  methods: {},
  watch: {},
  mounted() {},
  create() {
    this.columnInfo.TableID = this.$route.params.tableID;
  }
};
</script>

<style>
.dialog-width {
  width: 900px;
}
</style>
