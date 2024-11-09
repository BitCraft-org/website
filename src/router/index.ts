import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        name: 'home',
        path: '/',
        component: () => import('@/views/home.vue')
    },
    {
      name: 'interract',
      path: '/interract',
      component: () => import('@/views/interract.vue')
    },
    {
      name: 'live_coding',
      path: '/live-coding',
      component: () => import('@/views/live_coding.vue')
    },
    {
      name: 'challenges',
      path: '/challenges',
      component: () => import('@/views/challenges.vue')
    },
    {
      name: 'showcase',
      path: '/showcase',
      component: () => import('@/views/showcase.vue'),
      children: [
        {
          path: ':id',
          name: 'project',
          component: () => import('@/components/showcase/project.vue')
        }
      ]
    },
    {
      name: 'resource_hub',
      path: '/resource-hub',
      component: () => import('@/views/resource_hub.vue')
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('@/views/about.vue')
    },
    {
      name: 'contact',
      path: '/contact',
      component: () => import('@/views/contact.vue')
    },
  ]
})

export default router;