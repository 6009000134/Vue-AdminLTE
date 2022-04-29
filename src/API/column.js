import httpService from '@/utils/httpService';
const controllerName = "Basic/Column/";
var getColumnList = (data) => {
  return httpService.post(controllerName + "List", data);
};
var addColumn = (data) => {
  return httpService.post(controllerName + "AddColumn", data);
};
var editColumn = (data) => {
  return httpService.post(controllerName + "Edit", data);
};
var deleteColumn = (data) => {
  return httpService.post(controllerName + "Delete", data);
};
export { getColumnList, addColumn, editColumn, deleteColumn };
