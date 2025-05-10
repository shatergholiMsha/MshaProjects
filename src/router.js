import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Dashboard from './pages/Dashboard.vue';
import Store from './pages/Store.vue';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/store', name: 'store', component: Store },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;