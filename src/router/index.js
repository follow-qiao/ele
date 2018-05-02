import Vue from 'vue';
import Router from 'vue-router';

import Goods from 'components/goods/goods.vue';
import Evaluate from 'components/evaluate/evaluate.vue';
import Business from 'components/business/business.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/evaluate',
      component: Evaluate
    },
    {
      path: '/business',
      component: Business
    }
  ]
});
