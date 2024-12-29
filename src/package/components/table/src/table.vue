<template>
    <el-config-provider :locale="zhCn">
        <el-table :data="tableData" v-bind="$attrs">
            <template v-for="column in columns" :key="column.prop">
                <el-table-column v-bind="column">
                    <template #default="scope">
                        <template v-if="column.editable">
                            <div @click="handleCellTrigger(scope.$index, column.prop, column, 'click')"
                                @dblclick="handleCellTrigger(scope.$index, column.prop, column, 'dblclick')">
                                <component v-if="isCellEditable(column, scope.$index)" :is="getComponent(column.type)"
                                    v-model="scope.row[column.prop]" v-bind="getComponentProps(column)"
                                    :ref="el => setCellRef(scope.$index, column.prop, el)"
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
import { ref, watch, h, VNode } from 'vue'
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
type TriggerType = 'click' | 'dblclick'

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
    editMode?: 'cell' | 'row'
    trigger?: TriggerType
}

interface Props {
    data: Record<string, any>[]
    columns: TableColumn[]
    editMode?: 'cell' | 'row'
    trigger?: TriggerType
}

const props = withDefaults(defineProps<Props>(), {
    columns: () => [],
    editMode: undefined,
    trigger: undefined
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

// 修改编辑单元格状态的数据结构
interface EditingCell {
    rowIndex: number
    prop: string
}

// 使用数组存储多个编辑单元格
const editingCells = ref<EditingCell[]>([])

// 判断单元格是否处于编辑状态
const isEditingCell = (rowIndex: number, prop: string) => {
    return editingCells.value.some(cell =>
        cell.rowIndex === rowIndex && cell.prop === prop
    )
}

// 添加编辑单元格
const addEditingCell = (rowIndex: number, prop: string) => {
    if (!isEditingCell(rowIndex, prop)) {
        if (props.editMode === 'cell') {
            editingCells.value = [{ rowIndex, prop }]
        } else if (props.editMode === 'row') {
            tableData.value[rowIndex].editing = !tableData.value[rowIndex].editing ? true : false
            editingCells.value.push({ rowIndex, prop })
        }
    }
}

// 移除编辑单元格
const removeEditingCell = (rowIndex: number, prop: string) => {
    editingCells.value = editingCells.value.filter(cell =>
        !(cell.rowIndex === rowIndex && cell.prop === prop)
    )
}

// 判断单元格是否可编辑
const isCellEditable = (column: TableColumn, rowIndex: number) => {
    if (!column.editable) return false

    // 优先使用列的编辑模式配置
    const mode = column.editMode || props.editMode

    if (mode === 'row') {
        // 行编辑模式：当前行处于编辑状态时可编辑
        return tableData.value[rowIndex].editing
    } else if (mode === 'cell') {
        // 单元格编辑模式：当前单元格处于编辑状态时可编辑
        return isEditingCell(rowIndex, column.prop)
    }
}

// 修改编辑行函数
const handleEdit = (index: number, row: Record<string, any>) => {
    if (props.editMode === 'cell') {
        return
    } else if (props.editMode === 'row') {
        // 先保存其他正在编辑的行
        tableData.value.forEach((item, idx) => {
            if (item.editing && idx !== index) {
                handleSave(idx)
            }
        })

        // 设置当前行为编辑状态
        row.editing = true

        // 根据编辑模式处理可编辑单元格
        const editableColumns = props.columns.filter(col => col.editable)

        editableColumns.forEach(col => {
            addEditingCell(index, col.prop);
        })

    }

}

// 修改保存处理函数
const handleSave = (index: number) => {
    const row = tableData.value[index]
    row.editing = false
    // 清除该行所有编辑单元格
    editingCells.value = editingCells.value.filter(cell => cell.rowIndex !== index)
    emit('save', index, row)
    emit('update:data', tableData.value.map(({ editing, ...rest }) => rest))
}

// 修改取消处理函数
const handleCancel = (index: number) => {
    if (originalData.value[index]) {
        tableData.value[index] = JSON.parse(JSON.stringify(originalData.value[index]))
    }
    tableData.value[index].editing = false
    // 清除该行所有编辑单元格
    editingCells.value = editingCells.value.filter(cell => cell.rowIndex !== index)
}

// 修改单元格失焦处理函数
const handleCellBlur = (rowIndex: number, prop: string) => {
    if (isEditingCell(rowIndex, prop)) {
        if (props.editMode === 'cell') {
            removeEditingCell(rowIndex, prop)
        }


        // 检查否所有编辑单元格都已失焦
        const hasEditingCells = editingCells.value.some(cell => cell.rowIndex === rowIndex)

        // 如果该行没有编辑中的单元格，自动保存
        if (!hasEditingCells) {
            setTimeout(() => {
                const row = tableData.value[rowIndex]
                if (row.editing) {
                    handleSave(rowIndex)
                }
            }, 200)
        }
    }
}

// 存储编辑组件的引用
const cellRefs = ref<Map<string, any>>(new Map())

// 设置单元格组件引用
const setCellRef = (rowIndex: number, prop: string, el: any) => {
    if (el) {
        cellRefs.value.set(`${rowIndex}-${prop}`, el)
    }
}

// 统一处理单元格触发
const handleCellTrigger = (rowIndex: number, prop: string, column: TableColumn, triggerType: TriggerType) => {
    // 优先使用列配置，否则使用全局配置
    const triggerMode = column.trigger || props.trigger

    if (triggerMode === triggerType) {
        addEditingCell(rowIndex, prop)

        // 等待 DOM 更新后聚焦
        setTimeout(() => {
            const ref = cellRefs.value.get(`${rowIndex}-${prop}`)
            if (ref) {
                if (ref.focus) {
                    ref.focus()
                } else if (ref.$el && ref.$el.querySelector('input')) {
                    ref.$el.querySelector('input').focus()
                }
            }
        })
    }
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
:deep(.el-date-editor.el-input),
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