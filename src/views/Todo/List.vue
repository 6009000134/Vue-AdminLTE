<template>
  <div>
    <div class="skin-black">
      <header class="main-header">
        <nav class="navbar navbar-static-top">
          <div class="navbar-custom-menu bg-">
            <ul class="nav navbar-nav">
              <!-- User Account: style can be found in dropdown.less -->
              <li class="dropdown user user-menu">
                <router-link :to="{name:'Login'}">
                  <span>Login</span>
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <!--Start Box-->
          <div class="box box-primary">
            <div class="box-header">
              <h3 class="box-title">TodoList</h3>
            </div>
            <div class="box-body">
              <div class="input-group input-group-lg">
                <input type="text" v-model="content" class="form-control input-lg" />
                <span class="input-group-btn">
                  <!-- <button class="btn btn-success"></button> -->
                  <a href="javascript:void(0)" class="btn btn-success" @click="add">
                    <i class="fa fa-plus"></i>
                  </a>
                </span>
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
                    <th>内容</th>
                  </tr>
                  <tr v-for="item in List" :key="item.ID">
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
                    <td>{{item.Content}}</td>
                  </tr>
                </tbody>
              </table>

              <div class="box-footer">
                <pagination
                  class
                  :pageSize="page.pageSize"
                  :pageIndex.sync="page.pageIndex"
                  @pageChange="dataBind()"
                  :totalCount="page.totalCount"
                ></pagination>
              </div>
            </div>
          </div>
          <!--End Box-->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { addTodo, getTodoList } from "@/API/todo";
export default {
  data() {
    return {
      page: { pageSize: 10, pageIndex: 1 },
      content: undefined,
      List: []
    };
  },
  methods: {
    search() {},
    add() {
      addTodo({
        CreatedBy: "刘飞",
        UpdatedBy: "刘飞",
        Content: this.content
      }).then(res => {
        if (res.S) {
          this.$toast.success({ message: "添加成功" });
          this.getList();
        } else {
          this.$toast.error({ message: res.M });
        }
      });
    },
    getList() {
      getTodoList().then(res => {
        if (res.S) {
          console.log(res.D);
          this.List = res.D.Table;
        } else {
          this.$toast.error({ message: res.M });
        }
      });
    }
  },mounted(){
    this.getList();
  }
};
</script>