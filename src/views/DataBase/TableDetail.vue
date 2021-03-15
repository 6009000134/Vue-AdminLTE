<template>
  <div>
    <section class="content">
      <div class="box box-primary">
        <div class="box-header">
          <h3 class="box-title">标题</h3>
        </div>
        <div class="padder-xs">
          <div class="form-inline">
            <router-link class="btn btn-success" :to="{name:'ColumnAdd',params:{tableID:tableID}}">
              <i class="glyphicon glyphicon-plus"></i>
              新增
            </router-link>
            <div class="form-group">
              <div class="input-group">
                <input class="form-control" v-model="columnName" placeholder="列名" />
                <span class="input-group-addon">
                  <a href="#" @click.prevent="columnName=''">
                    <i class="glyphicon glyphicon-trash text-red"></i>
                  </a>
                </span>
              </div>
              <div class="input-group">
                <input class="form-control" v-model="columnName_CN" placeholder="列中文" />
                <span class="input-group-addon">
                  <a href="#" @click.prevent="columnName_CN=''">
                    <i class="glyphicon glyphicon-trash text-red"></i>
                  </a>
                </span>
              </div>
            </div>
            <button class="form-control btn btn-success" @click="DataBind()">
              <i class="glyphicon glyphicon-search"></i>
              查询
            </button>
          </div>
        </div>
        <div class="box-body table-responsive no-padding">
          <table class="table table-hover table-striped text-nowrap">
            <tbody>
              <tr>
                <th>操作</th>
                <th>ID</th>
                <th>创建时间</th>
                <th>创建人</th>
                <th>修改人</th>
                <th>修改日期</th>
                <th>Deleted</th>
                <th>表名称</th>
                <th>列名</th>
                <th>中文名称</th>
                <th>英文名称</th>
                <th>类型</th>
                <th>大小</th>
                <th>是否可空</th>
                <th>默认值</th>
                <th>备注</th>
              </tr>
              <tr v-for="item in List" :key="item.ID">
                <td>
                  <button class="btn btn-xs bg-purple">
                    <i class="fa fa-edit"></i>
                  </button>
                  <button class="btn btn-xs btn-danger">
                    <i class="fa fa-trash-o"></i>
                  </button>
                </td>
                <td>{{item.ID}}</td>
                <td class>{{item.CreatedDate}}</td>
                <td>{{item.CreatedBy}}</td>
                <td>{{item.UpdatedBy}}</td>
                <td>{{item.UpdatedDate}}</td>
                <td>{{item.Deleted}}</td>
                <td>{{item.TableName}}</td>
                <td>{{item.ColumnName}}</td>
                <td>{{item.ColumnName_CN}}</td>
                <td>{{item.ColumnName_EN}}</td>
                <td>{{item.ColumnType}}</td>
                <td>{{item.Size}}</td>
                <td>
                  <input type="checkbox" v-model="item.IsNullable" />
                </td>
                <td>{{item.DefaultValue}}</td>
                <td>{{item.Remark}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <pagination
        :pageSize="page.PageSize"
        :pageIndex.sync="page.PageIndex"
        :totalCount="page.TotalCount"
        @pageChange="DataBind"
      ></pagination>
    </section>
  </div>
</template>

<script>
import { getTableDetail } from "@/API/Table";
export default {
  data() {
    return {
      tableID: 1,
      columnName: "",
      columnName_CN: "",
      List: [],
      page: { PageSize: 2, PageIndex: 1, TotalCount: 0 }
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    DataBind() {
      getTableDetail({
        tableID: this.tableID,
        page: this.page
      }).then(response => {
        if (response.S) {
          this.tableInfo = response.D.Table[0];
          this.List = response.D.Table1;
          this.page.TotalCount = response.D.Table2[0].TotalCount;
        } else {
          this.$toast.error({ message: response.M });
        }
      });
    }
  },
  mounted() {
    this.tableID = this.$route.params.tableID;
    this.DataBind();
    console.log(this.$route.matched, 123);
  }
};
</script>
