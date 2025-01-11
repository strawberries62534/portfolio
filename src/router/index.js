import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import AboutMe from '../pages/AboutMe.vue';
import Gallery from '../pages/Gallery.vue';
import Contact from '../pages/Contact.vue';
import CommandLine from '../pages/CommandLine.vue';

const routes = [
  { path: '/portfolio', component: Home },
  { path: '/portfolio/about-me', component: AboutMe },
  { path: '/portfolio/gallery', component: Gallery },
  { path: '/portfolio/contact', component: Contact },
  { path: '/portfolio/command-line', component: CommandLine },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})

export default router;

