const apiRouter={
    path: '/Auctus/APIS',
    name: 'APIS',
    meta: { title: 'TuShare接口', menuName: 'TuShare接口', hasChildren: true },
    component: () => import('@/views/API/APIs'),
    redirect: { name: 'APIList' },
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
  } 
  export default apiRouter