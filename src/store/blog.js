import { http } from '@/js/plugins/http';

const mutt = {
  // SET_ARTICLES: 'SET_ARTICLES',
  SET_TAGS: 'SET_TAGS',
  SET_LOADED: 'SET_LOADED',
  SET_FEATUREDARTICLES: 'SET_FEATUREDARTICLES',
  SET_ISSUEARTICLES: ' SET_ISSUEARTICLES',
  SET_NEWSARTICLES: 'SET_NEWSARTICLES',
  SET_INTERVIEWSARTICLES: 'SET_INTERVIEWSARTICLES',
};

export { mutt };

export default {
  namespaced: true,
  state: {
    featuredArticles: [],
    issueArticles: [],
    newsArticles: [],
    interviewsArticles: [],
    // articles: [],
    tags: [],
    loaded: false,
  },
  mutations: {
    // [mutt.SET_ARTICLES](state, articles) {
    //   state.articles = articles;
    // },
    [mutt.SET_FEATUREDARTICLES](state, featuredArticles) {
      state.featuredArticles = featuredArticles;
    },
    [mutt.SET_ISSUEARTICLES](state, issueArticles) {
      state.issueArticles = issueArticles;
    },
    [mutt.SET_NEWSARTICLES](state, newsArticles) {
      state.newsArticles = newsArticles;
    },
    [mutt.SET_INTERVIEWSARTICLES](state, interviewsArticles) {
      state.interviewsArticles = interviewsArticles;
    },
    [mutt.SET_TAGS](state, tags) {
      state.tags = tags;
    },
    [mutt.SET_LOADED](state) {
      state.loaded = true;
    },
  },
  actions: {
    getTags({ state, commit }) {
      if (state.tags.length) return Promise.resolve();

      return new Promise((resolve, reject) => {
        http.get('/api/content/suffix-blog/category/').then(
          (r) => {
            commit(mutt.SET_TAGS, r.data.items);
            resolve(r.data);
          },
          ({ response }) => {
            reject(response.data);
          },
        );
      });
    },
    // getArticles({ commit, state, dispatch }) {
    //   if (state.loaded) return;

    //   commit(mutt.SET_LOADED);
    //   return Promise.all([
    //     new Promise((resolve, reject) => {
    //       http.get('/api/content/suffix-blog/articles/').then(
    //         r => {
    //           commit(mutt.SET_ARTICLES, r.data.items);
    //           resolve(r.data);
    //         },
    //         ({
    //           response
    //         }) => {
    //           reject(response.data);
    //         }
    //       );
    //     }),
    //     dispatch('getTags')
    //   ]);
    // },
    getFeatured({ commit }) {
      const tag = 'c354a6d4-03bd-40ba-875d-0c7c6b814bbd';
      // state.tags.find(tag => tag.id == 'c354a6d4-03bd-40ba-875d-0c7c6b814bbd');
      const objectWithSettings = {
        params: {
          $filter: `data/ref/iv eq '${tag}'`,
          $top: 6,
        },
      };
      return Promise.all([
        (new Promise((resolve, reject) => {
          http.get('/api/content/suffix-blog/articles/', objectWithSettings).then(
            (r) => {
              commit(mutt.SET_FEATUREDARTICLES, r.data.items);
              resolve(r.data);
            },
            ({ response }) => {
              reject(response.data);
            },
          );
        })),
      ]);
    },
    getIssue({ commit }) {
      const tag = '6c3bd1fa-0e44-4593-ba77-1abfee35363d';
      const objectWithSettings = {
        params: {
          $filter: `data/ref/iv eq '${tag}'`,
          $top: 1,
        },
      };
      return Promise.all([
        (new Promise((resolve, reject) => {
          http.get('/api/content/suffix-blog/articles/', objectWithSettings).then(
            (r) => {
              commit(mutt.SET_ISSUEARTICLES, r.data.items);
              resolve(r.data);
            },
            ({ response }) => {
              reject(response.data);
            },
          );
        })),
      ]);
    },
    getNews({ commit }) {
      const tag = '142d92a5-16ef-4281-b486-0d51f963f8bf';
      const objectWithSettings = {
        params: {
          $filter: `data/ref/iv eq '${tag}'`,
          $top: 3,
        },
      };
      return Promise.all([
        (new Promise((resolve, reject) => {
          http.get('/api/content/suffix-blog/articles/', objectWithSettings).then(
            (r) => {
              commit(mutt.SET_NEWSARTICLES, r.data.items);
              resolve(r.data);
            },
            ({ response }) => {
              reject(response.data);
            },
          );
        })),
      ]);
    },
    getinterviews({ commit }) {
      const tag = '4b69a3b9-c383-4225-8484-e7d87642b9f9';
      const objectWithSettings = {
        params: {
          $filter: `data/ref/iv eq '${tag}'`,
          $top: 3,
        },
      };
      return Promise.all([
        (new Promise((resolve, reject) => {
          http.get('/api/content/suffix-blog/articles/', objectWithSettings).then(
            (r) => {
              commit(mutt.SET_INTERVIEWSARTICLES, r.data.items);
              resolve(r.data);
            },
            ({ response }) => {
              reject(response.data);
            },
          );
        })),
      ]);
    },
  },
  getters: {
    featuredSmallArticles(state) {
      return state.featuredArticles.slice(-3);
    },
    featuredLargeArticles(state) {
      return state.featuredArticles.slice(1, 3);
    },
    newsArticles(state) {
      return state.newsArticles;
    },
    interviewsArticles(state) {
      return state.interviewsArticles;
    },
    issueArticles(state) {
      return state.issueArticles;
    },
  },
};
