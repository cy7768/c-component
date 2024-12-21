<template>
    <div>
        <el-form ref="formRef" :model="computedFormData" :rules="formRules" v-bind="$attrs" inline
            class="horizontal-form">
            <div class="form-content">
                <el-form-item v-for="field in displayFields" :key="field.prop" :label="field.label" :prop="field.prop"
                    :rules="field.rules" class="form-item">
                    <div class="form-item-content">
                        <component :is="getComponent(field.type)" v-model="computedFormData[field.prop]"
                            v-bind="getComponentProps(field)" @change="handleFieldChange(field.prop, $event)" />
                        <el-button v-if="field.removable !== false" type="danger" link @click="removeField(field.prop)">
                            <el-icon><CircleCloseFilled /></el-icon>
                        </el-button>
                    </div>
                </el-form-item>
                <el-space>
                    <el-select v-model="selectedField" placeholder="选择已有字段" style="width: 200px">
                        <el-option v-for="field in availableFields" :key="field.prop" :label="field.label"
                            :value="field.prop" />
                    </el-select>
                    <el-button @click="addExistingField" type="success" :disabled="!selectedField">
                        添加条件
                    </el-button>
                    <el-button v-if="showSubmit" type="primary" @click="handleSubmit" :loading="loading">
                        {{ submitText }}
                    </el-button>
                    <el-button v-if="showReset" @click="handleReset">
                        {{ resetText }}
                    </el-button>

                    <slot name="buttons" />
                </el-space>
            </div>

            <div class="form-buttons" v-if="showButtons">

            </div>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, reactive } from 'vue'
import { CircleCloseFilled } from '@element-plus/icons-vue'
import {
    ElForm,
    ElFormItem,
    ElInput,
    ElSelect,
    ElOption,
    ElDatePicker,
    ElInputNumber,
    ElSwitch,
    ElRadio,
    ElRadioGroup,
    ElCheckbox,
    ElCheckboxGroup,
    ElButton,
    ElRow,
    ElCol,
    ElSpace,
    ElMessage,
    ElIcon,
} from 'element-plus'
import type { FormInstance } from 'element-plus'

type FieldType = 'input' | 'select' | 'date' | 'number' | 'switch' |
    'radio' | 'checkbox' | 'textarea' | 'password'

interface FormField {
    prop: string
    label: string
    type: FieldType
    span?: number
    rules?: any[]
    options?: Array<{ label: string; value: any }>
    placeholder?: string
    disabled?: boolean
    clearable?: boolean
    multiple?: boolean
    min?: number
    max?: number
    step?: number
    rows?: number
    onChange?: (value: any) => void
    removable?: boolean
    [key: string]: any
}

interface Props {
    fields: FormField[]
    modelValue?: Record<string, any>
    showButtons?: boolean
    showSubmit?: boolean
    showReset?: boolean
    submitText?: string
    resetText?: string
    loading?: boolean
    showAddField?: boolean
    availableFields?: FormField[]
    maxDisplayFields?: number
}

const props = withDefaults(defineProps<Props>(), {
    fields: () => [],
    modelValue: () => ({}),
    showButtons: true,
    showSubmit: true,
    showReset: true,
    submitText: '提交',
    resetText: '重置',
    loading: false,
    showAddField: false,
    availableFields: () => [],
    maxDisplayFields: 3
})

const emit = defineEmits<{
    'update:modelValue': [value: Record<string, any>]
    'submit': [value: Record<string, any>]
    'reset': []
    'change': [prop: string, value: any]
}>()

const computedFields = ref<FormField[]>(Object.assign([], props.fields))

const formRef = ref<FormInstance>()
const formData = ref<Record<string, any>>({})
const formRules = ref<Record<string, any>>({})

// 使用 computed 处理表单数据
const computedFormData = computed({
    get: () => formData.value,
    set: (newVal) => {
        const oldValStr = JSON.stringify(formData.value)
        const newValStr = JSON.stringify(newVal)

        if (oldValStr !== newValStr) {
            formData.value = JSON.parse(newValStr)
            emit('update:modelValue', newVal)
        }
    }
})

// 监听外部数据变化
watch(() => props.modelValue, (newVal) => {
    formData.value = JSON.parse(JSON.stringify(newVal))
}, { immediate: true })

// 组件映射表
const componentMap = {
    input: ElInput,
    select: ElSelect,
    date: ElDatePicker,
    number: ElInputNumber,
    switch: ElSwitch,
    radio: ElRadioGroup,
    checkbox: ElCheckboxGroup,
    textarea: ElInput,
    password: ElInput
}

