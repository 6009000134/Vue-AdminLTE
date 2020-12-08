import axiosService from '@/utils/axiosService';
const controllName = 'Web/Register/';

var register = (data) => {
  return axiosService.post(controllName + 'Register', data);
};

var login = (data) => {
  return axiosService.post('Web/Login/Login', data);
};
var validateToken = (data) => {
  return axiosService.post("Web/Login/ValidateToken", data);
};
export { register, login, validateToken };
