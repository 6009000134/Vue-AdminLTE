import axios from 'axios';
import store from '@/store';
import { getToken, setToken } from '@/utils/auth';
// import store from '@/store';
// import { getToken, setToken, removeToken } from '@/utils/auth';
import router from '@/router';

var instance = axios.create({
  timeout: 1000 * 60,
  headers:{"Content-Type":"application/json"}
});
  instance.interceptors.response.use(
  response => {
    if (response.status === 200) {
      if (response.headers.token) {
        setToken(response.headers.token);
        store.commit('setToken', response.headers.token);
      }
      store.commit('setLoadState', false);
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

instance.interceptors.request.use(function (config) {
  if (store.state.token) {
    config.headers.token = store.state.token;
  } else if (getToken()) {
    config.headers.token = getToken();
  }
  // config.headers["Content-Type"] = "application/x-www-form-urlencoded";
  if (config.headers["Content-Type"].toString() !== "multipart/form-data") {
    config.data = JSON.stringify(config.data);
  }
  // config.data = JSON.stringify(config.data);
  // console.log(config);
  return config;
}, error => {
  return Promise.reject(error);
});

export default instance;
