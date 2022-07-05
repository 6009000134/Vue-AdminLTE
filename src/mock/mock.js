import Mock from 'mockjs';

const basicUrl = 'http://localhost:30826/api/';

var fetchPost = (url,params) => {
  Mock.mock(basicUrl + url,'post',params);
};
// Login
fetchPost('Web/Login/Login',{C: '',M: '',S: true,D: {Account: 'liufei22',UserName: '刘飞22213'}});

fetchPost('Basic/DB/List',{C: '',M: '',S: true,D: {Account: 'liufei',UserName: '刘飞22'}});
// 获取表集合
fetchPost('Table/List',{C: '',M: '',S: true,D: {Account: 'liufei',UserName: '刘飞22'}});

