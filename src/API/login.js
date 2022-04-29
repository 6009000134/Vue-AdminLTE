import httpService from '@/utils/httpService';
const controllName = 'Web/Register/';

var register = (data) => {
  return httpService.post(controllName + 'Register', data);
};

var login = (data) => {
  return httpService.post('Web/Login/Login', data);
};
var validateToken = (data) => {
  // return httpService.post("Web/Login/ValidateToken", data);
  return null;
};
export { register, login, validateToken };
