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
                <div class="form-group"></div>
                <div class="form-group">
                  <input type="text" class="form-control" v-model="apiName" placeholder="接口名称" />
                  <button class="btn btn-success" @click="Add()">新增</button>
                  <button class="btn btn-success" @click="getApis()">查询</button>
                </div>
              </div>
            </div>
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover table-striped text-nowrap">
                <tbody>
                  <tr>
                    <th>操作</th>
                    <th>ID</th>
                    <th>标题</th>
                    <th>接口名称</th>
                    <th>描述</th>
                  </tr>
                  <tr v-for="item in APIList" :key="item.ID">
                    <td>
                      <router-link
                        title="详细信息"
                        class="btn btn-xs bg-green"
                        :to="{name:'EditAPI',params:{ID:item.ID}}"
                      >
                        <i class="fa fa-search"></i>
                      </router-link>
                      <!-- <button class="btn btn-xs bg-purple" @click="Edit(item)">
                        <i class="fa fa-edit"></i>
                      </button>
                      <button class="btn btn-xs btn-danger" @click="Delete(item.ID)">
                        <i class="fa fa-trash-o"></i>
                      </button>-->
                    </td>
                    <td>{{item.ID}}</td>
                    <td>{{item.Title}}</td>
                    <td>{{item.ApiName}}</td>
                    <td>{{item.Description}}</td>
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
import { getApis } from "@/API/tushare/apis.js";
export default {
  name: "API",
  data() {
    return {
      apiName: "",
      APIList: []
    };
  },
  methods: {
    getApis() {
      getApis(this.apiName).then(res => {
        if (res.S) {
          this.APIList = res.D;
        } else {
          this.$toast.error({ message: res.M });
        }
      });
    },
    Add() {
      this.$router.push("Add");
    }
  }
};
</script>
