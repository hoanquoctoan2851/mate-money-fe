import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import HomePage from '@/views/home/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      redirect: '/home',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: LoginView,
        },
      ],
    },
    {
      path: '/',
      name: 'main',
      component: MainLayout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomePage,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: PageNotFound,
    },
  ],
})

export default router
