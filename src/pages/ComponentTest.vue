<template>
  <div class="component-test">
    <h1 class="page-title">组件测试页面</h1>
    
    <div class="test-grid">
      <div class="test-item">
        <h2>基础按钮测试</h2>
        <div class="component-container">
          <div class="button-group">
            <CButton>默认按钮</CButton>
            <CButton type="primary">主要按钮</CButton>
            <CButton type="success">成功按钮</CButton>
            <CButton type="warning">警告按钮</CButton>
            <CButton type="danger">危险按钮</CButton>
          </div>
        </div>
      </div>
      
      <div class="test-item">
        <h2>按钮尺寸测试</h2>
        <div class="component-container">
          <div class="button-group">
            <CButton size="small">小型按钮</CButton>
            <CButton>默认尺寸</CButton>
            <CButton size="large">大型按钮</CButton>
          </div>
        </div>
      </div>

      <div class="test-item">
        <h2>禁用状态测试</h2>
        <div class="component-container">
          <div class="button-group">
            <CButton disabled>禁用按钮</CButton>
            <CButton type="primary" disabled>禁用主要按钮</CButton>
            <ElButton type="primary">禁用按钮</ElButton>
          </div>
        </div>
      </div>

      <div class="test-item">
        <h2>基础输入框测试</h2>
        <div class="component-container">
          <div class="input-group">
            <CInput v-model="inputValue" placeholder="请输入内容" />
            <div class="value-display">当前值: {{ inputValue }}</div>
          </div>
        </div>
      </div>
      
      <div class="test-item">
        <h2>禁用状态测试</h2>
        <div class="component-container">
          <div class="input-group">
            <CInput disabled placeholder="禁用状态" />
            <ElInput disabled placeholder="Element Plus 禁用状态" />
          </div>
        </div>
      </div>
      
      <div class="test-item">
        <h2>可清空输入框</h2>
        <div class="component-container">
          <div class="input-group">
            <CInput v-model="clearableValue" clearable placeholder="可清空" />
          </div>
        </div>
      </div>
    </div>

    <div class="test-container">
      <h2>表格组件测试</h2>
      <c-table
        ref="tableRef"
        :data="tableData"
        :columns="columns"
        @save="handleSave"
        @field-change="handleFieldChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CButton, CInput } from '../package/components'
import { ElButton, ElInput } from 'element-plus/es'

const inputValue = ref('')
const clearableValue = ref('')
const tableRef = ref()
const originalData = ref<TableRow[]>([])

interface TableRow {
  id: number
  name: string
  age: number
  role: string
  birth: string
  score: number
  remark: string
  editing?: boolean
}

const tableData = ref<TableRow[]>([
  {
    id: 1,
    name: '张三',
    age: 25,
    role: 'admin',
    birth: '1998-01-01',
    score: 85,
    remark: '这是一条测试备注'
  },
  {
    id: 2,
    name: '李四',
    age: 30,
    role: 'user',
    birth: '1993-05-15',
    score: 92,
    remark: '优秀员工',
  }
])

const columns = [
  { 
    prop: 'id', 
    label: 'ID',
    width: 80,
    fixed: 'left'
  },
  { 
    prop: 'name', 
    label: '姓名', 
    editable: true,
    required: true
  },
  { 
    prop: 'age', 
    label: '年龄', 
    editable: true,
    type: 'number',
    min: 0,
    max: 100,
    onChange: (value: number) => {
      console.log('年龄变化:', value)
    }
  },
  {
    prop: 'role',
    label: '角色',
    editable: true,
    type: 'select',
    options: [
      { label: '管理员', value: 'admin' },
      { label: '用户', value: 'user' }
    ]
  },
  {
    prop: 'birth',
    label: '出生日期',
    editable: true,
    type: 'date'
  },
  {
    prop: 'score',
    label: '分数',
    editable: true,
    type: 'number',
    min: 0,
    max: 100,
    formatter: (value: number) => `${value}分`
  },
  {
    prop: 'remark',
    label: '备注',
    editable: true,
    type: 'textarea',
    width: 200
  },
  {
    prop: 'operation',
    label: '操作',
    width: 200,
    fixed: 'right',
    render: ({ row, $index, editing }) => {
      const buttons = !editing
        ? [
            {
              text: '修改',
              type: 'primary',
              show: row.role === 'admin',
              handler: () => handleEdit($index, row,editing)
            },
            {
              text: '删除',
              type: 'danger',
              show: row.role === 'admin',
              handler: () => tableData.value.splice($index, 1)
            },
            {
              text: '查看',
              type: 'info',
              show: row.role === 'user',
              handler: () => console.log('查看详情:', row)
            }
          ]
        : [
            {
              text: '确定',
              type: 'success',
              handler: () => handleSave($index, row)
            },
            {
              text: '重置',
              type: 'warning',
              handler: () => handleReset($index)
            }
          ]

      return tableRef.value?.renderButtonGroup({ buttons }, $index, row)
    }
  }
]

const handleSave = (index: number, row: any) => {
  row.editing = false
  console.log('保存行数据:', index, row)
}

const handleFieldChange = (index: number, prop: string, value: any) => {
  console.log('字段变化:', { index, prop, value })
}

const handleEdit = (index: number, row: Record<string, any>,editing:boolean) => {
  row.editing = true
}

// 重置行数据
const handleReset = (index: number) => {
  if (tableData.value[index]) {
    const original = { ...tableData.value[index] }
    original.editing = false
    tableData.value[index] = original
  }
}
</script>

<style scoped>
.component-test {
  padding: 20px;
}

.page-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.test-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.test-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
}

.test-item h2 {
  font-size: 18px;
  margin-bottom: 16px;
}

.component-container {
  min-height: 100px;
  border-radius: 4px;
  padding: 16px;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.button-group > * {
  margin-bottom: 8px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.value-display {
  margin-top: 8px;
  color: #666;
  font-size: 14px;
}

.input-group > * {
  width: 100%;
  max-width: 300px;
}

.test-container {
  padding: 20px;
}
</style> 