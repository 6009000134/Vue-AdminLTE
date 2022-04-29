const chartRouter = {
    path: '/Auctus/Chart',
    name: 'Chart',
    meta: { title: '图表', menuName: '图表', hasChildren: true },
    component: resolve => require(["@/views/Chart/chart"], resolve),
    redirect: { name: 'ChartDemo' },
    children: [
        {
            path: 'Demo',
            name: 'ChartDemo',
            meta: { title: 'Demo', menuName: 'Demo', hasChildren: false },
            component: resolve => require(["@/views/Chart/demo"], resolve)
        }, {
            path: 'OAChart',
            name: 'OAChart',
            meta: { title: 'OAChart', menuName: 'OA图表', hasChildren: false },
            component: resolve => require(["@/views/Chart/oachart"], resolve)
        }
    ]
}
export default chartRouter;