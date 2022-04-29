<template>
  <div>
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-primary">
            <div class="box-header">
              <h3 class="box-title">标题</h3>
            </div>
            <div class="mailbox-controls">
              <div class="form-inline">
                <div class="form-group">
                  <div class="input-group">
                    <f-select
                      v-model="DBInfo"
                      f-value="DBName"
                      cust-class="form-control"
                      :datasource="DBList"
                    ></f-select>
                    <span class="input-group-addon">
                      <a href="#" @click.prevent="DBInfo={}">
                        <i class="glyphicon glyphicon-trash text-red"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" v-model="TableName" placeholder="表名" />
                  <button class="btn btn-success" @click="Add()">新增</button>
                  <!-- <button
                    class="btn btn-success"
                    data-toggle="modal"
                    data-target="#tableAdd"
                    @click="add()"
                  >新增</button>-->
                  <button class="btn btn-success" @click="getTableList()">查询</button>
                </div>
              </div>
            </div>
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
                    <th>数据库连接</th>
                    <th>数据库类型</th>
                    <th>数据库类型编码</th>
                    <th>表名</th>
                    <th>表中文名</th>
                    <th>表英文名</th>
                    <th>备注</th>
                  </tr>
                  <tr v-for="item in TableList" :key="item.ID">
                    <td>
                      <router-link
                        title="详细信息"
                        class="btn btn-xs bg-green"
                        :to="{name:'TableDetailInfo',params:{tableID:item.ID}}"
                      >
                        <i class="fa fa-search"></i>
                      </router-link>
                      <button class="btn btn-xs bg-purple" @click="Edit(item)">
                        <i class="fa fa-edit"></i>
                      </button>
                      <button class="btn btn-xs btn-danger" @click="Delete(item.ID)">
                        <i class="fa fa-trash-o"></i>
                      </button>
                      <button class="btn btn-xs bg-yellow" @click="GeneratePage(item.ID)">生成页面</button>
                    </td>
                    <td>{{item.ID}}</td>
                    <td class>{{item.CreatedDate}}</td>
                    <td>{{item.CreatedBy}}</td>
                    <td>{{item.UpdateDate}}</td>
                    <td>{{item.UpdateBy}}</td>
                    <td>{{item.Deleted}}</td>
                    <td>{{item.DBName}}</td>
                    <td>{{item.DBType}}</td>
                    <td>{{item.DBTypeCode}}</td>
                    <td>{{item.TableName}}</td>
                    <td>{{item.TableName_CN}}</td>
                    <td>{{item.TableName_EN}}</td>
                    <td>{{item.Remark}}</td>
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
export default {
  name: "QueryObject",
  data() {
    return {};
  },
  methods: {}
};
</script>