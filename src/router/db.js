const dbRouter =
{
    path: '/Auctus/DataBase',
    name: 'DataBase',
    meta: { title: '数据库', menuName: '数据库', hasChildren: false },
    component: () => import('@/views/DataBase/DBInfo')
}

export default dbRouter;