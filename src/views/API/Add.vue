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
      <div class="row">
        <div class="col-md-12">
          <div class="box">
            <div class="box-header">
              <h3>标题</h3>
            </div>
            <div class="form-horizontal">
              <div class="box-body">
                <div class="form-group">
                  <label class="control-label col-sm-1">html页面地址</label>
                  <div class="col-sm-11">
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="url" />
                      <span class="input-group-addon">
                        <a href="#" @click.prevent="url=''">
                          <i class="glyphicon glyphicon-trash text-red"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-1">html内容</label>
                  <div class="col-sm-11">
                    <div class="input-group">
                      <textarea v-model="htmlStr" class="form-control" rows="5"></textarea>
                      <span class="input-group-addon">
                        <a href="#" @click.prevent="htmlStr=''">
                          <i class="glyphicon glyphicon-trash text-red"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-body">
              <div class="form-inline">
                <button @click="GetHtml" class="btn btn-success">获取页面Html</button>
                <button @click="GetApis" class="btn btn-success">解析html</button>
                <button @click="Add" class="btn btn-success">保存</button>
                <pre>{{sendData}}</pre>
              </div>
              <h3>{{apiTitle}}</h3>
              <p>接口：{{apiName}}</p>
              <p>描述：{{description}}</p>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="box box-success">
                  <div class="box-body table-responsive">
                    <h3>输入参数</h3>
                    <table class="table table table-hover table-striped">
                      <thead>
                        <tr>
                          <th>名称</th>
                          <th>类型</th>
                          <th style="width:50px">必选</th>
                          <th>描述</th>
                          <th>测试数据</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in inputParam.length/4" :key="item.index">
                          <td>{{inputParam[4*(item-1)]}}</td>
                          <td>{{inputParam[4*(item-1)+1]}}</td>
                          <td>{{inputParam[4*(item-1)+2]}}</td>
                          <td>{{inputParam[4*(item-1)+3]}}</td>
                          <td>
                            <input type="text" class="form-control" v-model="testData[item-1]" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="box-footer">
                    <button
                      class="btn btn-success"
                      :disabled="testData.length==0"
                      @click="test()"
                    >测试</button>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="box box-danger">
                  <div class="box-body table-responsive">
                    <h3>输出参数</h3>
                    <table
                      class="table table-hover table-striped text-nowrap"
                      v-if="outputParam.length>0&&outputParam.length%3===0"
                    >
                      <thead>
                        <tr>
                          <th>名称</th>
                          <th>类型</th>
                          <th>描述</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in outputParam.length/3" :key="item.index">
                          <td>{{outputParam[3*(item-1)]}}</td>
                          <td>{{outputParam[3*(item-1)+1]}}</td>
                          <td>{{outputParam[3*(item-1)+2]}}</td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      class="table table-hover table-striped text-nowrap"
                      v-if="outputParam.length>0&&outputParam.length%4===0"
                    >
                      <thead>
                        <tr>
                          <th>名称</th>
                          <th>类型</th>
                          <th>默认显示</th>
                          <th>描述</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in outputParam.length/4" :key="item.index">
                          <td>{{outputParam[4*(item-1)]}}</td>
                          <td>{{outputParam[4*(item-1)+1]}}</td>
                          <td>{{outputParam[4*(item-1)+2]}}</td>
                          <td>{{outputParam[4*(item-1)+3]}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="box-body table-responsive no-padding"> -->

            <div class="box-footer">
              <!-- <button class="btn btn-success" @click="test()">测试</button> -->
              <pre>{{this.apiResult}}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { testApi, getHtml, addApi } from "@/API/tushare/apis";
export default {
  data() {
    return {
      htmlJson: undefined,
      htmlStr: "",
      apiInfo: {},
      inputParam: [],
      outputParam: [],
      apiTitle: "",
      apiName: "",
      description: "",
      testData: [],
      IsTrue: false,
      sendData: Object,
      apiResult: undefined,
      url: ""
    };
  },
  methods: {
    Add() {
      var hh = this.htmlStr;
      var regTitle = /(?<=<h2.*>).*(?=<\/.*?h2.*>)/; // Title
      var regApiName = /(?<=接口：).*?(?=<br>)/; // ApiName
      var regDescription = /(?<=描述：).*?(?=<\/p>)/; // Description
      var regInputHtml = /输入参数[/\s/\S]*?输出参数/;
      var regOutputHtml = /输出参数[/\s/\S]*?<\/table>/;
      var regParam = /(?<=<td.*>).*(?=<\/.*td>)/g;
      if (
        !regTitle.test(hh) ||
        !regApiName.test(hh) ||
        !regDescription.test(hh) ||
        !regInputHtml.test(hh) ||
        !regOutputHtml.test(hh)
      ) {
        this.$toast.error({ message: "匹配接口数据失败" });
        return;
      }
      this.apiTitle = regTitle.exec(hh);
      this.apiName = regApiName.exec(hh);
      this.description = regDescription.exec(hh);
      var inputStr = regInputHtml.exec(hh)[0];
      var outputStr = regOutputHtml.exec(hh)[0];
      if (!regParam.test(inputStr) || !regParam.test(outputStr)) {
        this.$toast.error({ message: "输入/输出参数匹配失败！" });
        return;
      }
      this.outputParam = outputStr.match(regParam);
      this.inputParam = inputStr.match(regParam);
      var apiInfo = {
        title: this.apiTitle,
        apiName: this.apiName,
        description: this.description,
        inputParam: this.inputParam,
        outputParam: this.outputParam
      };
      addApi(apiInfo).then(res => {
        console.log(res);
      });
    },
    GetHtml() {
      getHtml(this.url).then(res => {
        if (res.S) {
          this.htmlStr = res.D;
        } else {
          this.$toast.error({ message: res.M });
        }
      });
    },
    GetApis() {
      var hh = this.htmlStr;
      var regTitle = /(?<=<h2.*>).*(?=<\/.*?h2.*>)/; // Title
      var regApiName = /(?<=接口：).*?(?=<br>)/; // ApiName
      var regDescription = /(?<=描述：).*?(?=<\/p>)/; // Description
      var regInputHtml = /输入参数[/\s/\S]*?输出参数/;
      var regOutputHtml = /输出参数[/\s/\S]*?<\/table>/;
      var regParam = /(?<=<td.*>).*(?=<\/.*td>)/g;
      if (
        !regTitle.test(hh) ||
        !regApiName.test(hh) ||
        !regDescription.test(hh) ||
        !regInputHtml.test(hh) ||
        !regOutputHtml.test(hh)
      ) {
        this.$toast.error({ message: "匹配接口数据失败" });
        return;
      }
      this.apiTitle = regTitle.exec(hh);
      this.apiName = regApiName.exec(hh);
      this.description = regDescription.exec(hh);
      var inputStr = regInputHtml.exec(hh)[0];
      var outputStr = regOutputHtml.exec(hh)[0];
      if (!regParam.test(inputStr) || !regParam.test(outputStr)) {
        this.$toast.error({ message: "输入/输出参数匹配失败！" });
        return;
      }
      this.outputParam = outputStr.match(regParam);
      this.inputParam = inputStr.match(regParam);
      if (this.inputParam.length > 0) {
        this.testData = new Array(this.inputParam.length / 4);
      } else {
        this.testData = new Array(0);
      }
    },
    test() {
      var str = "";
      str = "{";
      str +=
        '"api_name":"' +
        this.apiName +
        '","token":"8637e17fe4cbc18f2c412229ad41f8628d0849598c73e4fd3332d8fa","params":';
      str += "{";
      for (var i = 0; i < this.testData.length; i++) {
        if (this.testData[i] !== undefined) {
          str += '"' + this.inputParam[i * 4] + '":"' + this.testData[i] + '",';
        } else {
          str += '"' + this.inputParam[i * 4] + '":"",';
        }
      }
      str = str.substring(0, str.length - 1) + "},";
      str += '"fields":"';
      if (this.outputParam % 3 === 0) {
        for (var j = 0; j < this.outputParam.length; j++) {
          if (j % 3 === 0) {
            str += this.outputParam[j] + ",";
          }
        }
      } else if (this.outputParam % 4 === 0) {
        for (var n = 0; n < this.outputParam.length; n++) {
          if (n % 4 === 0) {
            str += this.outputParam[n] + ",";
          }
        }
      }

      str = str.substring(0, str.length - 1);
      str += '"';
      str += "}";
      this.sendData = JSON.parse(str);
      var testJson = {
        url: "http://api.tushare.pro",
        postData: this.sendData
      };
      testApi(testJson).then(res => {
        res.D = JSON.parse(res.D);
        this.apiResult = res;
      });
    }
  }
};
</script>
<style>
pre {
  white-space: pre-wrap;
}
</style>
