<template>
  <div>
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar" style="height: auto;">
        <!-- search form -->
        <form action="#" method="get" class="sidebar-form">
          <div class="input-group">
            <input type="text" name="q" class="form-control" placeholder="Search..." />
            <span class="input-group-btn">
              <button type="submit" name="search" id="search-btn" class="btn btn-flat">
                <i class="fa fa-search"></i>
              </button>
            </span>
          </div>
        </form>
        <!-- /.search form -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu tree" data-widget="tree">
          <li
            v-for="(item,key) in routeList"
            :key="key"
            :class="{'treeview':item.meta.hasChildren}"
          >
            <router-link v-if="!item.meta.hasChildren" :to="item.path" :title="item.meta.title">
              <i class="fa fa-circle-o"></i>
              <span>{{item.meta.title}}</span>
            </router-link>
            <a v-if="item.meta.hasChildren" href="javascript:void()">
              <i class="fa fa-dashboard"></i>
              <span>{{item.meta.title}}</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul v-if="item.meta.hasChildren" class="treeview-menu">
              <li
                v-for="(v,k) in item.children"
                :key="k"
                :class="{'active':v.name==$route.name,'treeview':v.meta.hasChildren}"
              >
                <router-link v-if="!v.meta.hasChildren" :to="item.path+'/'+v.path">
                  <i class="fa fa-circle-o"></i>
                  {{v.meta.title}}
                </router-link>
                <a v-if="v.meta.hasChildren" href="javascript:void()">
                  <i class="fa fa-dashboard"></i>
                  <span>{{v.meta.title}}</span>
                  <span class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                <ul v-if="v.meta.hasChildren" class="treeview-menu">
                  <li
                    v-for="(vc,kc) in v.children"
                    :key="kc"
                    :class="{'active':vc.name==$route.name}"
                  >
                    <router-link :to="v.path+'/'+vc.path">
                      <i class="fa fa-dashboard"></i>
                      <span>{{vc.meta.title}}</span>
                      <span v-if="vc.meta.hasChildren" class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                      </span>
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <!-- /.sidebar -->
    </aside>
  </div>
</template>
<script>
import treemenu from "@/utils/treemenu.js";
export default {
  data() {
    return {
      routeList: [],
      name: ""
    };
  },
  methods: {},
  mounted() {
    // TODO:修改成从数据库读取用户菜单权限
    var menus = this.$router.options.routes.filter(function(
      item,
      index,
      array
    ) {
      return item.path === "/Auctus";
    });
    if (menus.length > 0) {
      this.routeList = menus[0].children;
    } else {
      this.$toast.error({ message: "菜单加载失败！" });
    }
    this.name = this.$store.state.user.name;
  },
  created: function() {
    treemenu();
  }
};
</script>
