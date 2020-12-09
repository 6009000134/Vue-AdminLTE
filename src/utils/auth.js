const tokenKey = "token";
const getToken = function () {
  return localStorage.getItem(tokenKey);
};
const setToken = function () {
  return localStorage.setItem(tokenKey, tokenKey);
};
const removeToken = function () {
  return localStorage.removeItem(tokenKey);
};
export { getToken, setToken, removeToken };
