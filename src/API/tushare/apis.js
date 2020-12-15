import httpService from '@/utils/httpService';
const controllerName = "Web/API/";
var getApis = (data) => {
  return httpService.post(controllerName + "List", data);
};

var getApiDetail = (data) => {
  return httpService.post(controllerName + "Detail", data);
};

export { getApis, getApiDetail };