// 获取组件
const getComponent = (type: FieldType) => {
    return componentMap[type]
}

// 获取组件属性
const getComponentProps = (field: FormField) => {
    const commonProps = {
        placeholder: field.placeholder,
        disabled: field.disabled,
        clearable: field.clearable
    }

    switch (field.type) {
        case 'select':
            return {
                ...commonProps,
                options: field.options,
                multiple: field.multiple
            }
        case 'date':
            return {
                ...commonProps,
                type: 'date',
                valueFormat: 'YYYY-MM-DD'
            }
        case 'number':
            return {
                ...commonProps,
                min: field.min,
                max: field.max,
                step: field.step
            }
        case 'textarea':
            return {
                ...commonProps,
                type: 'textarea',
                rows: field.rows || 2
            }
        case 'password':
            return {
                ...commonProps,
                type: 'password',
                showPassword: true
            }
        default:
            return commonProps
    }
}

// 处理字段值变化
const handleFieldChange = (prop: string, value: any) => {
    const field = props.fields.find(f => f.prop === prop)
    if (field?.onChange) {
        field.onChange(value)
    }
    emit('change', prop, value)
}

// 提交表单
const handleSubmit = async () => {
    if (!formRef.value) return

    try {
        await formRef.value.validate()
        emit('submit', formData.value)
    } catch (error) {
        console.error('表单验证失败:', error)
    }
}

// 重置表单
const handleReset = () => {
    if (formRef.value) {
        formRef.value.resetFields()
    }
    emit('reset')
}

// 添加字段相关的方法
const addField = (field: FormField) => {
    // 验证字段必要属性
    if (!field.prop || !field.label || !field.type) {
        ElMessage.error('字段配置不完整')
        return false
    }

    // 检查字段是否已存在
    if (displayFields.value.some(f => f.prop === field.prop)) {
        ElMessage.warning(`字段 "${field.label}" 已存在`)
        return false
    }

    // 修改添加字段的方式
    displayFields.value = [...displayFields.value, field]

    // 初始化字段值
    if (!(field.prop in formData.value)) {
        formData.value[field.prop] = null
    }

    ElMessage.success(`添加字段 "${field.label}" 成功`)
    return true
}

// 修改移除字段方法
const removeField = (prop: string) => {
    const index = displayFields.value.findIndex(f => f.prop === prop)
    if (index > -1) {
        displayFields.value.splice(index, 1)
        // 移除字段值
        delete formData.value[prop]
        return true
    }
    return false
}

// 添加字段选择相关的状态
const selectedField = ref('')

// 修改显示字段的计算属性
const displayFields = ref<FormField[]>(Object.assign([], computedFields.value.slice(0, props.maxDisplayFields)));

// 修改可用字段的计算属性
const availableFields = computed(() =>
    computedFields.value.filter(field =>
        !displayFields.value.some(f => f.prop === field.prop)
    )
)

// 添加已有字段
const addExistingField = () => {
    if (!selectedField.value) return

    const field = props.fields.find(f => f.prop === selectedField.value)
    if (field) {
        addField(field)
        selectedField.value = '' // 清空选择
    }
}

// 暴露方法
defineExpose({
    formRef,
    validate: () => formRef.value?.validate(),
    resetFields: () => formRef.value?.resetFields(),
    clearValidate: (props?: string[]) => formRef.value?.clearValidate(props),
    addField,
    removeField
})
</script>

<style lang="scss" scoped>
.form-buttons {
    margin-top: 20px;
    text-align: center;
}

:deep(.el-form-item) {
    margin-bottom: 18px;
}

:deep(.el-input),
:deep(.el-select),
:deep(.el-date-picker),
:deep(.el-input-number) {
    width: 100%;
}

.form-item-content {
    display: flex;
    align-items: center;
    gap: 8px;
}

.form-header {
    margin-bottom: 16px;
}

.horizontal-form {
    .form-content {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin-bottom: 20px;
    }

    .form-item {
        margin-bottom: 0;
        flex: 0 0 auto;
        min-width: 280px;
    }

    :deep(.el-form-item__content) {
        flex-wrap: nowrap;
    }
}

.form-item-content {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;

    :deep(.el-input),
    :deep(.el-select),
    :deep(.el-date-picker),
    :deep(.el-input-number) {
        flex: 1;
        min-width: 200px;
    }
}
</style>