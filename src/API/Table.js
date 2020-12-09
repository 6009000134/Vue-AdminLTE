import httpService from '@/utils/httpService';

const controllerName = 'Basic/Table/';

var getTableList = (data) => {
  // return {S: true,M: '',D: null};
  return httpService.post(controllerName + 'List', data);
};
var addTable = (data) => {
  return httpService.post(controllerName + 'Add', data);
};
export { getTableList, addTable };
