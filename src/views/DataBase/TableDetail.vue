<template>
  <div>
    <section class="content-header">
      <h1>
        数据表
        <small>列表</small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <a href="#">
            <i class="fa fa-dashboard"></i> 首页
          </a>
        </li>
        <li class="active">数据表</li>
      </ol>
    </section>
         <div class="box-body table-responsive no-padding">
              <table class="table table-hover table-striped text-nowrap">
                <tbody>
                  <tr>
                    <th>操作</th>
                    <th>ID</th>
                    <th>创建时间</th>
                    <th>创建日期</th>
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
                    <td>{{item.UpdateDate}}</td>
                    <td>{{item.UpdateBy}}</td>
                    <td>{{item.Deleted}}</td>
                    <td>{{item.TableName}}</td>
                    <td>{{item.TableName_CN}}</td>
                    <td>{{item.TableName_EN}}</td>
                    <td>{{item.ColumnType}}</td>
                    <td>{{item.Size}}</td>
                    <td>{{item.IsNullable}}</td>
                    <td>{{item.DefaultValue}}</td>
                    <td>{{item.Remark}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
    <!-- Main content -->
    <section class="content">

    </section>
  </div>
</template>

<script>
import {getColumnList} from '@/API/Column';
export default{
  data() {
    return {
      tableID: 1,
      List: []
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getColumnList() {
      getColumnList(this.tabldID);
    }
  },
  created() {
    this.tableID=this.$route.params.tableID;
    getColumnList(this.tableID).then(res => {
      this.List=res.d;
    });
  }
};
</script>
