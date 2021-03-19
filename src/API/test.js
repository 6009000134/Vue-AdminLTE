import httpService from '@/utils/httpService';

const controllerName = 'Basic/TestAPI/';

var getList = (data) => {
  // return {S: true,M: '',D: null};
  console.log(data, 'par');
  return httpService.post(controllerName + "List", data);
};
var getListMultObject = (data) => {
  // return {S: true,M: '',D: null};
  console.log(data, 'par');
  return httpService.post(controllerName + "List2", data);
  // , { headers: { "Content-Type": "application/x-www-from-urlencoded" } }
};
var getListMultObject2 = (data) => {
  // return {S: true,M: '',D: null};
  console.log(data, 'par');
  return httpService.post(controllerName + "List3", data);
  // , { headers: { "Content-Type": "application/x-www-from-urlencoded" } }
};
export { getList, getListMultObject, getListMultObject2 };
