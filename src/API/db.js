import httpService from '@/utils/httpService';

const controllerName = 'Basic/DB/';

var getDBList = () => {
  return httpService.post(controllerName + 'List');
};

export {getDBList};
