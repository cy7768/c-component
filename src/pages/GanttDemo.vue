<template>
  <div class="gantt-demo">
    <div class="demo-header">
      <h2>甘特图组件演示</h2>
      <p>支持拖拽移动任务、调整任务时间范围，美观的UI设计</p>
    </div>
    
    <div class="demo-controls">
      <el-button @click="addTask" type="primary">添加任务</el-button>
      <el-button @click="resetTasks" type="default">重置数据</el-button>
    </div>
    
    <div class="gantt-container">
      <CGantt 
        :tasks="tasks"
        :start-date="startDate"
        :end-date="endDate"
        :cell-width="80"
        :row-height="50"
        :columns="ganttColumns"
        @task-update="onTaskUpdate"
        @task-click="onTaskClick"
      />
    </div>
    
    <div class="demo-info">
      <h3>功能说明：</h3>
      <ul>
        <li>拖拽任务条可以移动任务时间</li>
        <li>拖拽任务条两端可以调整任务持续时间</li>
        <li>鼠标悬停有视觉反馈效果</li>
        <li>支持自定义任务颜色和进度</li>
        <li>支持自定义显示字段（任务名称、开始时间、结束时间、进度等）</li>
        <li>三层时间轴显示（年-月-日）</li>
        <li>响应式设计，支持滚动查看</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElButton, ElMessage } from 'element-plus'

interface GanttTask {
  id: string | number
  name: string
  startDate: Date
  endDate: Date
  progress: number
  color?: string
}

interface GanttColumn {
  key: string
  label: string
  width?: number
  formatter?: (value: any, task: GanttTask) => string
}

const tasks = ref<GanttTask[]>([])
const startDate = ref<Date>()
const endDate = ref<Date>()

// 自定义列配置
const ganttColumns = ref<GanttColumn[]>([
  {
    key: 'name',
    label: '任务名称',
    width: 180
  },
  {
    key: 'startDate',
    label: '开始时间',
    width: 120,
    formatter: (value: Date) => value.toLocaleDateString('zh-CN')
  },
  {
    key: 'endDate',
    label: '结束时间',
    width: 120,
    formatter: (value: Date) => value.toLocaleDateString('zh-CN')
  },
  {
    key: 'progress',
    label: '进度',
    width: 80,
    formatter: (value: number) => `${value}%`
  }
])

// 初始化示例数据
function initTasks() {
  const today = new Date()
  const baseDate = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  
  startDate.value = new Date(baseDate)
  endDate.value = new Date(baseDate.getTime() + 730 * 24 * 60 * 60 * 1000) // 2年后
  
  tasks.value = [
    {
      id: 1,
      name: '项目启动',
      startDate: new Date(baseDate.getTime()),
      endDate: new Date(baseDate.getTime() + 3 * 24 * 60 * 60 * 1000),
      progress: 100,
      color: '#67c23a'
    },
    {
      id: 2,
      name: '需求分析',
      startDate: new Date(baseDate.getTime() + 2 * 24 * 60 * 60 * 1000),
      endDate: new Date(baseDate.getTime() + 8 * 24 * 60 * 60 * 1000),
      progress: 80,
      color: '#409eff'
    },
    {
      id: 3,
      name: '系统设计',
      startDate: new Date(baseDate.getTime() + 7 * 24 * 60 * 60 * 1000),
      endDate: new Date(baseDate.getTime() + 14 * 24 * 60 * 60 * 1000),
      progress: 60,
      color: '#e6a23c'
    },
    {
      id: 4,
      name: '开发实现',
      startDate: new Date(baseDate.getTime() + 12 * 24 * 60 * 60 * 1000),
      endDate: new Date(baseDate.getTime() + 25 * 24 * 60 * 60 * 1000),
      progress: 30,
      color: '#f56c6c'
    },
    {
      id: 5,
      name: '测试验收',
      startDate: new Date(baseDate.getTime() + 23 * 24 * 60 * 60 * 1000),
      endDate: new Date(baseDate.getTime() + 28 * 24 * 60 * 60 * 1000),
      progress: 0,
      color: '#909399'
    }
  ]
}

// 添加新任务
function addTask() {
  const newId = Math.max(...tasks.value.map(t => Number(t.id))) + 1
  const today = new Date()
  const colors = ['#409eff', '#67c23a', '#e6a23c', '#f56c6c', '#909399']
  
  tasks.value.push({
    id: newId,
    name: `新任务 ${newId}`,
    startDate: new Date(today),
    endDate: new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000),
    progress: Math.floor(Math.random() * 101),
    color: colors[Math.floor(Math.random() * colors.length)]
  })
  
  ElMessage.success('任务添加成功')
}

// 重置任务数据
function resetTasks() {
  initTasks()
  ElMessage.success('数据已重置')
}

// 任务更新事件
function onTaskUpdate(task: GanttTask) {
  const index = tasks.value.findIndex(t => t.id === task.id)
  if (index !== -1) {
    tasks.value[index] = { ...task }
    ElMessage.success(`任务 "${task.name}" 已更新`)
  }
}

// 任务点击事件
function onTaskClick(task: GanttTask) {
  ElMessage.info(`点击了任务: ${task.name}`)
}

onMounted(() => {
  initTasks()
})
</script>

<style lang="scss" scoped>
.gantt-demo {
  padding: 20px;
  
  .demo-header {
    margin-bottom: 20px;
    
    h2 {
      color: #303133;
      margin-bottom: 8px;
    }
    
    p {
      color: #606266;
      margin: 0;
    }
  }
  
  .demo-controls {
    margin-bottom: 20px;
    
    .el-button {
      margin-right: 12px;
    }
  }
  
  .gantt-container {
    margin-bottom: 30px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  
  .demo-info {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #409eff;
    
    h3 {
      color: #303133;
      margin-top: 0;
      margin-bottom: 12px;
    }
    
    ul {
      margin: 0;
      padding-left: 20px;
      
      li {
        color: #606266;
        margin-bottom: 8px;
        line-height: 1.5;
        
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>