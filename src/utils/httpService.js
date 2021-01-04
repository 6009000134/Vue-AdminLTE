import axios from 'axios';
import store from '@/store';
import { getToken, setToken } from '@/utils/auth';
import router from '@/router';

var basicUrl = 'http://localhost:30826/api/';
// var basicUrl = ''

const httpService = axios.create({
  baseURL: basicUrl, // api 的 base_url
  // timeout: 5000,// request timeout
  headers: { 'Content-Type': 'application/json' }
});

httpService.interceptors.response.use(
  response => {
    /// console.log('Response', response);
    if (response.status === 200) {
      if (response.headers.token) {
        setToken(response.headers.token);
        store.commit('setToken', response.headers.token);
      } else {
        // router.push({ name: "Login" });
      }
      // else { // 模拟数据，正式环境注释掉此else
      //   localStorage.setItem('token', 'liufei');
      // }
      return response.data;
    }
  }, error => {
    // return Promise.reject(error);
    // TODO:当服务端有响应但服务器响应的状态码不在 2xx 范围内，根据status做出处理，无响应返回自定义错误
    if (error.response) {
      switch (error.response.status) {
        case 401:
          router.push({ name: 'Login' });
          break;
        case 404:
          router.push({ name: 'Error', params: { status: error.response.status, msg: error.response.data.Message } });
          break;
        case 500:
          router.push({ name: 'Error', params: { status: error.response.status, msg: error.response.data.Message } });
          break;
        default:
          router.push({ name: 'Error', params: { status: error.response.status, msg: error.response.data.Message } });
          break;
      }
      return Promise.reject(error);
    } else {
      router.push({ name: 'Error', params: { msg: '123' } });
      return Promise.reject(error);
    }
  }
);

httpService.interceptors.request.use(function (config) {
  config.data=JSON.stringify(config.data);
  // console.log('request', config);
  console.log(store.state.token);
  if (store.state.token) {
    config.headers.token = store.state.token;
  } else if (getToken()) {
    config.headers.token = getToken();
  }
  return config;
}, error => {
  console.log('requestError', error);
  return Promise.reject(error);
});

export default httpService;
