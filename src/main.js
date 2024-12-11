import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// 导入 Element Plus
import 'element-plus/dist/index.css';
// 导入组件库
import Components from './components';
const app = createApp(App);
app.use(Components); // 使用插件方式注册组件
app.use(router);
app.mount('#app');
//# sourceMappingURL=main.js.map