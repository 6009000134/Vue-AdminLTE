<template>
  <div>
    <section class="content">
      <div class="col-xs-12">
        <div class="box box-primary">
          <div class="box-header">
            <h1>用户信息</h1>
          </div>
          <div class="box-body">
            <div class="container-fluid row">
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-2">创建人</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-4">
                    <input type="text" disabled class="form-control" v-model="userInfo.CreatedBy" />
                  </div>
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-2">创建时间</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-4">
                    <input type="text" disabled class="form-control" v-model="userInfo.CreatedDate" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-2">修改人</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-4">
                    <input type="text" disabled class="form-control" v-model="userInfo.UpdatedBy" />
                  </div>
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-2">修改时间</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-4">
                    <input type="text" disabled class="form-control" v-model="userInfo.UpdatedDate" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-2">账号</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-4">
                    <input type="text" disabled class="form-control" v-model="userInfo.Account" />
                  </div>
                  <label class="control-label col-xs-4 col-sm-4 col-md-4 col-lg-2">姓名</label>
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-4">
                    <input type="text" class="form-control" v-model="userInfo.UserName" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="box-footer">
            <button class="btn btn-success" @click="edit">保存</button>
            <button class="btn btn-warning" @click="$router.go(-1)">返回</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { getUserDetail, edit } from "@/API/users";
export default {
  data() {
    return {
      userID: undefined,
      userInfo: {}
    };
  },
  methods: {
    edit() {
      this.userInfo.UpdatedBy = this.$store.state.user.name;
      edit(this.userInfo).then(res => {
        if (res.S) {
          this.getDetail()
          this.$toast.success({ message: "修改成功" });
        } else {
          this.getDetail()
          this.$toast.error({ message: res.M, title: "修改失败" });
        }
      });
    },
    getDetail() {
      getUserDetail(this.userID).then(res => {
        if (res.S) {
          this.userInfo = res.D;
        } else {
          this.$toast.error({ message: res.M, title: "获取用户信息失败" });
        }
      });
    }
  },
  mounted() {
    this.userID = this.$route.params.userID;
    this.getDetail();
  }
};
</script>