import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
})
