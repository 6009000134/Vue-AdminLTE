import httpService from '@/utils/http/httpService';
import base from '@/utils/http/base'
const controllName = `${base.web}/Register/`;

var register = (data) => {
  console.log(data, 33);
  return httpService.post(controllName + 'Register', data);
};

var login = (data) => {
  return httpService.post('Web/Login/Login', data);
};

var getUserList = (data) => {
  console.log(data);
  return httpService.post(`${base.basic}/User/List`, data);
}
var getUserDetail = (data) => {
  return httpService.post(`${base.basic}/User/Detail`, data)
}
var edit = (data) => {
  return httpService.post(`${base.basic}/User/Edit`, data)
}
export { register, login, getUserList, getUserDetail, edit };
