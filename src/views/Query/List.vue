<template>
  <div>
    <h1>123</h1>
    <input type="text" v-model="id" />
    <button class="btn btn-primary" @click="query()">query</button>
    <!-- <pre>{{result}}</pre> -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-primary">
            <div class="box-header">
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
                  <button class="btn btn-success" @click="Add()">新增</button>
                  <button class="btn btn-success" @click="getTableList()">查询</button>
                </div>
              </div>
            </div>
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover table-striped text-nowrap">
                <thead>
                  <tr>
                    <th v-for="item in HeadInfo" :key="item.ColumnName">{{item.ColumnName_CN}}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in List" :key="item.ID">
                    <td
                      v-for="colInfo in HeadInfo"
                      :key="colInfo.ColumnName"
                    >{{item[colInfo.ColumnName]}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="box-footer"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { getList } from "@/API/query.js";
export default {
  name: "Query",
  data() {
    return {
      id: 4004,
      result: undefined,
      HeadInfo: [],
      List: []
    };
  },
  methods: {
    query() {
      getList(this.id)
        .then(res => {
          this.HeadInfo = res.D.Cols.ColumnInfo;
          console.log(this.HeadInfo);

          this.List = res.D.Data;
          console.log(res);
          this.result = res;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
