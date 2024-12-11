import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { ElButton } from 'element-plus'

type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
type ButtonSize = 'large' | 'default' | 'small'

export default defineComponent({
    name: 'CButton',
    props: {
        type: {
            type: String as PropType<ButtonType>,
            default: 'default'
        },
        size: {
            type: String as PropType<ButtonSize>,
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { slots }) {
        return () => (
            <ElButton
                type={props.type}
                size={props.size}
                disabled={props.disabled}
            >
                {slots.default?.()}
            </ElButton>
        )
    }
})