import select from './DropDownList/ddl.vue';
import input from './DropDownList/myInput.vue';
import modal from './Modal/modal.vue';
import pagination from '@/components/Pagination';
// const components=[
//   ddl,
//   myInput,
//   modal
// ];
// const install = function(Vue, opts = {}) {

//   components.forEach(component => {
//     Vue.component(component.name, component);
//   });
// };

// const components=[
//   ddl
// ]

export default {
  select: select,
  input: input,
  modal: modal,
  pagination: pagination
};
