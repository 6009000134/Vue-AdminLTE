import axiosService from '@/utils/axiosService';

const controllerName = '/Basic/Table/';

var getTableList = (data) => {
  // return {S: true,M: '',D: null};
  return axiosService.post(controllerName + 'List',data);
};
var addTable = (data) => {
  return axiosService.post(controllerName+'Add',data);
};

export {getTableList,addTable};
