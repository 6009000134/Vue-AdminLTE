<template>
  <div>
    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-12 col-lg-12">
          <div class="box">
            <div class="box-header">
              <h3>标题</h3>
            </div>
            <div class="form-horizontal">
              <div class="box-body">
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">列名</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
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
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">英文名称</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="columnInfo.ColumnName_EN" />
                      <span class="input-group-addon">
                        <a href="#" @click.prevent="columnInfo.ColumnName_EN=''">
                          <i class="glyphicon glyphicon-trash text-red"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">中文名称</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
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
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">类型</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="columnInfo.ColumnType" />
                      <span class="input-group-addon">
                        <a href="#" @click.prevent="columnInfo.ColumnType=''">
                          <i class="glyphicon glyphicon-trash text-red"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">尺寸</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="columnInfo.Size" />
                      <span class="input-group-addon">
                        <a href="#" @click.prevent="columnInfo.Size=''">
                          <i class="glyphicon glyphicon-trash text-red"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">是否可空</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <label class="control-label">
                      <input type="checkbox" v-model="columnInfo.IsNullable" />
                    </label>
                    <!-- <div class="input-group">
                      <input type="text" class="form-control" v-model="columnInfo.IsNullable" />
                      <span class="input-group-addon">
                        <a href="#" @click.prevent="columnInfo.IsNullable=''">
                          <i class="glyphicon glyphicon-trash text-red"></i>
                        </a>
                      </span>
                    </div>-->
                  </div>
                </div>
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">默认值</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="columnInfo.DefaultValue" />
                      <span class="input-group-addon">
                        <a href="#" @click.prevent="columnInfo.DefaultValue=''">
                          <i class="glyphicon glyphicon-trash text-red"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">备注</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="columnInfo.Remark" />
                      <span class="input-group-addon">
                        <a href="#" @click.prevent="columnInfo.Remark=''">
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
              <button class="btn btn-success" @click="$router.go(-1);"><i class="fa fa-arrow-left"> 返回</i></button>
              <button class="btn btn-success" @click="add()"><i class="fa fa-save"> 保存</i></button>
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
import { addColumn } from "@/API/column.js";
export default {
  data() {
    return {
      columnInfo: {
        TableID: undefined,
        ColumnName: "test",
        ColumnName_EN: "test",
        ColumnName_CN: "test",
        ColumnType: "varchar",
        Size: 10,
        IsNullable: false,
        DefaultValue: undefined,
        Remark: undefined
        // TableID: undefined,
        // ColumnName: undefined,
        // ColumnName_EN: undefined,
        // ColumnName_CN: undefined,
        // ColumnType: undefined,
        // Size: undefined,
        // IsNullable: undefined,
        // DefaultValue: undefined,
        // Remark: undefined
      },
      tableInfo: {}
    };
  },
  methods: {
    add() {
      addColumn(this.columnInfo).then(res => {
        console.log(res);
        if (res.S) {
        } else {
          this.$toast.error({ message: res.M });
        }
      });
    }
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
  watch: {},
  mounted() {
    this.columnInfo.TableID = this.$route.params.tableID;
  },
  create() {}
  // ,
  // beforeRouteLeave(to, from, next) {
  //   console.log(to.name,from.name);
  //   if (to.name === "TableDetailInfo") {
  //     to.meta.keepAlive = true;
  //   } else {
  //     to.meta.keepAlive = false;
  //   }
  //   next();
  // }
};
</script>
