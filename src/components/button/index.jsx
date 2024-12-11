import { defineComponent } from 'vue';
import { ElButton } from 'element-plus';
export default defineComponent({
    name: 'CButton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { slots }) {
        return () => (<ElButton type={props.type} size={props.size} disabled={props.disabled}>
                {slots.default?.()}
            </ElButton>);
    }
});
//# sourceMappingURL=index.jsx.map