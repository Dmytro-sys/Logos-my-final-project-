import store from '@/store';

const getGlobalData = () => Promise.all([
  store.dispatch('blog/getTags'),
]);

export default getGlobalData;
