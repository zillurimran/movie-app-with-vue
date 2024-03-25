import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import movieDetails from '@/views/movieDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movie/:id',
      name: 'movie-detail',
      component: movieDetails
    }
  ]
})

export default router
