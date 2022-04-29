import Vue from 'vue';
import Vuex from 'vuex';
// import myGetter from './getters';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    user: {
      name: '刘飞',
      account: ''
    },
    token: '',
    isLoading: false
  },
  mutations: {
    setUserName(state, name) {
      state.user.name = name;
    },
    setToken(state, token) {
      state.token = token;
    },
    setLoadState(state, isLoading) {
      state.isLoading = isLoading;
    }
  }
});
export default store;
