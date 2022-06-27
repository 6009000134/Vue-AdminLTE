import httpService from '@/utils/http/httpService';
import base from '@/utils/http/base';

const controllerName = `${base.web}/API/`;
var getApis = (data) => {
  return httpService.post(controllerName + "List", data,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
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
var getApiResult = (inputData) => {
  console.log(inputData);
  return httpService.post(controllerName + "GetApiResult", inputData);
};
var getDividendResult = (inputData) => {
  return httpService.post(controllerName + "GetDividendResult", inputData);
};
var getDividendResults = (inputData) => {
  return httpService.post(controllerName + "GetDividendResultMultiple", inputData);
};
export { getApis, getApiDetail, testApi, getHtml, addApi, getDetail, createApiTable, getApiResult, getDividendResult, getDividendResults };
