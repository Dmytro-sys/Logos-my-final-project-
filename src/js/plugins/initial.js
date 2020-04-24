import store from '@/store';

const getGlobalData = () => Promise.all([
  store.dispatch('auth/login').then(() => store.dispatch('blog/getTags')),
]);

export default getGlobalData;
/* eslint-disable-next-line */
