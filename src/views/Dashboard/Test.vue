<template>
  <div>
    <div class="content row">
      <div class="col-md-12">
        <div class="box box-danger">
          <div class="box-header"></div>
          <div class="box-body">
            <input type="file" @change="upload" class="form-control" />
          </div>
        </div>
      </div>
    </div>
    <load :IsShow.sync="showLoading"></load>
    <emodal :IsShow.sync="IsShow">
      <span>123</span>
    </emodal>
    <div class="content-header">
      <h1>
        标题
        <small>小标题</small>
      </h1>
    </div>
    <div class="content">
      <div class="box box-default">
        <div class="box-header with-border">
          <h4>box title</h4>
          <div class="row">
            <div class="col-md-4">
              <span>123</span>
            </div>
            <div class="col-md-4">
              <span>123</span>
            </div>
            <div class="col-md-4">
              <span>123</span>
            </div>
          </div>
        </div>
        <div class="box-body testcss">
          <table class="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>列1</th>
                <th>列2</th>
                <th>列3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>值阿萨德123asd</td>
                <td>值阿萨德123asd</td>
                <td>值阿萨德123asd</td>
              </tr>
              <tr>
                <td>值阿萨德123asd</td>
                <td>值阿萨德123asd</td>
                <td>值阿萨德123asd</td>
              </tr>
              <tr>
                <td>值阿萨德123asd</td>
                <td>值阿萨德123asd</td>
                <td>值阿萨德123asd</td>
              </tr>
            </tbody>
          </table>
          <div class="row media">
            <div class="col-sm-12">
              <div class="pull-right">
                <ul class="pagination">
                  <li class="paginate_button previous disabled" id="example2_previous">
                    <a href="#" aria-controls="example2" data-dt-idx="0" tabindex="0">Previous</a>
                  </li>
                  <li class="paginate_button active">
                    <a href="#" aria-controls="example2" data-dt-idx="1" tabindex="0">1</a>
                  </li>
                  <li class="paginate_button">
                    <a href="#" aria-controls="example2" data-dt-idx="2" tabindex="0">2</a>
                  </li>
                  <li class="paginate_button">
                    <a href="#" aria-controls="example2" data-dt-idx="3" tabindex="0">3</a>
                  </li>
                  <li class="paginate_button">
                    <a href="#" aria-controls="example2" data-dt-idx="4" tabindex="0">4</a>
                  </li>
                  <li class="paginate_button">
                    <a href="#" aria-controls="example2" data-dt-idx="5" tabindex="0">5</a>
                  </li>
                  <li class="paginate_button">
                    <a href="#" aria-controls="example2" data-dt-idx="6" tabindex="0">6</a>
                  </li>
                  <li class="paginate_button next" id="example2_next">
                    <a href="#" aria-controls="example2" data-dt-idx="7" tabindex="0">Next</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="box-body">
          <h1>123</h1>
          <cusCom1 :cusCount="msg" v-model="msg"></cusCom1>
          <input type="text" v-model="msg" />
        </div>
      </div>
    </div>
    <button @click="showModal()">弹窗</button>
    <button @click="showLoad()">加载</button>
    <button @click="sendSingleObject">POST单个对象</button>
    <button @click="sendMultObject">POST对象+基础对象</button>
    <button @click="sendMultObject2">POST多个对象</button>
    <router-link :to="{name:'TableAdd'}">ss</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import TestCom from "@/components/Test/TestCom";
import emodal from "@/components/Modal/extendModal.vue";
import load from "@/components/Modal/loading.vue";
import {
  getList,
  getListMultObject,
  getListMultObject2,
  postFile
} from "@/API/test";
export default {
  data() {
    return {
      msg: 2,
      IsShow: false,
      showLoading: false
    };
  },
  methods: {
    upload(e) {
      if (e.target.files.length > 0) {
        var file = e.target.files[0];
        console.log(file);
        let formdata = new FormData();
        formdata.append("ff", file, file.name);
        postFile(formdata).then(res => {
          console.log(res);
        });
      }
    },
    showModal() {
      this.IsShow = !this.IsShow;
    },
    showLoad() {
      this.showLoading = !this.showLoading;
      setInterval(() => {
        this.showLoading = !this.showLoading;
      }, 3000);
    },
    sendSingleObject() {
      getList([{ name: "123" }, { name: "234" }]).then(res => {
        console.log(res.D);
      });
    },
    sendMultObject() {
      getListMultObject({
        qd: [{ name: "123" }],
        name: "asd"
      }).then(res => {
        console.log(res.D);
      });
    },
    sendMultObject2() {
      getListMultObject2({
        qd: [{ name: "123" }],
        qd2: [{ name: "123" }, { name: "ad2" }]
      }).then(res => {
        console.log(res.D);
      });
    }
  },
  components: {
    cusCom1: TestCom,
    emodal: emodal,
    load
  }
};
</script>
<style>
.testcss {
}
</style>
