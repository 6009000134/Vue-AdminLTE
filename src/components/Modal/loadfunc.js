import Vue from 'vue'
import Loading from './loading.vue'
const LoadConstructor = Vue.extend(Loading);

const notice = (options) => {
  const instance = new LoadConstructor({
    propsData: {
      IsShow: true,
      title: 'test',
      content: 'ccc'
    }
  });
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  return instance.vm;
}
export default notice;
