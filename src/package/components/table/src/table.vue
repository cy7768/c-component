<template>
    <el-config-provider :locale="zhCn">
        <el-table :data="tableData" v-bind="$attrs">
            <template v-for="column in columns" :key="column.prop">
                <el-table-column v-bind="column">
                    <template #default="scope">
                        <template v-if="column.editable">
                            <div @dblclick="handleCellDblClick(scope.$index, column.prop)"
                                @click.stop="handleCellClick(scope.$index, column.prop)">
                                <component v-if="scope.row.editing && isEditingCell(scope.$index, column.prop)"
                                    :is="getComponent(column.type)" v-model="scope.row[column.prop]"
                                    v-bind="getComponentProps(column)"
                                    @change="handleFieldChange(scope.$index, column.prop, $event)"
                                    @blur="handleCellBlur(scope.$index, column.prop)" />
                                <template v-else>
                                    <template v-if="column.formatter">
                                        {{ column.formatter(scope.row[column.prop], scope.row) }}
                                    </template>
                                    <template v-else>
                                        {{ scope.row[column.prop] }}
                                    </template>
                                </template>
                            </div>
                        </template>
                        <template v-else-if="column.render">
                            <component :is="column.render({
                                row: scope.row,
                                $index: scope.$index,
                                column,
                                editing: scope.row.editing,
                            })" />
                        </template>
                        <template v-else>
                            <template v-if="column.formatter">
                                {{ column.formatter(scope.row[column.prop], scope.row) }}
                            </template>
                            <template v-else>
                                {{ scope.row[column.prop] }}
                            </template>
                        </template>
                    </template>
                </el-table-column>
            </template>
        </el-table>
    </el-config-provider>
</template>

<script setup lang="ts">
import { ref, watch, h } from 'vue'
import {
    ElConfigProvider,
    ElTable,
    ElTableColumn,
    ElButton,
    ElInput,
    ElSelect,
    ElOption,
    ElDatePicker,
    ElInputNumber,
    ElSpace
} from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

type EditableType = 'input' | 'select' | 'date' | 'number' | 'textarea'

interface TableColumn {
    prop: string
    label?: string
    width?: string | number
    fixed?: boolean | 'left' | 'right'
    editable?: boolean
    type?: EditableType
    options?: Array<{ label: string; value: any }>
    placeholder?: string
    formatter?: (value: any, row: Record<string, any>) => string
    min?: number
    max?: number
    step?: number
    rows?: number
    required?: boolean
    rules?: any[]
    onChange?: (value: any, row: Record<string, any>) => void
    render?: (scope: {
        row: Record<string, any>
        $index: number
        column: TableColumn
        editing: boolean
    }) => VNode | VNode[]
}

interface Props {
    data: Record<string, any>[]
    columns: TableColumn[]
}

const props = withDefaults(defineProps<Props>(), {
    columns: () => []
})

const emit = defineEmits<{
    'update:data': [value: Record<string, any>[]]
    'save': [index: number, row: Record<string, any>]
    'field-change': [index: number, prop: string, value: any]
}>()

const tableData = ref<Record<string, any>[]>([])
const originalData = ref<Record<string, any>[]>([])

// 组件射表
const componentMap = {
    input: ElInput,
    select: ElSelect,
    date: ElDatePicker,
    number: ElInputNumber,
    textarea: ElInput
}

// 获取编辑组件
const getComponent = (type?: EditableType) => {
    return componentMap[type || 'input']
}

// 获取组件属性
const getComponentProps = (column: TableColumn) => {
    const commonProps = {
        size: 'small' as const,
        placeholder: column.placeholder
    }

    switch (column.type) {
        case 'select':
            return {
                ...commonProps,
                options: column.options
            }
        case 'date':
            return {
                ...commonProps,
                type: 'date',
                valueFormat: 'YYYY-MM-DD',
                format: 'YYYY-MM-DD'
            }
        case 'number':
            return {
                ...commonProps,
                min: column.min,
                max: column.max,
                step: column.step
            }
        case 'textarea':
            return {
                ...commonProps,
                type: 'textarea',
                rows: column.rows || 2
            }
        default:
            return commonProps
    }
}

// 监听数据变化
watch(() => props.data, (newVal) => {
    tableData.value = newVal.map(item => ({
        ...item,
        editing: item.editing || false
    }))
    if (!originalData.value.length) {
        originalData.value = JSON.parse(JSON.stringify(newVal))
    }
}, { immediate: true })

