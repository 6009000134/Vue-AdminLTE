import httpService from '@/utils/http/httpService';
import base from '@/utils/http/base';

var getList = (id) => {
  var data = { ID: id, page: { pageSize: 10, pageIndex: 1 } };
  return httpService.post(`${base.web}/Query/List`, data);
};
export { getList };
