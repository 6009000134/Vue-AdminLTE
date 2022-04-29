<template>
  <div>
    <div class="content row">
      <div class="col-md-12">
        <div class="box box-danger">
          <div class="box-header"></div>
          <div class="box-body">
            <button @click="showModal2()">弹窗</button>
            <!-- <v-notification1></v-notification1> -->
          </div>
        </div>
      </div>
        <div class="col-md-12">
        <div class="box box-danger">
          <div class="box-header"></div>
          <div class="box-body">
            <input type="file" multiple='multiplt' @change="upload" class="form-control" />
          </div>
        </div>
      </div>
       <div>
        <button @click="showModal()">弹窗</button>
        <button @click="showLoad()">加载</button>
        <button @click="sendSingleObject">POST单个对象</button>
        <button @click="sendMultObject">POST对象+基础对象</button>
        <button @click="sendMultObject2">POST多个对象</button>
        <router-link :to="{name:'TableAdd'}">ss</router-link>
      </div>
    </div>
    <load :IsShow.sync="showLoading"></load>
    <emodal :IsShow.sync="IsShow">
      <span>123</span>
    </emodal>
    <router-view></router-view>
    <study v-model="msg" :ms="user" :count2="msg"></study>
    <label>{{msg}}</label>
    <pre>{{user}}</pre>    
  </div>
</template>
<script>
import TestCom from "@/components/Test/TestCom";
import emodal from "@/components/Modal/extendModal.vue";
import load from "@/components/Modal/loading.vue";
import study from "./StudyComponent.vue";
import {
  getList,
  getListMultObject,
  getListMultObject2,
  postFile,
  uploadFile
} from "@/API/test";
export default {
  data() {
    return {
      msg: 2,
      IsShow: false,
      showLoading: false,
      user: { name: "123", age: 12 }
    };
  },
  methods: {
    upload(e) {
      if (e.target.files.length > 0) {
        var file = e.target.files[0];
        console.log(file);
        let formdata = new FormData();
        formdata.append("ff", file, file.name);
        uploadFile(formdata).then(res=>{
          console.log(res);
        });
        // postFile(formdata).then(res => {
        //   console.log(res);
        // });
      }
    },
    showModal() {
      this.IsShow = !this.IsShow;
    },
    showModal2() {
      this.$notice();
    },
    showLoad() {
      this.showLoading = !this.showLoading;
      // setTimeout(() => {
      //   this.showLoading = !this.showLoading;
      // }, 3000);
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
    load,
    study
  }
};
</script>
<style>
.testcss {
}
</style>
