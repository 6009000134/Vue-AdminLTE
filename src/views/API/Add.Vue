<template>
  <div>
    <section class="content-header">
      <h1>
        {{this.$route.meta.title}}
        <small>新增</small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <a href="#">
            <i class="fa fa-dashboard"></i> 首页
          </a>
        </li>
        <li class="active">{{this.$route.meta.title}}</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="box box-danger">
        <div class="box-header">
          <h3>标题</h3>
          <div class="form-inline">
            <!-- <div class="form-group input-group">
              <input class="form-control" />
              <span class="input-group-addon">
                <a href="#" @click.prevent="htmlStr=''">
                  <i class="glyphicon glyphicon-trash text-red"></i>
                </a>
              </span>
            </div>-->
            <button @click="GetApis" class="btn btn-success">解析html</button>
          </div>
        </div>

        <div class="form-horizontal">
          <div class="box-body">
            <div class="form-group">
              <label class="control-label col-sm-1">html内容</label>
              <div class="col-sm-7">
                <div class="input-group">
                  <textarea v-model="htmlStr" class="form-control" rows="5"></textarea>
                  <span class="input-group-addon">
                    <a href="#" @click.prevent="htmlStr=''">
                      <i class="glyphicon glyphicon-trash text-red"></i>
                    </a>
                  </span>
                </div>
              </div>
              <label class="control-label col-sm-1">结果</label>
              <div class="col-sm-3">
                <pre v-show="htmlJson">{{htmlJson}}</pre>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-1">API标题</label>
              <div class="col-sm-3">
                <input class="form-control" />
              </div>
              <label class="control-label col-sm-1">API名称</label>
              <div class="col-sm-3">
                <input class="form-control" />
              </div>
              <label class="control-label col-sm-1">API描述</label>
              <div class="col-sm-3">
                <textarea class="form-control"></textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-4"></div>
            </div>
          </div>
        </div>
        <div class="box-footer">
          <button class="btn btn-info">测试</button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      htmlJson: undefined,
      htmlStr: ""
    };
  },
  methods: {
    GetApis() {
      var hh = this.htmlStr;
      var regTitle = /(?<=<h2.*>).*(?=<\/.*?h2.*>)/; // Title
      var regApiName = /(?<=接口：).*?(?=<br>)/; // ApiName
      var regDescription = /(?<=描述：).*?(?=<\/p>)/; // Description
      this.htmlJson = {
        title: regTitle.exec(hh),
        apiname: regApiName.exec(hh),
        description: regDescription.exec(hh)
      };
    }
  }
};
</script>
