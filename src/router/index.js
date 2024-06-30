import { createRouter, createWebHistory } from 'vue-router'


const routes = [
      {path: '/', name: 'home', component: () => import('../views/HomeView.vue')},
      {path: '/about', name: 'about', component: () => import('../views/AboutView.vue')},
      {path: '/artWork', name: 'artWork', component: () => import('../views/ArtWorksView.vue')}
  ]
  
  const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
})


export default router
