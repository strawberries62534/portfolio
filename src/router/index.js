import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import AboutMe from '../pages/AboutMe.vue';
import Gallery from '../pages/Gallery.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/attributs', component: AboutMe },
  { path: '/environnement', component: Gallery },
  { path: '/economie', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

