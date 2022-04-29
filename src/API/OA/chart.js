import httpService from '@/utils/httpService';
const controllerName = "Web/OA/";
var getData = (data) => {
  return httpService.post(controllerName + "GetData", data);
};
export { getData };
