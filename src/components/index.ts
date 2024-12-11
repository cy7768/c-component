// 导入 Vue 的 App 类型，用于插件安装
import { App } from 'vue'
// 导入自定义按钮组件
import CButton from './button'
// 导入自定义输入框组件
import CInput from './input'

// 引入 Element Plus 样式
import 'element-plus/dist/index.css'
// 引入自定义样式（如果有）
// import './styles/index.css'

// 组件集合对象，用于批量注册
const components = {
  CButton,
  CInput
}

// 导出默认对象，包含 install 方法供 Vue.use() 使用
export default {
  // install 方法会在 Vue.use() 时被调用
  install(app: App) {
    // 遍历组件集合，注册每个组件
    Object.entries(components).forEach(([key, component]) => {
      // 全局注册组件，组件名为对象的 key
      app.component(key, component)
    })
  }
}

// 导出单个组件，支持按需引入
export { CButton, CInput }