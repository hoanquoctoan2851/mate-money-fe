import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // ===== Auth routes (no sidebar, AuthLayout) =====
  {
    path: '/auth',
    component: () => import('../layouts/AuthLayout.vue'),
    meta: { requiresGuest: true },
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/auth/LoginView.vue'),
        meta: { title: 'Login' },
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../views/auth/RegisterView.vue'),
        meta: { title: 'Register' },
      },
    ],
  },

  // ===== App routes (DefaultLayout, requires auth) =====
  {
    path: '/',
    component: () => import('../layouts/DefaultLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
        meta: { title: 'Home' },
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
        meta: { title: 'About' },
      },
    ],
  },

  // ===== Catch-all redirect =====
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'home' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// ===== Navigation Guards =====
router.beforeEach((to, _from, next) => {
  const token = localStorage.getItem('token')
  const isAuthenticated = !!token

  // Route requires auth but user is NOT logged in → redirect to login
  if (to.matched.some((r) => r.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'login', query: { redirect: to.fullPath } })
    return
  }

  // Route is guest-only (login/register) but user IS logged in → redirect to home
  if (to.matched.some((r) => r.meta.requiresGuest) && isAuthenticated) {
    next({ name: 'home' })
    return
  }

  next()
})

export default router
