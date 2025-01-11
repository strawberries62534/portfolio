import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import AboutMe from '../pages/AboutMe.vue';
import Gallery from '../pages/Gallery.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about-me', component: AboutMe },
  { path: '/gallery', component: Gallery },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

