import Vue from 'vue';
import Router from 'vue-router';
import List from './views/List.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/List.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Detail.vue')
    }
  ]
});
