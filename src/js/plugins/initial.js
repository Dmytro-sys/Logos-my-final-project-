import store from '@/store';

const getGlobalData = () => Promise.all([
  store.dispatch('auth/login'),
  store.dispatch('blog/getTags'),
]);

export default getGlobalData;
