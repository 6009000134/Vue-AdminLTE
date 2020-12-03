import Mock from 'mockjs';

const basicUrl = 'http://localhost:30826/api/';

var fetchPost = (url,params) => {
  Mock.mock(basicUrl + url,'post',params);
};

export {fetchPost};
