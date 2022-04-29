const errorRouter = {
    path: '*/:msg?',
    name: 'Error',
    meta: { title: '错误页', hasChildren: false },
    component: resolve => require(['@/views/Error/Error404'], resolve)
    // component: resolve => require(['@/views/Login/login'], resolve)
}
export default errorRouter;