<template>
  <div>
    <section class="content">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="box box-primary">
            <div class="box-header">
              <h3 class="box-title">表信息</h3>
            </div>
            <div class="box-body table-responsive no-padding">
              <div class="form-horizontal">
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">创建人</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <input type="text" class="form-control" disabled v-model="tableInfo.CreatedBy" />
                  </div>
                </div>
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">创建时间</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <input
                      type="text"
                      class="form-control"
                      disabled
                      v-model="tableInfo.CreatedDate"
                    />
                  </div>
                </div>
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">修改人</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <input type="text" class="form-control" disabled v-model="tableInfo.UpdatedBy" />
                  </div>
                </div>
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">修改时间</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <input
                      type="text"
                      class="form-control"
                      disabled
                      v-model="tableInfo.UpdatedDate"
                    />
                  </div>
                </div>
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">表名</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <input type="text" class="form-control" disabled v-model="tableInfo.TableName" />
                  </div>
                </div>
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">中文名称</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <input
                      type="text"
                      class="form-control"
                      disabled
                      v-model="tableInfo.TableName_CN"
                    />
                  </div>
                </div>
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">英文名称</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <input
                      type="text"
                      class="form-control"
                      disabled
                      v-model="tableInfo.TableName_EN"
                    />
                  </div>
                </div>
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">数据库类型</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <input type="text" class="form-control" disabled v-model="tableInfo.DBType" />
                  </div>
                </div>
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">数据名称</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <input type="text" class="form-control" disabled v-model="tableInfo.DBName" />
                  </div>
                </div>
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">数据库链接</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <input type="text" class="form-control" disabled v-model="tableInfo.DBCon" />
                  </div>
                </div>
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">备注</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <input type="text" class="form-control" disabled v-model="tableInfo.Remark" />
                  </div>
                </div>
                <div class="form-group col-xs-12 col-sm-9 col-md-6 col-lg-3">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-4">列名</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <input type="text" class="form-control" disabled v-model="tableInfo.ID" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="box box-primary">
            <div class="box-header">
              <h3 class="box-title">字段列表</h3>
            </div>
            <div class="padder-xs margin-bottom">
              <div class="form-inline">
                <router-link
                  class="btn btn-success"
                  :to="{name:'ColumnAdd',params:{tableID:tableID}}"
                >
                  <i class="glyphicon glyphicon-plus"></i>
                  新增
                </router-link>
                <div class="form-group">
                  <div class="input-group">
                    <input class="form-control" v-model="columnName" placeholder="列名" />
                    <span class="input-group-addon">
                      <a href="#" @click.prevent="columnName=''">
                        <i class="glyphicon glyphicon-trash text-red"></i>
                      </a>
                    </span>
                  </div>
                  <div class="input-group">
                    <input class="form-control" v-model="columnName_CN" placeholder="列中文" />
                    <span class="input-group-addon">
                      <a href="#" @click.prevent="columnName_CN=''">
                        <i class="glyphicon glyphicon-trash text-red"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <button class="form-control btn btn-success" @click="DataBind()">
                  <i class="glyphicon glyphicon-search"></i>
                  查询
                </button>
              </div>
            </div>
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover table-striped text-nowrap">
                <tbody>
                  <tr>
                    <th>操作</th>
                    <th>ID</th>
                    <th>创建时间</th>
                    <th>创建人</th>
                    <th>修改人</th>
                    <th>修改日期</th>
                    <th>Deleted</th>
                    <th>列名</th>
                    <th>中文名称</th>
                    <th>英文名称</th>
                    <th>类型</th>
                    <th>大小</th>
                    <th>是否可空</th>
                    <th>默认值</th>
                    <th>备注</th>
                  </tr>
                  <tr v-for="item in List" :key="item.ID">
                    <td>
                      <button class="btn btn-xs bg-purple">
                        <i class="fa fa-edit"></i>
                      </button>
                      <button class="btn btn-xs btn-danger">
                        <i class="fa fa-trash-o"></i>
                      </button>
                    </td>
                    <td>{{item.ID}}</td>
                    <td class>{{item.CreatedDate}}</td>
                    <td>{{item.CreatedBy}}</td>
                    <td>{{item.UpdatedBy}}</td>
                    <td>{{item.UpdatedDate}}</td>
                    <td>{{item.Deleted}}</td>
                    <td>{{item.ColumnName}}</td>
                    <td>{{item.ColumnName_CN}}</td>
                    <td>{{item.ColumnName_EN}}</td>
                    <td>{{item.ColumnType}}</td>
                    <td>{{item.Size}}</td>
                    <td>
                      <div class="icheck-primary">
                        <input type="checkbox" v-model="item.IsNullable" />
                      </div>
                    </td>
                    <td>{{item.DefaultValue}}</td>
                    <td>{{item.Remark}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <pagination
            :pageSize="page.pageSize"
            :pageIndex.sync="page.pageIndex"
            :totalCount="page.totalCount"
            @pageChange="dataBind"
          ></pagination>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getTableDetail } from "@/API/table";
export default {
  data() {
    return {
      tableID: 1,
      columnName: "",
      columnName_CN: "",
      List: [],
      tableInfo: {},
      page: { pageSize: 12, pageIndex: 1, totalCount: 0 }
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    dataBind() {
      getTableDetail({
        tableID: this.tableID,
        page: this.page
      }).then(response => {
        if (response.S) {
          this.tableInfo = response.D.Table[0];
          console.log(response.D);
          this.List = response.D.Table1;
          this.page.totalCount = response.D.Table2[0].TotalCount;
        } else {
          this.$toast.error({ message: response.M });
        }
      });
    }
  },
  mounted() {
    this.tableID = this.$route.params.tableID;
    this.dataBind();
  }
};
</script>
