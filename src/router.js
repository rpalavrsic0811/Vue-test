import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import BrandInfo from './views/BrandInfo.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/brand/:supplier_id',
      name: 'brand-info',
      component: BrandInfo,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
