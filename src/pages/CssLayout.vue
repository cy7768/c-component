<template>
  <div class="component-test">
    <h1 class="page-title">CssLayout-测试页面</h1>

    <div class="test-grid">
      <div class="test-item">
        <h2>砌体布局-columns</h2>
        <div class="grid-container">
          <div v-for="fit in fits" :key="fit" class="block">
            <el-image :src="url" :fit="fit" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { CButton, CInput } from '../package/index'
import { ElImage } from 'element-plus/es'

const fits = [
  'fill',
  'contain',
  'cover',
  'none',
  'scale-down',
] as ImageProps['fit'][]
const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

const inputValue = ref('')
const clearableValue = ref('')
const tableRef = ref()
const originalData = ref<TableRow[]>([])
const formRef = ref()
const searchRef = ref()

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
    required: true,
    trigger: 'dblclick'
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
    },
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
    render: ({ row, $index, editing }: {
      row: TableRow
      $index: number
      editing: boolean
    }) => {
      const buttons = !editing
        ? [
          {
            text: '修改',
            type: 'primary',
            show: row.role === 'admin',
            handler: () => tableRef.value?.handleEdit($index, row)
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
  console.log('段变化:', { index, prop, value })
}

const handleEdit = (index: number, row: Record<string, any>) => {
}

// 重置行数据
const handleReset = (index: number) => {
  if (tableData.value[index]) {
    const original = { ...tableData.value[index] }
    original.editing = false
    tableData.value[index] = original
  }
}

// 添加表单相关代码
const formData = ref({
  name: '',
  age: 18,
  role: '',
  birth: '',
  active: false,
  hobbies: [],
  remark: ''
})

const formFields = [
  {
    prop: 'name',
    label: '姓名',
    type: 'input',
    span: 12,
    rules: [{ required: true, message: '请输入姓名' }],
    placeholder: '请输入姓名'
  },
  {
    prop: 'age',
    label: '年龄',
    type: 'number',
    span: 12,
    min: 0,
    max: 100
  },
  {
    prop: 'role',
    label: '角色',
    type: 'select',
    span: 12,
    options: [
      { label: '管理员', value: 'admin' },
      { label: '用户', value: 'user' }
    ],
    clearable: true
  },
  {
    prop: 'birth',
    label: '出生日期',
    type: 'date',
    span: 12
  },
  {
    prop: 'active',
    label: '是否启用',
    type: 'switch',
    span: 12
  },
  {
    prop: 'hobbies',
    label: '爱好',
    type: 'checkbox',
    span: 12,
    options: [
      { label: '阅读', value: 'reading' },
      { label: '游戏', value: 'gaming' },
      { label: '运动', value: 'sports' }
    ]
  },
  {
    prop: 'remark',
    label: '备注',
    type: 'textarea',
    span: 24,
    rows: 3
  }
]

const handleFormSubmit = (data: any) => {
  console.log('表单提交:', data)
}

const handleFormReset = () => {
  console.log('表单重置')
}

const handleFormChange = (prop: string, value: any) => {
  console.log('字段变化:', prop, value)
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
}

.test-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
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

.button-group>* {
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

.input-group>* {
  width: 100%;
  max-width: 300px;
}

.test-container {
  padding: 20px;
}

.form-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  align-items: center;
}

.grid-container {

  /* column-count: 3; */
  columns: 300px 3
    /* display: grid;
  grid-template-columns: 10% 59% 30%;
  flex-wrap: wrap;
  gap: 1%; */

    /* el-row {
    width: 100%;
    border: 1px solid #d12e2e;
  } */
}
</style>