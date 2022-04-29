const tableRouter = {
    path: '/Auctus/Table',
    name: 'Table ',
    meta: { title: '首页', hasChildren: true },
    component: { render: (e) => e("router-view") },
    redirect: { name: 'TableInfo' },
    children: [{
        path: 'TableInfo',
        name: 'TableInfo',
        meta: { title: '表信息', menuName: '表信息', hasChildren: false },
        component: () => import('@/views/DataBase/TableInfo'),

    }, {
        path: 'TableDetail/:tableID',
        name: 'TableDetailInfo',
        meta: { title: '表详情', menuName: '表详情', hasChildren: false },
        component: resolve => require(["@/views/DataBase/TableDetail"], resolve)
    }, {
        path: 'SysTable',
        name: 'SysTable',
        meta: { title: '数据库表信息', menuName: '数据库表信息', hasChildren: false },
        component: () => import('@/views/DataBase/SysTable')
    }, {
        path: '/Auctus/Column/Add/:tableID',
        name: 'ColumnAdd',
        meta: { title: '新增列', menuName: '新增列', hasChildren: false },
        component: resolve => require(["@/views/DataBase/Column/Add"], resolve)
    }
    ]
};
export default tableRouter;