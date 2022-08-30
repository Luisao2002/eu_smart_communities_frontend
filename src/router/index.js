import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import 'mdb-vue-ui-kit/css/mdb.min.css'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/speakers',
    name: 'speakers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SpeakersView.vue')
  },
  {
    path: '/agenda',
    name: 'agenda',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AgendaView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
