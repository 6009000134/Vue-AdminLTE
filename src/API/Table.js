import axiosService from '@/utils/axiosService'

const controllerName = '/Basic/Table/'

var getTableList = (data) => {
    console.log(data)
  return axiosService.post(controllerName + 'List', data)
}

export {getTableList}
