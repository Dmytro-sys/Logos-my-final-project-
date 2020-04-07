import { http } from '@/js/plugins/http';

const mutt = {
  SET_SERVICES: 'SET_SERVICES',
  SET_LOADED: 'SET_LOADED',
};

export { mutt };

export default {
  namespaced: true,
  state: {
    services: [],
    loaded: false,
  },
  mutations: {
    [mutt.SET_SERVICES](state, service) {
      state.services = service;
    },
    [mutt.SET_LOADED](state) {
      state.loaded = true;
    },
  },
  actions: {
    getServices({ commit, state }) {
      if (state.loaded) return;

      commit(mutt.SET_LOADED);
      Promise.all([
        new Promise((resolve, reject) => {
          http.get('/app/suffix-blog/content/service').then(
            (r) => {
              commit(mutt.SET_SERVICES, r.data.items);
              resolve(r.data);
            },
            ({ response }) => {
              reject(response.data);
            },
          );
        }),
      ]);
    },
  },
};
