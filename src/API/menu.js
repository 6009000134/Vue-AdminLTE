import httpService from '@/utils/http/httpService';
import base from '@/utils/http/base';

var Add = (data) => {
  return httpService.post(`${base.basic}/Menu/Add`, data);
};
var getMenuList = (data) => {
  return httpService.post(`${base.basic}/Menu/List`,data);
}
var getMenuByID=(data)=>{
  return httpService.post(`${base.basic}/Menu/Detail`,data);
}
var Edit=(data)=>{
  return httpService.post(`${base.basic}/Menu/Edit`,data);
}
var getTree=()=>{
  return httpService.get(`${base.basic}/Menu/GetMenuTree`);
}
export { Add,Edit, getMenuList,getMenuByID,getTree };
