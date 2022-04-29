const tokenKey = "token";
const getToken = function () {
  return localStorage.getItem(tokenKey);
};
const setToken = function (data) {
  return localStorage.setItem(tokenKey, data);
};
const removeToken = function () {
  return localStorage.removeItem(tokenKey);
};
export { getToken, setToken, removeToken };
