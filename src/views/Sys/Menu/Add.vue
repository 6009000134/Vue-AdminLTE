<template>
  <div>
    <section class="content">
      <div style="position:relative;">
      </div>
      <!-- <div class="content-wrapper"> -->
      <div class="content-wrapper">
        <div class="box box-primary">
          <div class="box-header">
            <h3 class="box-title">菜单信息</h3>
          </div>
          <div class="box-body">
            <div class="mailbox-controls">
              <button class="btn btn-info" @click="getTree()">获取菜单树</button>
              <pre>{{menuArray}}</pre>
              <button class="btn btn-warning" @click="$router.go(-1);">
                <i class="fa fa-arrow-left"></i>返回
              </button>
              <button class="btn btn-success" @click="save()">保存</button>
            </div>
            <div class="container-fluid row">
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-2">创建人</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-4">
                    <input type="text" disabled class="form-control" v-model="menuInfo.CreatedBy" />
                  </div>
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-2">创建时间</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-4">
                    <input type="text" disabled class="form-control" v-model="menuInfo.CreatedDate" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-2">菜单名称</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-4">
                    <input type="text" class="form-control" v-model="menuInfo.MenuName" />
                  </div>
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-2">上级菜单</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-4">
                    <f-select
                      v-model="menuInfo.ParentID"
                      f-key="ID"
                      f-value="FullPath"
                      :datasource="MenuTree"
                    ></f-select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box box-primary">
          <div class="box-header">
            <h3 class="box-title">Vue路由信息</h3>
          </div>
          <div class="box-body">
            <div class="container-fluid row">
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-2">菜单Url</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-4">
                    <input type="text" class="form-control" v-model="menuInfo.Router.Path" />
                  </div>
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-2">路由名称</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-4">
                    <input type="text" class="form-control" v-model="menuInfo.Router.Name" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-2">元数据</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-4">
                    <input type="text" class="form-control" v-model="menuInfo.Router.Meta" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-xs-4 col-sm-4 col-md-2 col-lg-2">Vue文件Url</label>
                  <div class="col-xs-8 col-sm-8 col-md-10 col-lg-10">
                    <f-select v-model="menuInfo.Router.Component" f-value :datasource="FileList"></f-select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { getFileList } from "@/API/file";
import { Add, getMenuList, getTree } from "@/API/menu";
export default {
  data() {
    return {
      menuArray: [],
      page: { pageSize: 12, pageIndex: 1 },
      menuInfo: {
        CreatedBy: this.$store.state.user.name,
        CreatedDate: new Date().toLocaleDateString(),
        MenuName: undefined,
        ParentID: 0,
        Router: {
          Path: "",
          Component: "",
          Name: "",
          Meta: ""
        }
      },
      FileList: undefined,
      MenuTree: []
    };
  },
  methods: {
    init() {
      this.menuInfo = {
        CreatedBy: this.$store.state.user.name,
        CreatedDate: new Date().toLocaleDateString(),
        MenuName: undefined,
        ParentID: 0,
        Router: {
          Path: "",
          Component: "",
          Name: "",
          Meta: ""
        }
      };
      this.getList();
    },
    save() {
      Add(this.menuInfo).then(res => {
        if (res.S) {
          this.$toast.success({ title: "", message: "添加成功！" });
          this.init();
        } else {
          this.$toast.error({ title: "", message: "添加失败！" + res.M });
        }
      });
    },
    getList() {
      getMenuList({
        page: { pageSize: 1000, pageIndex: 1 },
        condition: []
      }).then(res => {
        this.MenuTree = res.D.data;
      });
    },
    getTree() {
      getTree().then(res => {
        this.menuArray = res.D.Table;
      });
    }
  },
  mounted() {
    this.getList();
  },
  created() {
    this.$nextTick(function() {
      getFileList(
        "D:\\刘飞\\项目\\Vue\\Auctus.Platform\\Vue-AdminLTE\\src\\Views"
      ).then(res => {
        this.FileList = res.D;
      });
    });
  }
};
</script>