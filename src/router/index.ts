import { createRouter, createWebHistory } from 'vue-router'
import OverView from '../pages/OverView.vue'
import Search from '../pages/Search.vue'
import EditTable from '../pages/EditTable.vue'
import CssLayout from '../pages/CssLayout.vue'
import UploadFile from '../pages/UploadFile.vue'

const routes = [
  {
    path: '/',
    redirect: '/over-view'
  },
  {
    path: '/over-view',
    name: 'OverView',
    component: OverView
  },
  {
    path: '/component',
    name:'Component',
    meta:{
      title:'组件'
    },
    children:[
      {
        path: '/upload-file',
        name: 'UploadFile',
        meta:{
          title:'上传文件',
        },
        component: UploadFile
      },
      {
        path: '/edit-table',
        name: 'EditTable',
        meta:{
          title:'可编辑表格',
        },
        component: EditTable
      },
      {
        path: '/search',
        name: 'Search',   
        meta:{
          title:'搜索组件',
        },
        component: Search
      },
    ]
  },
  {
    path: '/css', 
    meta:{
      title:'CSS布局'
    },
    children:[
      {
        path: '/css-layout',
        name: 'CssLayout',
        meta:{
          title:'CSS布局',
        },
        component: CssLayout
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 