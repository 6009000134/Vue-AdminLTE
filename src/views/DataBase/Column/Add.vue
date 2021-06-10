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
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">尺寸</label>
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
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">是否可空</label>
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
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">默认值</label>
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
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">备注</label>
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
              </div>
            </div>
            <div class="box-footer">
              <!-- <button class="btn btn-success" @click="test()">测试</button> -->
              <button class="btn btn-success" @click="cons()">测试</button>
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
      },
      tableInfo: {}
    };
  },
  methods: {
    cons() {
      console.log(this.columnInfo);
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
