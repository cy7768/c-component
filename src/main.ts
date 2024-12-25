import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 导入组件库
import Components from './package/index'

// 在 main.ts 中添加全局样式
import './styles/dark.css'  // 需要创建这个文件

const app = createApp(App)

app.use(Components) // 使用插件方式注册组件
app.use(router)
app.mount('#app')
