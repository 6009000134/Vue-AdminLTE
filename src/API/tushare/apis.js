import httpService from '@/utils/httpService';
const controllerName = "Web/API/";
var getApis = (data) => {
  return httpService.post(controllerName + "List", data);
};

var getApiDetail = (data) => {
  return httpService.post(controllerName + "Detail", data);
};

var testApi = (data) => {
  return httpService.post(controllerName + "Test", data);
};
var getHtml = (data) => {
  return httpService.post(controllerName + "GetHtml", data);
};
var addApi = (data) => {
  return httpService.post(controllerName + "Add", data);
};
var getDetail = (apiID) => {
  return httpService.post(controllerName + "GetDetail", apiID);
};
var createApiTable = (apiID) => {
  return httpService.post(controllerName + "CreateApiTable", apiID);
};
export { getApis, getApiDetail, testApi, getHtml, addApi, getDetail, createApiTable };
