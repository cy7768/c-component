import { createRouter, createWebHistory } from 'vue-router'
import ComponentTest from '../pages/ComponentTest.vue'

const routes = [
  {
    path: '/',
    redirect: '/component-test'
  },
  {
    path: '/component-test',
    name: 'ComponentTest',
    component: ComponentTest
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 