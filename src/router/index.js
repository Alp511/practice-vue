import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/basic-home/home.vue'),
  },
  {
    path: '/basic-counter',
    name: 'BasicCounter',
    component: () => import('../components/basic-counter/BasicCounter.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
