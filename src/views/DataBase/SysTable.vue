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
                  </div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" v-model="TableName" placeholder="表名" />
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
                    <th>表名</th>
                    <th>创建时间</th>
                    <th>修改时间</th>
                  </tr>
                  <tr v-for="item in TableList" :key="item.object_id">
                    <td>
                      <button class="btn btn-xs bg-purple" @click="SyncTable(item.name)">同步表信息</button>
                    </td>
                    <td>{{item.object_id}}</td>
                    <td>{{item.name}}</td>
                    <td class>{{item.create_date}}</td>
                    <td>{{item.modify_date}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { getDBList } from "@/API/db";
import { getSysTableList, syncTableInfo } from "@/API/table";
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
      console.log(this.DBInfo);
      if (!this.DBInfo.DBCon) {
        this.$toast.error({ message: "请选择要查询的数据库！" });
        return;
      }
      getSysTableList({ dbCon: this.DBInfo.DBCon })
        .then(res => {
          if (res.S) {
            console.log(res.D);
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
    SyncTable(tableName) {
      syncTableInfo({ dbCon: this.DBInfo.DBCon, tableName: tableName }).then(
        res => {
          console.log(res);
          if (!res.S) {
            this.$toast.error({ message: res.M });
          } else {
            this.$toast.success({ message: "成功！" });
          }
        }
      );
    }
  },
  created() {
    this.DBCon = this.$route.params.DBCon;
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
