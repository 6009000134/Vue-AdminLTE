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
                      <input
                        v-model="item.value"
                        @keyup.enter="getApiResult2()"
                        type="text"
                        class="form-control"
                      />
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
    getApiResult2() {
      var ars = [
        "RB1001.SHF",
        "RB0911.SHF",
        "RB0910.SHF",
        "RB1002.SHF",
        "RB0912.SHF",
        "RB1003.SHF",
        "RB0909.SHF",
        "RB1004.SHF",
        "RB1005.SHF",
        "RB1006.SHF",
        "RB1007.SHF",
        "RB1008.SHF",
        "RB1009.SHF",
        "RB1010.SHF",
        "RB1011.SHF",
        "RB1012.SHF",
        "RB1101.SHF",
        "RB1102.SHF",
        "RB1103.SHF",
        "RB1104.SHF",
        "RB1105.SHF",
        "RB1106.SHF",
        "RB1107.SHF",
        "RB1108.SHF",
        "RB1109.SHF",
        "RB1110.SHF",
        "RB1111.SHF",
        "RB1112.SHF",
        "RB1201.SHF",
        "RB1202.SHF",
        "RB1203.SHF",
        "RB1204.SHF",
        "RB1205.SHF",
        "RB1206.SHF",
        "RB1207.SHF",
        "RB1208.SHF",
        "RB1209.SHF",
        "RB1210.SHF",
        "RB1211.SHF",
        "RB1212.SHF",
        "RB1301.SHF",
        "RB1302.SHF",
        "RB1303.SHF",
        "RB1304.SHF",
        "RB1305.SHF",
        "RB1306.SHF",
        "RB1307.SHF",
        "RB1308.SHF",
        "RB1309.SHF",
        "RB1310.SHF",
        "RB1311.SHF",
        "RB1312.SHF",
        "RB1401.SHF",
        "RB1402.SHF",
        "RB1403.SHF",
        "RB1404.SHF",
        "RB1405.SHF",
        "RB1406.SHF",
        "RB1407.SHF",
        "RB1408.SHF",
        "RB1409.SHF",
        "RB1410.SHF",
        "RB1411.SHF",
        "RB1412.SHF",
        "RB1501.SHF",
        "RB1502.SHF",
        "RB1503.SHF",
        "RB1504.SHF",
        "RB1505.SHF",
        "RB1506.SHF",
        "RB1507.SHF",
        "RB1508.SHF",
        "RB1509.SHF",
        "RB1510.SHF",
        "RB1511.SHF",
        "RB1512.SHF",
        "RB1601.SHF",
        "RB1602.SHF",
        "RB1603.SHF",
        "RB1604.SHF",
        "RB1605.SHF",
        "RB1606.SHF",
        "RB1607.SHF",
        "RB1608.SHF",
        "RB1609.SHF",
        "RB1610.SHF",
        "RB1611.SHF",
        "RB1612.SHF",
        "RB1701.SHF",
        "RB1702.SHF",
        "RB1703.SHF",
        "RB1704.SHF",
        "RB1705.SHF",
        "RB1706.SHF",
        "RB1707.SHF",
        "RB1708.SHF",
        "RB1709.SHF",
        "RB1710.SHF",
        "RB1711.SHF",
        "RB1712.SHF",
        "RB1801.SHF",
        "RB1802.SHF",
        "RB1803.SHF",
        "RB1804.SHF",
        "RB1805.SHF",
        "RB1806.SHF",
        "RB1807.SHF",
        "RB1808.SHF",
        "RB1809.SHF",
        "RB1810.SHF",
        "RB1811.SHF",
        "RB1812.SHF",
        "RB1901.SHF",
        "RB1902.SHF",
        "RB1903.SHF",
        "RB1904.SHF",
        "RB1905.SHF",
        "RB1906.SHF",
        "RB1907.SHF",
        "RB1908.SHF",
        "RB1909.SHF",
        "RB1910.SHF",
        "RB1911.SHF",
        "RB1912.SHF",
        "RB2001.SHF",
        "RB2002.SHF",
        "RB2003.SHF",
        "RB2004.SHF",
        "RB2005.SHF",
        "RB2006.SHF",
        "RB2007.SHF",
        "RB2008.SHF",
        "RB2009.SHF",
        "RB2010.SHF",
        "RB2011.SHF",
        "RB2012.SHF",
        "RB2101.SHF",
        "RB2102.SHF",
        "RB2103.SHF",
        "RB2104.SHF",
        "RB2105.SHF",
        "RB2106.SHF",
        "RB2107.SHF",
        "RB2108.SHF",
        "RB2109.SHF",
        "RB2110.SHF",
        "RB2111.SHF",
        "RB2112.SHF",
        "RB2201.SHF",
        "RB2202.SHF",
        "RB2203.SHF",
        "RB2204.SHF",
        "RB2205.SHF",
        "RB2206.SHF",
        "RB2207.SHF",
        "RB2208.SHF",
        "RB2209.SHF",
        "RB2210.SHF",
        "RB2211.SHF",
        "RB2212.SHF",
        "RB2301.SHF",
        "RB2302.SHF"
      ];
      for (let index = 0; index < ars.length; index++) {
        this.InputList[1].value=ars[index];
        console.log(this.InputList[1]);
        //this.getApiResult();
      }
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
// getApiResult
</script>
