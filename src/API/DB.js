import axiosService from '@/utils/axiosService';

const controllerName = '/Basic/DB/';

var getDBList = () => {
  return axiosService.post(controllerName + 'List');
};

export {getDBList};
