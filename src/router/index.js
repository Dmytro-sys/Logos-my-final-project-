import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '@/store';

import Home from '@/views/Home.vue';
import loginRoute from '@/views/Login.vue';
// import getGlobalData from '@/js/plugins/initial';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/client',
    name: 'ClientPage',
    component: () => import('../views/ClientPage.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue'),
  },
  {
    path: '/blog/:slug',
    name: 'Article',
    component: () => import('../views/Article.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: loginRoute,
    meta: { notProtected: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
/* eslint-disable */
router.beforeEach(async (to, from, next) => {
  await Promise.all([
    store.dispatch('auth/login').then(() => store.dispatch('blog/getTags')),
  ]);

  if (
    to.matched.some((record) => record.meta.notProtected)
    || store.getters['auth/isLogin']
  ) {
    return next();
  }

  store.dispatch('auth/login').then(
    () => {
      next();
    },
    () => {
      next('/login');
    },
  );
});

export default router;
