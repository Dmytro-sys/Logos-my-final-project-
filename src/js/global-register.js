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

Vue.component('v-service-card', ServiceCard);
Vue.component('v-large-card', LargeCard);
Vue.component('v-small-card', SmallCard);
Vue.component('my-button', Button);

/**
 * -------------------------------
 * Mixins
 * -------------------------------
 */
// import { mixin } from "@/global-mixin";
// Vue.mixin(mixin);

/**
 * -------------------------------
 * Filters
 * -------------------------------
 */
// import moment from "moment";
// Vue.filter("formatDate", function(value) {
//   if (value) {
//     // return moment(String(value)).format('MM/DD/YYYY hh:mm');
//     return moment(String(value)).format("MM/DD/YYYY");
//   }
// });
