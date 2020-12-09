import httpService from '@/utils/httpService';
const controllerName="Basic/Column/";
var getColumnList = (data) => {
  return httpService.post(controllerName+'List',data);
};
export {getColumnList};
