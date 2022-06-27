import axios from 'axios';
import store from '@/store';
import { getToken, setToken, removeToken } from '@/utils/auth';
import router from '@/router';

var basicUrl = 'http://localhost:30826/api/';
// var basicUrl = 'http://192.168.11.27:666/api/';
// var basicUrl = 'http://192.168.20.46:808/api/';
// var basicUrl = 'http://192.168.20.46:8090/api/';
// var basicUrl = ''

const httpService = axios.create({
  baseURL: basicUrl, // api 的 base_url
  // timeout: 5000,// request timeout
  headers: { 'Content-Type': 'application/json' }// ,
  // transformRequest:[function (data) {
  //   // `transformRequest` 允许在向服务器发送前，修改请求数据
  //   // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  //   data.sex = 'man'
  //   return qs.stringify(data)
  //   // 结合create_headers里的内容，在这里又新增一条信息sex=man
  //   // 因此network中查看的结果是：name=xiaoming&age=12&sex=man
  // }]
});
var setFormData = function setFormData() {
  httpService.defaults.headers["Content-Type"] = 'multipart/form-data';
};
httpService.setFormDataType = setFormData;
httpService.defaults.headers.post['Content-Type']='application/json'

httpService.interceptors.response.use(
  response => {
    if (response.status === 200) {
      if (response.headers.token) {
        setToken(response.headers.token);
      } else {
        // router.push({ name: "Login" });
      }
      // else { // 模拟数据，正式环境注释掉此else
      //   localStorage.setItem('token', 'liufei');
      // }
      store.commit('setLoadState', false);
      return response.data;
    }
  }, error => {
    // return Promise.reject(error);
    // TODO:当服务端有响应但服务器响应的状态码不在 2xx 范围内，根据status做出处理，无响应返回自定义错误
    if (error.response) {
      switch (error.response.status) {
        case 401:// TODO：刷新token，若refresh_token和token都失效，则跳转login
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
  // store.commit('setLoadState', true);
  console.log("getToken",getToken());
  if (store.state.token) {
    config.headers.token = store.state.token;
  } else if (getToken()) {
    config.headers.token = getToken();
  }
  // if (config.headers && config.headers["Content-Type"]) {
  // } else {
  //   config.headers["Content-Type"] = "application/json";
  // }
  if (config.headers["Content-Type"].toString() !== "multipart/form-data") {
    config.data = JSON.stringify(config.data);
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default httpService;
