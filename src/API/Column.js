import axiosService from '@/utils/axiosService';
const controllerName="Basic/Column/";
var getColumnList = (data) => {
  return axiosService.post(controllerName+'List',data);
};
export {getColumnList};
