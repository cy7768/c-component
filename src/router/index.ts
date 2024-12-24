import { createRouter, createWebHistory } from 'vue-router'
import ComponentTest from '../pages/ComponentTest.vue'
import Search from '../pages/Search.vue'
import EditTable from '../pages/EditTable.vue'
import CssLayout from '../pages/CssLayout.vue'

const routes = [
  {
    path: '/',
    redirect: '/component-test'
  },
  {
    path: '/component-test',
    name: 'ComponentTest',
    component: ComponentTest
  },
  {
    path: '/component-edit-table',
    name: 'EditTable',
    component: EditTable
  },
  {
    path: '/component-search',
    name: 'Search',
    component: Search
  },
  {
    path: '/css-layout',
    name: 'CssLayout',
    component: CssLayout
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 