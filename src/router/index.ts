import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: () => import('../views/Gallery.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // If there's a saved position (browser back/forward), use it
    if (savedPosition) {
      return savedPosition
    }
    // If navigating to a hash anchor
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Offset for fixed navbar
      }
    }
    // Default: scroll to top smoothly on route change
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router