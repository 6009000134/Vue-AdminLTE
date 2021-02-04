import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
// TODO:菜单路由设置需要绝对/相对路径标识
const defaultTitle = 'Auctus';
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['@/views/Login/login'], resolve),
      meta: { title: '默认首页', hasChildren: false }
      // redirect: '/Login'
    },
    {
      path: '/Login',
      name: 'Login',
      meta: { title: '登录', hasChildren: false },
      component: resolve => require(['@/views/Login/login'], resolve)
    }, {
      path: '/Register',
      name: 'Register',
      meta: { title: '注册', hasChildren: false },
      component: () => import('@/views/Register/register')
    }, {
      path: '/Auctus',
      name: 'Index',
      meta: { title: '首页', hasChildren: true },
      component: () => import('@/views/Index'),
      children: [
        {
          path: '/Auctus/Test',
          name: 'Test',
          meta: { title: '测试', menuName: '测试', hasChildren: false },
          component: resolve => require(['@/views/Dashboard/Test'], resolve)
        }, {
          path: '/Auctus/Dashboard',
          name: 'Dashboard',
          meta: { title: '看板', menuName: '看板', hasChildren: false },
          component: () => import('@/views/Dashboard/UserInfo')
        }, {
          path: '/Auctus/APIS',
          name: 'APIS',
          meta: { title: 'TuShare接口', menuName: 'TuShare接口', hasChildren: true },
          component: () => import('@/views/API/APIs'),
          redirect: 'List',
          children: [
            {
              path: 'List',
              name: 'APIList',
              meta: { title: '接口列表', menuName: '接口列表', hasChildren: false },
              component: resolve => require(["@/views/API/List"], resolve)
            }, {
              path: 'Add',
              name: 'AddAPI',
              meta: { title: '新增接口', menuName: '新增接口', hasChildren: false },
              component: resolve => require(["@/views/API/Add"], resolve)
            }, {
              path: 'Edit/:ID',
              name: 'EditAPI',
              meta: { title: '修改接口', menuName: '修改接口', hasChildren: false },
              component: resolve => require(["@/views/API/Edit"], resolve)
            }
          ]
        }, {
          path: '/Auctus/DataBase',
          name: 'DataBase',
          meta: { title: '数据库', menuName: '数据库', hasChildren: false },
          component: () => import('@/views/DataBase/DBInfo')
        }, {
          path: '/Auctus/TableInfo',
          name: 'TableInfo',
          meta: { title: '表信息', menuName: '表信息', hasChildren: false },
          component: () => import('@/views/DataBase/TableInfo')
        }, {
          path: '/Auctus/TableDetail/:tableID',
          name: 'TableDetailInfo',
          meta: { title: '表详情', menuName: '表详情', hasChildren: false },
          component: resolve => require(["@/views/DataBase/TableDetail"], resolve)
        }, {
          path: '/Auctus/ColumnAddModal/:tableID',
          name: 'ColumnAdd',
          meta: { title: '新增列', menuName: '新增列', hasChildren: false },
          component: resolve => require(["@/views/DataBase/ColumnAddModal"], resolve)
        }, {
          path: '/Auctus/Chart',
          name: 'Chart',
          meta: { title: '图表', menuName: '图表', hasChildren: true },
          component: resolve => require(["@/views/Chart/chart"], resolve),
          children: [
            {
              path: 'Demo',
              name: 'ChartDemo',
              meta: { title: 'Demo', menuName: 'Demo', hasChildren: false },
              component: resolve => require(["@/views/Chart/demo"], resolve)
            }
          ]
        }
      ]
    }, {
      path: '*/:msg?',
      name: 'Error',
      meta: { title: '错误页', hasChildren: false },
      component: resolve => require(['@/views/Error/Error404'], resolve)
    }
  ]
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : defaultTitle;
  // TODO:校验token是否有效，权限是否有效
  next();
});
export default router;
