import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/basic-home/home.vue'
import BasicCounter from '@/components/basic-counter/BasicCounter.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/BasicCounter',
    name: 'BasicCounter',
    component: BasicCounter,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

export default router
