const prefix = '/Auctus'
const userRouter = {
    path: `${prefix}/User`,
    name: 'User',
    meta: { title: '用户管理', hasChildren: true },
    component: { render: (e) => e("router-view") },
    redirect: { name: 'UserList' },
    children: [{
        path: 'List',
        name: 'UserList',
        meta: { title: '用户列表', menuName: '用户列表', hasChildren: false },
        component: () => import('@/views/User/List'),

    }, {
        path: 'Detail/:userID',
        name: 'UserDetail',
        meta: { title: '用户信息', menuName: '用户信息', hasChildren: false },
        component: resolve => require(["@/views/User/Detail"], resolve)
    }
    ]
};
export default userRouter;