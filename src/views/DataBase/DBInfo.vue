<template>
  <div>
    <!-- Main content -->
    <section class="content">
      <div class="box no-border"></div>
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-info">
            <div class="box-header">
              <h3 class="box-title">数据库列表</h3>
            </div>
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <th>数据库编码</th>
                    <th>数据库名</th>
                    <th>数据库类型</th>
                    <th>操作</th>
                  </tr>
                  <tr v-for="item in List" style="cursor:pointer;" :key="item.Key" @click="redirectC(item.DBCon)">
                    <td>{{item.DBCon}}</td>
                    <td>{{item.DBName}}</td>
                    <td>{{item.DBTypeCode}}</td>
                    <!-- <td><router-link :to="{name:'TableInfo',params:{DBName:item.Value}}"><i class="fa fa-search"></i></router-link></td> -->
                    <td>
                      <router-link
                        :to="{name:'TableInfo',path:'/TableInfo/',params:{DBCon:item.DBCon}}"
                      >
                        <i class="fa fa-search"></i>
                      </router-link>
                    </td>
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
export default {
  name: "DB",
  data() {
    return {
      List: []
    };
  },
  methods: {
    redirectC(dbcon) {
      this.$router.push({ name: "TableInfo", params: { DBCon: dbcon } });
    }
  },
  created() {
    getDBList()
      .then(resp => {
        this.List = resp.D;
      })
      .catch(function(data) {
        this.$toast.error({ message: "异常信息:" + data });
      });
  }
};
</script>
