import httpService from '@/utils/httpService';

const controllerName = 'Basic/Table/';

var getTableList = (data) => {
  // return {S: true,M: '',D: null};
  return httpService.post(controllerName + "List", data);
};
var addTable = (data) => {
  return httpService.post(controllerName + "Add", data);
};
var editTable = (data) => {
  return httpService.post(controllerName + "Edit", data);
};
var deleteTable = (data) => {
  return httpService.post(controllerName + "Delete", data);
};
var getTableDetail = (data) => {
  return httpService.post(controllerName + "GetDetail", data);
};
export { getTableList, addTable, editTable, deleteTable, getTableDetail };
