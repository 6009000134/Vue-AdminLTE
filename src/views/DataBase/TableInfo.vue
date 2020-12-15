<template>
  <div>
    <section class="content-header">
      <h1>
        数据表
        <small>列表</small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <a href="#">
            <i class="fa fa-dashboard"></i> 首页
          </a>
        </li>
        <li class="active">数据表</li>
      </ol>
    </section>

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
                    <ddl
                      v-model="DBInfo"
                      KeyStr="DBName"
                      ValueStr="DBCode"
                      cust-class="form-control"
                      :dt="DBList"
                      rt="e"
                    ></ddl>
                    <span class="input-group-addon">
                      <a href="#" @click.prevent="DBInfo={}">
                        <i class="glyphicon glyphicon-trash text-red"></i>
                      </a>
                    </span>
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
      v-bind:dbname="DBInfo"
      :tableInfo2="tableInfo"
      v-bind:status="DialogStatus"
      v-on:close="dialogClose"
    ></modal>
    <modal2></modal2>
  </div>
</template>
<script>
import { getDBList } from "@/API/DB";
import { getTableList } from "@/API/Table";
import $ from "jquery";
import modal2 from "@/views/DataBase/ModalTest";
// import modal from '@/views/DataBase/TableAddModal';
export default {
  name: "DB",
  data() {
    return {
      DBInfo: {},
      TableName: "",
      DialogStatus: false,
      DBList: [],
      TableList: [],
      ChildValue: { Key: "MySql", Value: "MySql" },
      tableInfo: {
        DBInfo: undefined,
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
      getTableList(this.DBName)
        .then(res => {
          if (res.D.length > 0) {
            this.TableList = res.D;
          }
        })
        .catch(function(data) {
          console.log("exceptions:", data);
        });
    },
    getDBList() {
      getDBList()
        .then(res => {
          this.DBList = res.D;
          return res.D;
        })
        .catch(function(data) {
          console.log("ex", data);
        });
    },
    Add() {
      this.DialogStatus = true;
      this.tableInfo2 = {
        DBInfo: undefined,
        Status: this.status,
        TableName: undefined,
        TableName_EN: undefined,
        TableName_CN: undefined,
        Remark: undefined
      };
      $("#tableAdd").modal("show");
    },
    Delete(id) {
      if (confirm("sss")) {
      }
    },
    Edit(item) {},
    dialogClose(data) {
      console.log("close", data);
    }
  },
  components: {
    modal2: modal2,
    modal: resolve => require(["@/views/DataBase/TableAddModal"], resolve),
    ddl: resolve => require(["@/components/DropDownList/ddl.vue"], resolve),
    myInput: resolve =>
      require(["@/components/DropDownList/myInput.vue"], resolve)
  },
  created() {
    this.DBInfo = this.$route.params.DBInfo;
    getDBList()
      .then(res => {
        this.DBList = res.D;
        return res.D;
      })
      .catch(error => {
        this.$toast.error({ message: "错误信息：" + error });
      });
  }
};
</script>
<style>
.myclass2 {
  height: 200px;
}
</style>
