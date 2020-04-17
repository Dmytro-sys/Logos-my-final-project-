import Vue from 'vue';

/**
 * -------------------------------
 * Components
 * -------------------------------
 */
import ServiceCard from '@/chunks/service-card/service-card.vue';
import LargeCard from '@/chunks/large-card/large-card.vue';
import SmallCard from '@/chunks/small-card/small-card.vue';
import Button from '@/chunks/button/button.vue';
import moment from 'moment';

Vue.component('v-service-card', ServiceCard);
Vue.component('v-large-card', LargeCard);
Vue.component('v-small-card', SmallCard);
Vue.component('my-button', Button);

/**
 * -------------------------------
 * Mixins
 * -------------------------------
 */
// import { mixin } from '@/global-mixin';
// Vue.mixin(mixin);

/**
 * -------------------------------
 * Filters
 * -------------------------------
 */
/* eslint-disable */
Vue.filter('formatDate', (value) => {
  if (value) {
    value = moment(String(value)).format('MM/DD/YYYY');
  }
  return (value);
});
