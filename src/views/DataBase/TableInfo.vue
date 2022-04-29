<template>
  <div>
    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-primary">
            <div class="box-header">
              <h3 class="box-title">标题</h3>
            </div>
            <div class="mailbox-controls">
              <div class="form-inline">
                <div class="form-group">
                  <div class="input-group">
                    <f-select
                      v-model="DBInfo"
                      f-value="DBName"
                      cust-class="form-control"
                      :datasource="DBList"
                    ></f-select>
                    <span class="input-group-addon">
                      <a href="#" @click.prevent="DBInfo={}">
                        <i class="glyphicon glyphicon-trash text-red"></i>
                      </a>
                    </span>
                    <!-- <f-select
                      v-model="DBCon"
                      f-key="DBCon"
                      f-value="DBName"
                      cust-class="form-control"
                      :datasource="DBList"
                    ></f-select>
                    <span class="input-group-addon">
                      <a href="#" @click.prevent="DBCon={}">
                        <i class="glyphicon glyphicon-trash text-red"></i>
                      </a>
                    </span>-->
                  </div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" v-model="TableName" placeholder="表名" />
                  <button class="btn btn-success" @click="Add()">新增</button>
                  <!-- <button
                    class="btn btn-success"
                    data-toggle="modal"
                    data-target="#tableAdd"
                    @click="add()"
                  >新增</button>-->
                  <button class="btn btn-success" @click="getTableList()">查询</button>
                </div>
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
                    <th>修改人</th>
                    <th>修改日期</th>
                    <th>Deleted</th>
                    <th>数据库连接</th>
                    <th>数据库类型</th>
                    <th>数据库类型编码</th>
                    <th>表名</th>
                    <th>表中文名</th>
                    <th>表英文名</th>
                    <th>备注</th>
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
                    <td>{{item.UpdateDate}}</td>
                    <td>{{item.UpdateBy}}</td>
                    <td>{{item.Deleted}}</td>
                    <td>{{item.DBName}}</td>
                    <td>{{item.DBType}}</td>
                    <td>{{item.DBTypeCode}}</td>
                    <td>{{item.TableName}}</td>
                    <td>{{item.TableName_CN}}</td>
                    <td>{{item.TableName_EN}}</td>
                    <td>{{item.Remark}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <modal
      v-bind:dbname="DBCon"
      :tableInfo2="tableInfo"
      v-bind:status="DialogStatus"
      v-on:close="dialogClose"
    ></modal>
    <div id="ttt"></div>
  </div>
</template>
<script>
import { getDBList } from "@/API/db";
import { getTableList, deleteTable } from "@/API/table";
import $ from "jquery";
// import modal from '@/views/DataBase/TableAddModal';
// import extendModal from "@/components/Modal/extendModal";
// var mConfirm = Vue.extend(extendModal);
// new mConfirm().$mount('#ttt');
export default {
  name: "DB",
  data() {
    return {
      DBCon: "",
      DBInfo: {},
      TableName: "",
      DialogStatus: false,
      DBList: [],
      TableList: [],
      tableInfo: {
        DBCon: undefined,
        Status: this.status,
        TableName: undefined,
        TableName_EN: undefined,
        TableName_CN: undefined,
        Remark: undefined
      }
    };
  },
  methods: {
    getTableList() {
      getTableList(this.DBInfo)
        .then(res => {
          if (res.S) {
            this.TableList = res.D;
          } else {
            this.$toast.error({ message: res.M });
          }
        })
        .catch(function(data) {});
    },
    getDBList() {
      getDBList()
        .then(res => {
          this.DBList = res.D;
          return res.D;
        })
        .catch(function(data) {});
    },
    Add() {
      this.DialogStatus = true;
      this.tableInfo2 = {
        DBCon: undefined,
        Status: this.status,
        TableName: undefined,
        TableName_EN: undefined,
        TableName_CN: undefined,
        Remark: undefined
      };
      $("#tableAdd").modal("show");
    },
    Delete(id) {
      // TODO:弹出床交互
      if (confirm("是否要删除表")) {
        deleteTable(id).then(res => {
          if (res.S) {
            this.$toast.success({ message: "删除成功！" });
            this.getTableList();
          } else {
            this.$toast.error(res.M);
          }
        });
      }
    },
    Edit(item) {
      this.DialogStatus = true;
      this.tableInfo = {
        DBCon: item.DBCon,
        Status: this.status,
        TableName: item.TableName,
        TableName_EN: item.TableName_EN,
        TableName_CN: item.TableName_CN,
        Remark: item.Remark
      };
      $("#tableAdd").modal("show");
    },
    dialogClose(data) {},
    GeneratePage(id) {}
  },
  components: {
    modal: resolve => require(["@/views/DataBase/TableAddModal"], resolve),
    myInput: resolve =>
      require(["@/components/DropDownList/myInput.vue"], resolve)
  },
  created() {
    this.DBCon = this.$route.params.DBCon;
    getDBList()
      .then(res => {
        this.DBList = res.D;
        this.DBInfo = { DBCon: this.DBCon };
        return res.D;
      })
      .catch(error => {
        this.$toast.error({ message: "错误信息：" + error });
      });
    let _this = this;
    document.onkeyup = function(e) {
      let key = window.event.keyCode;
      if (key == 13) {
        _this.getTableList();
      }
    };
  }
};
</script>
<style>
.myclass2 {
  height: 200px;
}
</style>
