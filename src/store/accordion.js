import { http } from '@/js/plugins/http';

export default {
  namespaced: true,
  state: {
    accordionSections: [],
  },
  mutations: {
    get_accordion(state, section) {
      state.accordionSections = section;
    },
  },
  actions: {
    getAccordion({ state, commit }) {
      if (state.accordionSections.length) return Promise.resolve();
      return http.get('/api/content/suffix-blog/accordion/').then(
        (r) => {
          commit('get_accordion', r.data.items);
        },
        () => {
          throw new Error();
        },
      );
    },
  },

};
