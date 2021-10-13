import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Publications from '../views/projects/publications/Publications.vue';
import Projects from '../views/projects/fun/Projects.vue';
import Research from '../views/research/Research.vue';
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
    path: '/publications',
    name: 'Publications',
    component: Publications,
  },
  {
    path: '/fun',
    name: 'Projecs',
    component: Projects,
  },
  {
    path: '/research',
    name: 'Research',
    component: Research,
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
