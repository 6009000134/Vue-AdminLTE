<template>
<div>
    <section class="content-header">
      <h1>
        数据表
        <small>列表</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>
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
              <div class=row>
                <div class="form-group col-xs-2">
                  <input type="text" class="form-control input-sm" placeholder="表名">
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
</div>
</template>
<script>
import {getDBList} from '@/API/DB'
export default{
  name: 'DB',
  methods: {
    getDBList () {
      getDBList().then(function (data) {
        console.log(data)
      }).catch(function (data) {
        console.log(data)
      })
    }
  }
}
</script>
