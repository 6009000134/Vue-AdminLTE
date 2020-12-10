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
  mutations: {
    setUserName(state, name) {
      state.user.name = name;
    },
    setToken(state, token) {
      state.token = token;
    }
  }
});
export default store;
