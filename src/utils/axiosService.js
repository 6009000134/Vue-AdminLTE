import axios from 'axios'

// var basicUrl = 'http://localhost:30826/api/'
var basicUrl = ''

const axiosService = axios.create({
  baseURL: basicUrl// , // api 的 base_url
  // timeout: 5000,// request timeout
  // headers: {'Content-Type': 'application/json', 'token': '123'}
})

axiosService.interceptors.response.use(function (response) {
  if (response.headers.token) {
    localStorage.setItem('token', response.headers.token)
  }
  if (response.status === 200) {
    return response.data
  }
}, function (error) {
  return Promise.reject(error)
})

axiosService.interceptors.request.use(function (config) {
  if (config.headers) {
    config.headers.token = localStorage.getItem('token')
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default axiosService
