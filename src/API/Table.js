import axiosService from '@/utils/axiosService'

const controllerName = '/Basic/Table/'

var getTableList = (data) => {
  return {S: true, M: '', D: null}
  // return axiosService.post(controllerName + 'List', data)
}

export {getTableList}
