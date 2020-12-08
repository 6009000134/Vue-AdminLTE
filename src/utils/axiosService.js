import axios from 'axios';
import store from '@/store';
import { getToken } from '@/utils/auth';

var basicUrl = 'http://localhost:30826/api/';
// var basicUrl = ''

const axiosService = axios.create({
  baseURL: basicUrl// , // api 的 base_url
  // timeout: 5000,// request timeout
  // headers: {'Content-Type': 'application/json', 'token': '123'}
});

axiosService.interceptors.response.use(function (response) {
  // console.log('响应信息:');
  // console.log(response);
  if (response.headers.token) {
    localStorage.setItem('token', response.headers.token);
  }
  // else { // 模拟数据，正式环境注释掉此else
  //   localStorage.setItem('token', 'liufei');
  // }
  if (response.status === 200) {
    return response.data;
  }
}, function (error) {
  return Promise.reject(error);
  // TODO:当服务端有响应但服务器响应的状态码不在 2xx 范围内，根据status做出处理，无响应返回自定义错误
  // if (error.response) {
  //   return Promise.reject(error);
  // } else {
  //   return Promise.reject({ response: { status: 'custError',msg: 'error' } });
  // }
});

axiosService.interceptors.request.use(function (config) {
  // console.log('请求信息');
  // console.log(config);
  if (store.state.token) {
    config.headers.token = getToken();
  }
  if (config.headers) {
    config.headers.token = localStorage.getItem('token');
  }
  return config;
}, function (error) {
  // console.log('请求错误');
  // console.log(error);
  return Promise.reject(error);
});

export default axiosService;
