import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../pages/HomeView/HomeView.vue'
import LoginView from '../pages/LoginView/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', component: HomeView },
  { path: '/login', component: LoginView }
  ],
})

export default router