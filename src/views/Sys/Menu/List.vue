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
                <router-link :to="{name:'MenuAdd'}" class="btn btn-success">
                  <i class="fa fa-plus"></i>
                  新增
                </router-link>
                <!--start Condition-->
                <div class="form-group">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      ref="fMenu"
                      @keyup.enter="dataBind()"
                      v-model="menuName"
                      placeholder="菜单名称"
                    />
                    <span class="input-group-addon">
                      <a href="#" title="清除" @click.prevent="menuName=undefined">
                        <i class="glyphicon glyphicon-trash text-red"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <button class="btn btn-info" @click="dataBind()">
                  <i class="fa fa-search"></i>查询
                </button>
              </div>
            </div>
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover table-striped text-nowrap">
                <tbody>
                  <tr>
                    <th>操作</th>
                    <th>ID</th>
                    <th>RouterID</th>
                    <th>序号</th>
                    <th>创建时间</th>
                    <th>创建人</th>
                    <th>修改时间</th>
                    <th>修改人</th>
                    <th>菜单名称</th>
                    <th>Uri</th>
                    <th>路由路径</th>
                    <th>路由名称</th>
                    <th>元数据</th>
                    <th>Html文件</th>
                    <th>相对路径</th>
                  </tr>
                  <tr v-for="item in List" :key="item.ID">
                    <td>
                      <router-link
                        :to="{name:'MenuEdit',params:{menuID:item.ID}}"
                        class="btn btn-xs bg-purple"
                      >
                        <i class="fa fa-edit"></i>
                      </router-link>
                      <button class="btn btn-xs btn-danger" @click="Delete(item.ID)">
                        <i class="fa fa-trash-o"></i>
                      </button>
                    </td>
                    <td>{{item.ID}}</td>
                    <td>{{item.RouterID}}</td>
                    <td>{{item.OrderNo}}</td>
                    <td>{{item.CreatedDate}}</td>
                    <td>{{item.CreatedBy}}</td>
                    <td>{{item.UpdatedDate}}</td>
                    <td class>{{item.UpdatedBy}}</td>
                    <td>{{item.MenuName}}</td>
                    <td>{{item.Uri}}</td>
                    <td>{{item.Path}}</td>
                    <td>{{item.Name}}</td>
                    <td>{{item.Meta}}</td>
                    <td>{{item.Component}}</td>
                    <td>{{item.FullPath}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
          <!--End Box-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getMenuList } from "@/API/menu";
export default {
  data() {
    return {
      page: { pageSize: 12, pageIndex: 1, totalCount: 0 },
      menuName: undefined,
      List: []
    };
  },
  methods: {
    dataBind() {
      var whereClause = []; //查询条件
      if (this.menuName) {
        whereClause.push({
          key: "menuName",
          value: "%" + this.menuName + "%",
          operator: " like "
        });
      }
      var data = { page: this.page, condition: whereClause };
      getMenuList(data).then(res => {
        this.List = res.D.data;
        this.page.totalCount = res.D.data1[0].TotalCount;
      });
    }
  },
  mounted() {
    this.$refs.fMenu.focus();
    document.onkeyup = e => {
      let key = window.event.keyCode;
      if (key == 13) {
        this.dataBind();
      }
    };
  }
};
</script>