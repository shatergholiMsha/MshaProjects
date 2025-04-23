import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Dashboard from './pages/Dashboard.vue';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;