import { App } from 'vue';
import { default as Button } from './button/src/button.vue';
import { default as Input } from './input/src/input.vue';

declare const _default: {
    install: (app: App) => void;
};
export default _default;
export { Button as CButton, Input as CInput };
