import store from '../store/index.js';
const tokenKey = "token";
const getToken = function () {
  var token = localStorage.getItem(tokenKey);
  if (token) {
    store.commit("setToken", token);
  }
  return token;
};
const setToken = function (data) {
    store.commit("setToken", data);
    localStorage.setItem(tokenKey, data);
};
const removeToken = function () {
  return localStorage.removeItem(tokenKey);
};
export { getToken, setToken, removeToken };
