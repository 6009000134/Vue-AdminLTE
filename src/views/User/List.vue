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
                  <div class="input-group">
                    <input type="text" class="form-control" v-model="UserName" placeholder="姓名" />
                    <span class="input-group-addon">
                      <a href="javascript:void(0)" @click="UserName=undefined">
                        <i class="glyphicon glyphicon-trash text-red"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <button class="btn btn-success" @click="search()">查询</button>
              </div>
            </div>
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover table-striped text-nowrap">
                <tbody>
                  <tr>
                    <th>操作</th>
                    <th>ID</th>
                    <th>创建人</th>
                    <th>创建时间</th>
                    <th>修改人</th>
                    <th>修改日期</th>
                    <th>姓名</th>
                    <th>账号</th>
                    <th>密码</th>
                  </tr>
                  <tr v-for="item in UserList" :key="item.ID">
                    <td>
                      <router-link
                        title="详细信息"
                        class="btn btn-xs bg-green"
                        :to="{name:'UserDetail',params:{userID:item.ID}}"
                      >
                        <i class="fa fa-search"></i>
                      </router-link>
                    </td>
                    <td>{{item.ID}}</td>
                    <td>{{item.CreatedBy}}</td>
                    <td class>{{item.CreatedDate}}</td>
                    <td>{{item.UpdatedBy}}</td>
                    <td>{{item.UpdatedDate}}</td>
                    <td>{{item.UserName}}</td>
                    <td>{{item.Account}}</td>
                    <td>{{item.Password}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="box-footer">
              <pagination
                :pageSize="page.pageSize"
                :pageIndex.sync="page.pageIndex"
                @pageChange="dataBind()"
                :totalCount="page.totalCount"
              ></pagination>
            </div>
          </div>
          <!--End Box-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getUserList } from "@/API/users";

export default {
  data() {
    return {
      UserName: "",
      page: { pageSize: 5, pageIndex: 1, totalCount: 0 },
      UserList: []
    };
  },
  methods: {
    search() {
      this.dataBind();
    },
    dataBind() {
      var data = {
        condition: JSON.stringify(this.getCondition()),
        page: JSON.stringify(this.page)
      };
      getUserList(data).then(res => {
        console.log(res.D);
        this.UserList = res.D.data;
        this.page.totalCount = res.D.data1[0].TotalCount;
      });
    },
    getCondition() {
      var li = [];
      if (this.UserName) {
        li.push({ UserName: this.UserName });
      }

      return li;
    }
  },
  mounted() {
    document.onkeyup = e => {
      let key = window.event.keyCode;
      if (key == 13) {
        this.dataBind();
      }
    };
    this.dataBind();
  }
};
</script>

<style>
</style>
