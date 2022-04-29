import httpService from '@/utils/httpService';

const controllerName = 'Basic/DB/';

var getDBList = () => {
  return httpService.get(controllerName + 'List');
};

export {getDBList};
