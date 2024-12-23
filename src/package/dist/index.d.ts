import { App } from 'vue';
import { default as CButton } from './components/button/src/button.vue';
import { default as CInput } from './components/input/src/input.vue';
import { default as CTable } from './components/table/src/table.vue';
import { default as CForm } from './components/form/src/form.vue';
import { default as CSearch } from './components/form/src/search.vue';

/**
 * 组件库入口
 * 提供 install 方法供 Vue.use() 注册组件库
 */
declare const _default: {
    install(app: App): void;
};
export default _default;
export { CButton, // 按钮组件
CInput, // 输入框组件
CTable, // 表格组件
CForm, // 表单组件  
CSearch };
