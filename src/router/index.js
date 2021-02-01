import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const defaultTitle = 'Auctus';
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['@/views/Login/login'], resolve),
      meta: { title: '首页' }
      // redirect: '/Login'
    },
    {
      path: '/Login',
      name: 'Login',
      meta: { title: '登录' },
      component: resolve => require(['@/views/Login/login'], resolve)
    }, {
      path: '/Register',
      name: 'Register',
      meta: { title: '注册' },
      component: () => import('@/views/Register/register')
    }, {
      path: '/Index',
      name: 'Index',
      meta: { title: '首页' },
      component: () => import('@/views/Index'),
      children: [
        {
          path: '/Test',
          name: 'Test',
          meta: { title: '测试', menuName: '测试' },
          component: resolve => require(['@/views/Dashboard/Test'], resolve)
        }, {
          path: '/Dashboard',
          name: 'Dashboard',
          meta: { title: '看板', menuName: '看板' },
          component: () => import('@/views/Dashboard/UserInfo')
        }, {
          path: '/APIS',
          name: 'APIS',
          meta: { title: 'TuShare接口', menuName: 'TuShare接口' },
          component: () => import('@/views/API/APIs'),
          redirect: '/APIs/List',
          children: [
            {
              path: 'List',
              name: 'APIList',
              meta: { title: 'TuShare接口列表', menuName: 'TuShare接口列表' },
              component: resolve => require(["@/views/API/List"], resolve)
            }, {
              path: 'Add',
              name: 'AddAPI',
              meta: { title: '新增接口', menuName: '新增接口' },
              component: resolve => require(["@/views/API/Add"], resolve)
            }, {
              path: 'Edit/:ID',
              name: 'EditAPI',
              meta: { title: '修改接口', menuName: '修改接口' },
              component: resolve => require(["@/views/API/Edit"], resolve)
            }
          ]
        }, {
          path: '/DataBase',
          name: 'DataBase',
          meta: { title: '数据库', menuName: '数据库' },
          component: () => import('@/views/DataBase/DBInfo')
        }, {
          path: '/TableInfo',
          name: 'TableInfo',
          meta: { title: '表信息', menuName: '表信息' },
          component: () => import('@/views/DataBase/TableInfo')
        }, {
          path: '/TableDetail/:tableID',
          name: 'TableDetailInfo',
          meta: { title: '表详情', menuName: '表详情' },
          component: resolve => require(["@/views/DataBase/TableDetail"], resolve)
        }, {
          path: '/ColumnAddModal/:tableID',
          name: 'ColumnAdd',
          meta: { title: '新增列', menuName: '新增列' },
          component: resolve => require(["@/views/DataBase/ColumnAddModal"], resolve)
        }, {
          path: '/Chart',
          name: 'Chart',
          meta: { title: '图表', menuName: '图表' },
          component: resolve => require(["@/views/Chart/chart"], resolve)
        }
      ]
    }, {
      path: '*/:msg?',
      name: 'Error',
      meta: { title: '错误页' },
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
