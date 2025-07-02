import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProtegidaView from '../views/ProtegidaView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/protegida', name: 'Protegida', component: ProtegidaView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
