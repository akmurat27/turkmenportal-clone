import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

const routes = [
  {
    path: '/homePage',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router