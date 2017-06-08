import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from './pages/index.vue';
import About from './pages/about.vue';
import Contacts from './pages/contacts.vue';
import NotFound from './pages/not-found.vue';

Vue.use(VueRouter);

const routes = [
  { path: '', component: Index },
  { path: '/index(.*)', component: Index },
  { path: '/about(.*)', component: About },
  { path: '/contacts(.*)', component: Contacts },
  { path: '*', component: NotFound },
];
const router = new VueRouter({
  // mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

export default router;
