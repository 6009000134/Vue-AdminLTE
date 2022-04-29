<template>
  <div>
    <div class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-primary">
            <div class="box-header">
              <button class="btn btn-success" @click="createApiTable()">创建表</button>
            </div>
            <div class="box-body table-responsive">
              <h3>
                接口名称：{{APIInfo.Title}}-{{APIInfo.ApiName}}(
                <small>{{APIInfo.CreatedBy}}</small>
                <small>{{APIInfo.CreatedDate}}</small>)
              </h3>
              <p>描述：{{APIInfo.Description}}</p>

              <table class="table table table-hover table-striped">
                <thead>
                  <tr>
                    <th>参数名</th>
                    <th>类型</th>
                    <th>是否必须</th>
                    <th>描述</th>
                    <th>值</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in InputList" :key="item.ID">
                    <td>{{item.ParamName}}</td>
                    <td>{{item.ParamType}}</td>
                    <td>{{item.IsRequired}}</td>
                    <td>{{item.Description}}</td>
                    <td>
                      <input v-model="item.value" type="text" class="form-control" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="box-footer">
              <button @click="getApiResult()" class="btn btn-success">调用接口</button>
              <button @click="getDividendResult()" class="btn btn-success">分红接口</button>
              <button @click="getDividendResults()" class="btn btn-success">分红多线程接口</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pre>{{APIInfo}}</pre>
    <pre>{{InputList}}</pre>
  </div>
</template>
<script>
import {
  getDetail,
  createApiTable,
  getApiResult,
  getDividendResult,
  getDividendResults
} from "@/API/tushare/apis.js";
export default {
  data() {
    return {
      updateView: "1",
      APIInfo: { Title: "" },
      InputList: [],
      OutPutList: []
    };
  },
  methods: {
    createApiTable() {
      createApiTable(this.$route.params.ID).then(res => {
        if (res.S) {
        } else {
          this.$toast.error({ message: res.M });
        }
      });
    },
    getApiResult() {
      var str = "";
      str = "{";
      str +=
        '"api_name":"' +
        this.APIInfo.ApiName +
        '","token":"8637e17fe4cbc18f2c412229ad41f8628d0849598c73e4fd3332d8fa","params":';
      str += "{";
      this.InputList.forEach(function(e) {
        str += '"' + e.ParamName + '":"' + e.value + '",';
      });
      str = str.substring(0, str.length - 1) + "},";
      str += '"fields":"';
      this.OutPutList.forEach(function(e) {
        str += e.ParamName + ",";
      });
      str = str.substring(0, str.length - 1);
      str += '"';
      str += "}";
      this.sendData = JSON.parse(str);
      var inputData = {
        url: "http://api.tushare.pro",
        postData: this.sendData,
        apiID: this.APIInfo.ID
      };
      getApiResult(inputData).then(res => {
        if (res.S) {
          this.$toast.success({ message: "成功" });
        } else {
          this.$toast.error({ message: res.M });
        }
      });
    },
    getDividendResult() {
      getDividendResult({
        apiID: this.APIInfo.ID,
        ts_code: ""
      }).then(res => {});
    },
    getDividendResults() {
      getDividendResults({
        apiID: this.APIInfo.ID,
        ts_code: ""
      }).then(res => {});
    }
  },
  mounted() {
    getDetail(this.$route.params.ID).then(res => {
      console.log(this.$route.params.ID);
      console.log(res);
      if (res.S) {
        this.APIInfo = res.D.Table[0];
        this.InputList = res.D.Table1;
        this.OutPutList = res.D.Table2;
        this.InputList = this.InputList.map(item => {
          return Object.assign(item, { value: "" });
        });
        this.updateView = "2";
      } else {
        this.$toast.error({ message: res.M });
      }
    });
  }
};
</script>
