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

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">标题</h3>
            </div>
            <div class="mailbox-controls">
              <div class="form-inline">
                <div class="form-group">
                  <div class="input-group">
                  <input type="text" class="form-control" v-model="DBName" placeholder="数据库" />
                  <span class="input-group-addon"><a href="javascript:void(0)" @click="DBName=undefined"><i  class="glyphicon glyphicon-trash text-red"></i></a></span>
                  </div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" v-model="TableName" placeholder="表名" />
                  <button class="btn btn-success" data-toggle="modal" data-target="#tableAdd" @click="DialogStatus=true" >新增</button>
                  <button class="btn btn-success" @click="getTableList">查询</button>
                </div>
              </div>
            </div>
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <th>名字</th>
                    <th>名字</th>
                    <th>名字</th>
                  </tr>
                  <tr>
                    <td>内容</td>
                    <td>内容</td>
                    <td>内容</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <modal v-bind:dbname='DBName' v-bind:status='DialogStatus' v-on:close="dialogClose"></modal>
  </div>
</template>
<script>
import { getDBList } from '@/API/DB'
import { getTableList } from '@/API/Table'
import modal from '@/views/DataBase/TableAddModal'
export default {
  name: 'DB',
  data () {
    return {
      DBName: '',
      TableName: '',
      DialogStatus: false
    }
  },
  methods: {
    getTableList () {
      getTableList(this.DBName)
        .then(function (data) {
          console.log(data, 2)
        })
        .catch(function (data) {
          console.log('exceptions:', data)
        })
    },
    getDBList () {
      getDBList()
        .then(function (data) {
          console.log(data)
        })
        .catch(function (data) {
          console.log(data)
        })
    },
    dialogClose (data) {
      console.log('close', data)
    }
  },
  components: {
    modal: modal
  },
  created () {
    console.log(this.$route.params)
    this.DBName = this.$route.params.dbname
  }
}
</script>
<style>
.myclass2 {
  height: 200px;
}
</style>
