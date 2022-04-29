import base from '@/utils/http/base';
import httpService from '@/utils/http/httpService.js';

const controllerName = `${base.web}/Todo/`;

var addTodo = (data) => {
    return httpService.post(controllerName + "Add", data);
};
var getTodoList=(data)=>{
    return httpService.post(controllerName + "List", data);
}
export { addTodo ,getTodoList};
