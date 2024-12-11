import { defineComponent } from 'vue';
import { ElInput } from 'element-plus';
export default defineComponent({
    name: 'CInput',
    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        },
        placeholder: {
            type: String,
            default: '请输入'
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const handleInput = (val) => {
            emit('update:modelValue', val);
        };
        return () => (<ElInput modelValue={props.modelValue} placeholder={props.placeholder} onInput={handleInput}/>);
    }
});
//# sourceMappingURL=index.jsx.map