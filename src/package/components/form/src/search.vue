<template>
    <div>
        <el-form ref="formRef" :model="computedFormData" :rules="formRules" v-bind="$attrs" inline
            class="horizontal-form">
            <div class="form-content">
                <el-form-item v-for="field in displayFields" :key="field.prop" :prop="field.prop" :rules="field.rules"
                    class="form-item">
                    <div class="form-item-content">
                        <el-select :model-value="selectedFields[field.label]"
                            @update:model-value="getFields(field.label)" clearable class="form-item-select"
                            @clear="removeField(field.prop)" @change="handleFieldTypeChange($event, field)">
                            <el-option v-for="option in getAvailableOptions(field)" :key="option.prop"
                                :value="option.prop" :label="option.label" :disabled="option.disabled" />
                        </el-select>
                        <component :is="renderComponent(field)" v-model="computedFormData[field.prop]"
                            v-bind="getComponentProps(field)" @change="handleFieldChange(field.prop, $event)">
                        </component>
                    </div>
                </el-form-item>
                <el-space>

                    <el-button @click="handleAddField" type="success">
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
import { ref, watch, computed, h, reactive } from 'vue'
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
    ElCheckboxButton,
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

// 修改组件映射表
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

// 添加渲染组件的方法
const renderComponent = (field: FormField) => {
    switch (field.type) {
        case 'checkbox':
            return {
                name: 'CheckboxGroup',
                render() {
                    return h(ElCheckboxGroup, {
                        modelValue: computedFormData.value[field.prop],
                        'onUpdate:modelValue': (val: any) => {
                            computedFormData.value[field.prop] = val
                        }
                    }, () => field.options?.map(opt =>
                        h(ElCheckbox, {
                            key: opt.value,
                            label: opt.value
                        }, () => opt.label)
                    ))
                }
            }
        default:
            return getComponent(field.type)
    }
}

// 修改组件属性配置
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
        case 'checkbox':
            return commonProps // checkbox 的属性在 renderComponent 中处理
        default:
            return commonProps
    }
}

// 添加获选中字段类型和配置的方法
const getSelectedFieldType = () => {
    const field = props.fields.find(f => f.prop === selectedField.value)
    return field?.type || 'input'
}

const getSelectedFieldConfig = () => {
    const field = props.fields.find(f => f.prop === selectedField.value)
    return field || {
        prop: '',
        label: '',
        type: 'input'
    }
}

// 修改字段值变化处理
const handleFieldChange = (prop: string, value: any) => {
    const field = props.fields.find(f => f.prop === selectedField.value)
    if (field?.onChange) {
        field.onChange(value)
    }
    emit('change', selectedField.value, value)
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
const selectedFields = ref<{ [key: string]: string }>({});
props.fields.forEach(f => {
    selectedFields.value[f.label] = f.prop;
})

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

// 修改获取可选的字段选项方法
const getAvailableOptions = (currentField: FormField) => {
    // 获取当前已使用的所有字段 prop
    const usedProps = displayFields.value
        .filter(f => f.prop !== currentField.prop)
        .map(f => f.prop)

    // 返回所有可选字段
    return props.fields.filter(field =>
        field.prop === currentField.prop || // 当前字段始终可选
        !usedProps.includes(field.prop)     // 未被使用的字段
    )
}

// 修改字段类型切换处理
const handleFieldTypeChange = (newProp: string, oldField: FormField) => {
    // 查找新字段配置
    const newField = computedFields.value.find(f => f.prop === newProp)
    if (!newField) return
    // 查找当前字段位置
    const currentIndex = displayFields.value.findIndex(f => f.prop === oldField.prop)
    if (currentIndex === -1) return

    // 检查是否已存在该字段（通过 prop 比较）
    const isFieldUsed = displayFields.value.some(
        f => f.prop === newProp && f.prop !== oldField.prop
    )

    if (isFieldUsed) {
        ElMessage.warning('该字段已存在')
        // 恢复原字段的选择
        displayFields.value[currentIndex] = { ...oldField }
        return
    }

    // 保存旧值并删除
    const oldValue = computedFormData.value[oldField.prop]
    delete computedFormData.value[oldField.prop]

    // 完全更新字段配置，保持原有的可移除状态
    displayFields.value[currentIndex] = {
        ...newField,
        removable: oldField.removable
    }

    // 设置新字段的值为 null
    // computedFormData.value[newField.prop] = null

    // 触发变化事件
    // emit('change', newField.prop, computedFormData.value[newField.prop])
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

const handleAddField = () => {
    // // 检查是否达到最大显示字段数
    // if (displayFields.value.length >= props.maxDisplayFields) {
    //     ElMessage.warning(`最多只能添加${props.maxDisplayFields}个搜索条件`)
    //     return
    // }

    // 获取可用字段
    const availableField = computedFields.value.find(field =>
        !displayFields.value.some(f => f.prop === field.prop)
    )

    if (!availableField) {
        ElMessage.warning('没有更多可用的搜索条件')
        return
    }

    // 添加新字段
    displayFields.value.push({
        ...availableField,
        removable: true
    })

    // 初始化新字段的值
    if (!(availableField.prop in formData.value)) {
        formData.value[availableField.prop] = null
    }
}

const getFields = (label: string) => {
    return selectedFields.value[label]
}
</script>

<style lang="scss" scoped>
.form-buttons {
    margin-top: 20px;
    text-align: center;
}

:deep(.el-form-item) {
    margin-bottom: 18px;
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

.form-item-select {
    min-width: 80px;
    flex: 1;
}

.form-item-content {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;

    :deep(.el-input),
    // :deep(.el-select),
    :deep(.el-date-picker),
    :deep(.el-input-number) {
        flex: 1;
        min-width: 200px;
    }
}
</style>