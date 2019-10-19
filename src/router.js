import Vue from 'vue';
import Router from 'vue-router';

import Main from './views';
import Login from './views/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})