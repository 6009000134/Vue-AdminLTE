import menuRouter from './../menuRouter'
import userRouter from './../userRouter'
const sysRouter={
    path: '/Auctus/Sys',
    name: 'SysManagement',
    meta: { title: '系统管理', menuName: '系统管理', hasChildren: true },
    component: { render: (e) => e("router-view") },
    redirect: { name: 'MenuManagement' },
    children: [
        menuRouter,
        userRouter
    ]
}
export default sysRouter;