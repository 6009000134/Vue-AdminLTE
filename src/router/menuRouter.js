const menuRouter = {
    path: '/Menu',
    name: 'MenuManagement',
    meta: { title: '菜单管理', menuName: '菜单管理', hasChildren: true },
    component: { render: (e) => e("router-view") },
    redirect: { name: 'MenuList' },
    children: [
        {
            path: 'List',
            name: 'MenuList',
            meta: { title: '菜单列表', menuName: '菜单列表', hasChildren: false },
            component: resolve => require(["@/views/Sys/Menu/List"], resolve)
        },
        {
            path: 'Add',
            name: 'MenuAdd',
            meta: { title: '新增', menuName: '新增', hasChildren: false },
            component: resolve => require(['@/views/Sys/Menu/Add'], resolve)
        },
        {

            path: 'Edit',
            name: 'MenuEdit',
            meta: { title: '编辑', menuName: '编辑', hasChildren: false },
            component: resolve => require(['@/views/Sys/Menu/Edit'], resolve)
        }
    ]
}
export default menuRouter;