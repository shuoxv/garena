import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/characters',
    name: 'characters',
    component: () => import('../views/characters.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import( '../views/news.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import( '../views/map.vue')
  },
  {
    path: '/wallpapers',
    name: 'wallpapers',
    component: () => import( '../views/wallpaper.vue')
  },
  {
    path: '/weapons',
    name: 'weapons',
    component: () => import( '../views/weapons.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
