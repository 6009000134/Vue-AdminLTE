import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/Login/login')
    }, {
      path: '/Register',
      name: 'Register',
      component: () => import('@/views/Register/register')
    }, {
      path: '/Index',
      name: 'Index',
      component: () => import('@/views/Index'),
      children: [
        {
          path: '/Test',
          name: 'Test',
          component: resolve => require(['@/views/Dashboard/Test'], resolve)
        }, {
          path: '/Dashboard',
          name: 'Dashboard',
          component: () => import('@/views/Dashboard/UserInfo')
        }, {
          path: '/Index',
          name: 'DataBase',
          component: () => import('@/views/DataBase/DBInfo')
        }, {
          path: '/TableInfo',
          name: 'TableInfo',
          component: () => import('@/views/DataBase/TableInfo')
        }, {
          path: '/TableDetail',
          name: 'TableDetailInfo',
          component: resolve => require(["@/views/DataBase/TableDetail"], resolve)
        }
      ]
    }
    // ,
    // {
    //   path:'/',
    //   name:'index',
    //   component:()=>import('@/views/index')
    // }
  ]
});
