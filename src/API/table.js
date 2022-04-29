import httpService from '@/utils/httpService';
import base from '@/utils/http/base';
import httpService2 from '@/utils/http/httpService.js';

const controllerName = 'Basic/Table/';

var getTableList = (data) => {
  // return {S: true,M: '',D: null};
  console.log(data, 'par');
  return httpService.get(controllerName + "List", { params: data });
};
var addTable = (data) => {
  return httpService.post(controllerName + "Add", data);
};
var editTable = (data) => {
  return httpService.post(controllerName + "Edit", data);
};
var deleteTable = (data) => {
  return httpService.get(controllerName + "Delete", { params: data });
};
var getTableDetail = (data) => {
  console.log(JSON.stringify(data));

  // return httpService.get(controllerName + "GetDetail", { params: data });
  // return httpService2.get(`${base.basic}/Table/GetDetail`, { params: { tableID: "123" } });
  return httpService2.get(`${base.basic}/Table/GetDetail`, { params: { queryString: JSON.stringify(data) } });
};
var getSysTableList = (data) => {
  return httpService.get(controllerName + "GetSysTableList", { params: data });
};
var syncTableInfo = (data) => {
  return httpService.post(controllerName + "SyncTableInfo", data);
};

export { getTableList, addTable, editTable, deleteTable, getTableDetail, getSysTableList, syncTableInfo };
