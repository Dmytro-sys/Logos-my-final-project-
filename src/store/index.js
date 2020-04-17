import Vue from 'vue';
import Vuex from 'vuex';

import services from '@/store/services';
import accordion from '@/store/accordion';
import auth from '@/store/auth';
import blog from '@/store/blog';

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
    accordion,
    blog,
  },
});
