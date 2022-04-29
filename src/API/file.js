import base from '@/utils/http/base';
import httpService from '@/utils/http/httpService.js';

const getFileList = (data) => {
    return httpService.post(`${base.basic}/File/GetListByPath`, data);
}
export { getFileList }