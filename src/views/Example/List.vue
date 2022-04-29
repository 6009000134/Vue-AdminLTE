<template>
  <div>
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <!--Start Box-->
          <div class="box box-primary">
            <div class="box-header">
              <h3 class="box-title">标题</h3>
            </div>
            <div class="mailbox-controls">
              <div class="form-inline">
                <!--start Condition-->
                <div class="form-group">
                  <!--Start 表单组-->
                  <div class="input-group">
                    <f-select
                      v-model="DBInfo"
                      f-value="DBName"
                      cust-class="form-control"
                      :datasource="DBList"
                    ></f-select>
                    <span class="input-group-addon">
                      <a href="javascript:void(0)" @click="DBInfo=undefined">
                        <i class="glyphicon glyphicon-trash text-red"></i>
                      </a>
                    </span>
                  </div>
                  <!--End 表单组-->
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" v-model="TableName" placeholder="表名" />
                </div>
                <button class="btn btn-success" @click="Add()">新增</button>
              </div>
            </div>
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover table-striped text-nowrap">
                <tbody>
                  <tr>
                    <th>操作</th>
                    <th>ID</th>
                    <th>创建时间</th>
                    <th>创建日期</th>
                  </tr>
                  <tr v-for="item in TableList" :key="item.ID">
                    <td>
                      <router-link
                        title="详细信息"
                        class="btn btn-xs bg-green"
                        :to="{name:'TableDetailInfo',params:{tableID:item.ID}}"
                      >
                        <i class="fa fa-search"></i>
                      </router-link>
                      <button class="btn btn-xs bg-purple" @click="Edit(item)">
                        <i class="fa fa-edit"></i>
                      </button>
                      <button class="btn btn-xs btn-danger" @click="Delete(item.ID)">
                        <i class="fa fa-trash-o"></i>
                      </button>
                      <button class="btn btn-xs bg-yellow" @click="GeneratePage(item.ID)">生成页面</button>
                    </td>
                    <td>{{item.ID}}</td>
                    <td class>{{item.CreatedDate}}</td>
                    <td>{{item.CreatedBy}}</td>
                  </tr>
                </tbody>
              </table>

              <div class="box-footer">
                <pagination
                  class=""
                  :pageSize="10"
                  :pageIndex.sync="pageIndex"
                  @pageChange="DataBind()"
                  :totalCount="90"
                ></pagination>
              </div>
            </div>
          </div>
          <!--End Box-->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { getDBList } from "@/API/db";
import { getTableList, deleteTable } from "@/API/table";
import $ from "jquery";
export default {
  name: "DB",
  data() {
    return {
      DBList: [],
      TableList: [],
      DBInfo: "",
      TableName: "",
      pageIndex: 1
    };
  },
  methods: {
    Add() {},
    DataBind() {
      console.log(this.pageIndex);
    }
  },
  created() {
    this.DBCon = "Default";
    getDBList()
      .then(res => {
        this.DBList = res.D;
        return res.D;
      })
      .catch(error => {
        this.$toast.error({ message: "错误信息：" + error });
      });
    getTableList(this.DBCon)
      .then(res => {
        if (res.S) {
          this.TableList = res.D;
        } else {
          this.$toast.error({ message: res.M });
        }
      })
      .catch(function(data) {});
  }
};
</script>
<style>
.myclass2 {
  height: 200px;
}
</style>
