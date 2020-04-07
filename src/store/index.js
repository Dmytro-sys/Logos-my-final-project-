import Vue from 'vue';
import Vuex from 'vuex';

import services from '@/store/services';
import auth from '@/store/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    services,
  },
});