// 编辑行
const handleEdit = (index: number, row: Record<string, any>) => {
    // 先保存其他正在编辑的行
    tableData.value.forEach((item, idx) => {
        if (item.editing && idx !== index) {
            handleSave(idx)
        }
    })

    // 设置当前行为编辑状态
    row.editing = true

    // 找到第一个可编辑的单元格并设置为编辑状态
    const editableColumn = props.columns.filter(col => col.editable)
    if (editableColumn.length > 0) {
        editableColumn.map(col => {
            currentEditingCell.value = {
                rowIndex: index,
                prop: col.prop
            }
        })

    }
}

// 添加编辑单元格状态
interface EditingCell {
    rowIndex: number
    prop: string
}

const currentEditingCell = ref<EditingCell | null>(null)

// 判断单元格是否于编辑状态
const isEditingCell = (rowIndex: number, prop: string) => {
    return currentEditingCell.value?.rowIndex === rowIndex &&
        currentEditingCell.value?.prop === prop
}

// 处理单元格点击
const handleCellClick = (rowIndex: number, prop: string) => {
    // 如果点击的不是当前编辑单元格，且存在编辑中的单元格
    if (currentEditingCell.value &&
        (currentEditingCell.value.rowIndex !== rowIndex ||
            currentEditingCell.value.prop !== prop)) {
        handleSave(currentEditingCell.value.rowIndex)
    }
}

// 修改双击处理函数
const handleCellDblClick = (rowIndex: number, prop: string) => {
    // 如果存在其他编辑中的单元格，先保存
    if (currentEditingCell.value &&
        (currentEditingCell.value.rowIndex !== rowIndex ||
            currentEditingCell.value.prop !== prop)) {
        handleSave(currentEditingCell.value.rowIndex)
    }

    if (!tableData.value[rowIndex].editing) {
        tableData.value[rowIndex].editing = true
    }
    currentEditingCell.value = { rowIndex, prop }
}

// 处理单元格失焦
const handleCellBlur = (rowIndex: number, prop: string) => {
    if (isEditingCell(rowIndex, prop)) {
        currentEditingCell.value = null

        // 检查是否所有编辑单元格都已失焦
        const isLastEditingCell = !props.columns.some(col =>
            col.editable && isEditingCell(rowIndex, col.prop)
        )

        // 如果是最后一个编辑单元格，自动保存
        if (isLastEditingCell) {
            setTimeout(() => {
                // 使用 setTimeout 避免与其他单元格的点击件冲突
                const row = tableData.value[rowIndex]
                if (row.editing) {
                    handleSave(rowIndex)
                }
            }, 200)
        }
    }
}

// 修改保存处理函数
const handleSave = (index: number) => {
    const row = tableData.value[index]
    row.editing = false
    currentEditingCell.value = null
    emit('save', index, row)
    emit('update:data', tableData.value.map(({ editing, ...rest }) => rest))
}

// 修改取消处理函数
const handleCancel = (index: number) => {
    // 从原始数据恢复
    if (originalData.value[index]) {
        tableData.value[index] = JSON.parse(JSON.stringify(originalData.value[index]))
    }
    tableData.value[index].editing = false
}

// 字值变化
const handleFieldChange = (index: number, prop: string, value: any) => {
    const column = props.columns.find(col => col.prop === prop)
    if (column?.onChange) {
        column.onChange(value, tableData.value[index])
    }
    emit('field-change', index, prop, value)
}

// 渲染按钮的方法
const renderButton = (button: ButtonConfig, index: number, row: Record<string, any>) => {
    if (button.show === false) return null

    return h(ElButton, {
        type: button.type || 'default',
        link: true,
        onClick: () => button.handler(index, row)
    }, () => button.text)
}

interface ButtonConfig {
    show?: boolean
    text: string
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
    handler: (index: number, row: Record<string, any>) => void
}

interface ButtonGroupConfig {
    buttons: ButtonConfig[]
    space?: boolean
}

// 通用按钮组渲染函数
const renderButtonGroup = (config: ButtonGroupConfig, index: number, row: Record<string, any>) => {
    const buttons = config.buttons
        .filter(btn => btn.show !== false)
        .map(btn => renderButton(btn, index, row))
        .filter(Boolean)

    return config.space !== false
        ? h(ElSpace, {}, () => buttons)
        : buttons
}

// 导出必要的函数
defineExpose({
    handleEdit,
    renderButtonGroup
})
</script>

<style lang="scss" scoped>
:deep(.el-input),
:deep(.el-select),
:deep(.el-date-picker),
:deep(.el-input-number) {
    width: 100%;
}

:deep(.el-button + .el-button) {
    margin-left: 8px;
}

:deep(.el-table td) {
    .cell {
        >div {
            min-height: 23px;
            cursor: text;
        }
    }
}
</style>