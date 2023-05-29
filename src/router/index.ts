import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HelloWorld.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/code',
      name: 'code',
      component: () => import('../components/code/Index.vue')
    },
    {
      path: '/diff',
      name: 'diff',
      component: () => import('../components/diff/Index.vue')
    }
  ]
})

export default router