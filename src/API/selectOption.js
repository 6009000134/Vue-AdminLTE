import httpService from '@/utils/httpService';

const controllName = 'Basic/Column/';
var addColumn = (data) => {
  return httpService.post(controllName + 'Add', data);
};

export { addColumn };
