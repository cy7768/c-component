import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 导入 Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

// 导入组件库
import Components from './package/index'

const app = createApp(App)

app.use(Components) // 使用插件方式注册组件
app.use(router)
// app.use(ElementPlus)
app.mount('#app')
