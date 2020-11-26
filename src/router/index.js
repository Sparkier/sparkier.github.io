import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Research from '../views/projects/research/Research.vue';
import Projects from '../views/projects/fun/Projects.vue';
import Thoughts from '../views/thoughts/Thoughts.vue';
import Thought from '../views/thoughts/Thought.vue';
import NotFound from '../views/404.vue';

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
  {
    path: '/thoughts',
    name: 'Thoughts',
    component: Thoughts,
  },
  {
    path: '/thought/:id',
    name: 'Thought',
    component: Thought,
    props: true,
  },
  {
    path: '*',
    name: '404',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
