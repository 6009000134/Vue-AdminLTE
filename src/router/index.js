import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const defaultTitle = 'Auctus';
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['@/views/Login/login'], resolve)
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
          meta: { title: '测试' },
          component: resolve => require(['@/views/Dashboard/Test'], resolve)
        }, {
          path: '/Dashboard',
          name: 'Dashboard',
          meta: { title: '看板' },
          component: () => import('@/views/Dashboard/UserInfo')
        }, {
          path: '/DataBase',
          name: 'DataBase',
          meta: { title: '数据库' },
          component: () => import('@/views/DataBase/DBInfo')
        }, {
          path: '/TableInfo',
          name: 'TableInfo',
          meta: { title: '表' },
          component: () => import('@/views/DataBase/TableInfo')
        }, {
          path: '/TableDetail',
          name: 'TableDetailInfo',
          meta: { title: '表详情' },
          component: resolve => require(["@/views/DataBase/TableDetail"], resolve)
        }
      ]
    }, {
      path: '*/:msg?',
      name: 'Error',
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
