import axiosService from '@/utils/axiosService';
const controllName = '/Web/Register/';

var register = (data) => {
  return axiosService.post(controllName + 'Register',data).then(function (data2) {
    console.log(data2.Headers);
    console.log('success');
  }).catch(err => {
    console.log(err.data);
    console.log('error');
  });
};

var login = (data) => {
  return axiosService.post('/Web/Login/Login',data);
};

export {register,login};
