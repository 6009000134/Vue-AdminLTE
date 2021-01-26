<template>
  <div>
    <section class="content-header">
      <h1>
        {{this.$route.meta.title}}
        <small>编辑</small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <a href="#">
            <i class="fa fa-dashboard"></i> 首页
          </a>
        </li>
        <li class="active">{{this.$route.meta.title}}</li>
      </ol>
    </section>
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
              <p>描述：{{APIInfo.Descprition}}</p>

              <table class="table table table-hover table-striped">
                <thead>
                  <tr>
                    <th>名称</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>asd</td>
                  </tr>
                  <tr>
                    <td>asd</td>
                  </tr>
                  <tr>
                    <td>asd</td>
                  </tr>
                  <tr>
                    <td>asd</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pre>{{APIInfo}}</pre>
  </div>
</template>
<script>
import { getDetail, createApiTable } from "@/API/tushare/apis.js";
export default {
  data() {
    return {
      APIInfo: {Title:''},
      InputList: [],
      OutPutList: []
    };
  },
  methods: {
    createApiTable() {
      console.log(11);
      createApiTable(this.$route.params.ID).then(res => {
        if (res.S) {
          console.log(res.D);
        } else {
          this.$toast.error({ message: res.M });
        }
      });
    }
  },
  mounted() {
    getDetail(this.$route.params.ID).then(res => {
      if (res.S) {
        this.APIInfo = res.D.Table[0];
        this.InputList = res.D.Table1;
        this.OutPutList = res.D.Table2;
        console.log(this.APIInfo);
      } else {
        this.$toast.error({ message: res.M });
      }
    });
  }
};
</script>
