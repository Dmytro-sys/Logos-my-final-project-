import { http } from '@/js/plugins/http';

export default {
  namespaced: true,
  state: {
    services: [],
  },
  mutations: {
    get_services(state, rec) {
      state.services = rec;
    },
  },
  actions: {
    getServices({
      commit,
    }) {
      return http.get('/app/suffix-blog/content/service').then(
        (r) => {
          commit('get_services', r.data.items);
        },
        () => {
          throw new Error();
        },
      );
    },
  },

  getters: {},
};
/* eslint-disable */
