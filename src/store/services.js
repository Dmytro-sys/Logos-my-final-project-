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
    getServices({ state, commit }) {
      if (state.services.length) return Promise.resolve();
      return http.get('/api/content/suffix-blog/service/').then(
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
