import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Research from '../views/Research.vue';
import Projects from '../views/Projects.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/research',
    name: 'Research',
    component: Research,
  },
  {
    path: '/fun',
    name: 'Projecs',
    component: Projects,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
