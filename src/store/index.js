import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    user: {
      name: '刘飞',
      account: ''
    },
    token: ''
  },
  mutation: {
    setUserName(state, name) {
      state.user.name = name;
    }
  }
});
export default store;
