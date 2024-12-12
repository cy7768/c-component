import { App } from 'vue';
import { default as CButton } from './components/button/src/button.vue';
import { default as CInput } from './components/input/src/input.vue';

declare const _default: {
    install(app: App): void;
};
export default _default;
export { CButton, CInput };