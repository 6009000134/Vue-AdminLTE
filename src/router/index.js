import Vue from 'vue';
import Router from 'vue-router';
import dbRouter from './db.js'
import chartRouter from './chartRouter.js'
import apiRouter from './apiRouter.js'
import tableRouter from './tableRouter.js'
import errorRouter from './errorRouter.js'
import userRouter from './userRouter.js'
import sysRouter from './sys/index.js'

import layout from '@/views/Index'
import notification1 from '@/components/Notification/index1.js';
Vue.use(notification1);
Vue.use(Router);
// TODO:菜单路由设置需要绝对/相对路径标识
const defaultTitle = 'Auctus';
const router = new Router({
  // mode: 'history',
  mode: 'hash',
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
      path: '/Todo',
      name: 'Todo',
      meta: { title: 'Todos', hasChildren: true },
      component: { render: (e) => e("router-view") },
      redirect: { name: 'TodoList' },
      children: [
        {
          path: 'List',
          name: 'TodoList',
          meta: { title: 'Todos', hasChildren: false },
          component: resolve => require(['@/views/Todo/List'], resolve)
        }, {
          path: 'Add',
          name: 'TodoAdd',
          meta: { title: 'Todo-Add', hasChildren: false },
          component: resolve => require(['@/views/Todo/Add'], resolve)
        }, {
          path: 'Edit',
          name: 'TodoEdit',
          meta: { title: 'Todo-Edit', hasChildren: false },
          component: resolve => require(['@/views/Todo/Edit'], resolve)
        }
      ]
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
      redirect: { name: 'Test' },
      children: [
        sysRouter,
        {
          path: '/Auctus/Test',
          name: 'Test',
          meta: { title: '测试', menuName: '测试', hasChildren: false },
          component: resolve => require(['@/views/Dashboard/Test'], resolve)
        }, {
          path: '/Auctus/Example',
          name: 'Example',
          meta: { title: 'Demo', menuName: 'Demo', hasChildren: true },
          component: { render: (e) => e("router-view") },
          redirect: { name: 'ExampleList' },
          children: [
            {
              path: 'List',
              name: 'ExampleList',
              meta: { title: 'List', menuName: 'List', hasChildren: false },
              component: resolve => require(['@/views/Example/List'], resolve),
            },  {
              path: 'Component',
              name: 'ComponentList',
              meta: { title: '组件', menuName: '组件', hasChildren: false },
              component: resolve => require(['@/views/Example/Component'], resolve),
            },
          ]
        }, {
          path: '/Auctus/Dashboard',
          name: 'Dashboard',
          meta: { title: '看板', menuName: '看板', hasChildren: false },
          component: () => import('@/views/Dashboard/UserInfo')
        }, {
          path: '/Auctus/Query/List/',
          name: 'QueryList',
          meta: { title: '查询视图', menuName: '查询视图', hasChildren: false },
          component: resolve => require(["@/views/Query/List"], resolve)
        }, {
          path: '/Auctus/Album',
          name: 'Album',
          meta: { title: '相册', menuName: '相册', hasChildren: true },
          component: { render: (e) => e("router-view") },
          children: [
            {
              path: 'List',
              name: 'AlbumList',
              meta: { title: '相册', menuName: '相册', hasChildren: false },
              component: resolve => require(["@/views/Album/List"], resolve),
            }, {
              path: 'Add',
              name: 'AlbumAdd',
              meta: { title: '新增', menuName: '新增', hasChildren: false },
              component: resolve => require(["@/views/Album/Add"], resolve),
            }
          ]
        }, dbRouter, apiRouter, tableRouter, chartRouter
      ]
    }, errorRouter
  ]
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : defaultTitle;
  // TODO:校验token是否有效，权限是否有效
  next();
});
export default router;
