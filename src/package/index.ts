import { App } from 'vue'
// 导入基础组件
import CButton from './components/button/src/button.vue'
import CInput from './components/input/src/input.vue'
import CTable from './components/table/src/table.vue'
import CForm from './components/form/src/form.vue'
import CSearch from './components/form/src/search.vue'
import CGantt from './components/gantt/src/gantt.vue'

// 引入 Element Plus 的基础样式
import 'element-plus/dist/index.css'

/**
 * 组件集合，用于全局注册
 * 包含：
 * - CButton: 按钮组件
 * - CInput: 输入框组件
 * - CTable: 表格组件
 * - CForm: 表单组件
 * - CSearch: 搜索组件
 * - CGantt: 甘特图组件
 */
const components = {
  CButton,
  CInput,
  CTable,
  CForm,
  CSearch,
  CGantt
}

/**
 * 组件库入口
 * 提供 install 方法供 Vue.use() 注册组件库
 */
export default {
  install(app: App) {
    // 遍历注册所有组件
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  }
}

// 导出单个组件，支持按需引入
export {
  CButton,   // 按钮组件
  CInput,    // 输入框组件
  CTable,    // 表格组件
  CForm,     // 表单组件  
  CSearch,   // 搜索组件
  CGantt     // 甘特图组件
}