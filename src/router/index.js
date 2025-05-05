import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Journey from '../pages/Journey.vue';
import Projects from '../pages/Projects.vue';
import Skills from '../pages/Skills.vue';
import Contact from '../pages/Contact.vue';
import CommandLine from '../pages/CommandLine.vue';

const routes = [
  { path: '/portfolio/', component: Home },
  { path: '/portfolio/journey', component: Journey },
  { path: '/portfolio/projects', component: Projects },
  { path: '/portfolio/skills', component: Skills },
  { path: '/portfolio/contact', component: Contact },
  { path: '/portfolio/command-line', component: CommandLine },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };  // Always scroll to top on route change
  }
});

// After route change, adjust transitions based on the depth of the route
router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length;
  const fromDepth = from.path.split('/').length;
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left';
});

export default router;

