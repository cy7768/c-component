<template>
  <div class="c-gantt">
    <!-- 头部时间轴 -->
    <div class="gantt-header">
      <div class="gantt-sidebar-header">
        <div 
          v-for="column in props.columns" 
          :key="column.key"
          class="sidebar-header-cell"
          :style="{ width: (column.width || 200) + 'px' }"
        >
          {{ column.label }}
        </div>
      </div>
      <div class="gantt-timeline-header" ref="timelineHeaderRef" @scroll="onTimelineScroll">
        <!-- 年份层 -->
        <div class="timeline-year-row" :style="{ width: totalWidth + 'px' }">
          <div 
            v-for="yearGroup in yearGroups" 
            :key="'year-' + yearGroup.year"
            class="timeline-year-cell"
            :style="{ left: yearGroup.startLeft + 'px', width: yearGroup.width + 'px' }"
          >
            {{ yearGroup.year }}年
          </div>
        </div>
        
        <!-- 月份层 -->
        <div class="timeline-month-row" :style="{ width: totalWidth + 'px' }">
          <div 
            v-for="monthGroup in monthGroups" 
            :key="'month-' + monthGroup.year + '-' + monthGroup.month"
            class="timeline-month-cell"
            :style="{ left: monthGroup.startLeft + 'px', width: monthGroup.width + 'px' }"
          >
            {{ monthGroup.month }}月
          </div>
        </div>
        
        <!-- 日期层 -->
        <div class="timeline-day-row" :style="{ width: totalWidth + 'px' }">
          <div 
            v-for="date in timelineData" 
            :key="date.key"
            class="timeline-day-cell"
            :style="{ left: date.left + 'px', width: cellWidth + 'px' }"
          >
            {{ new Date(date.date).getDate() }}
          </div>
        </div>
      </div>
    </div>
    
    <!-- 主体内容 -->
    <div class="gantt-body">
      <!-- 左侧任务列表 -->
      <div class="gantt-sidebar" ref="sidebarRef" @scroll="onSidebarScroll">
        <div 
          v-for="task in tasks" 
          :key="task.id"
          class="task-row"
          :style="{ height: rowHeight + 'px' }"
        >
          <div 
            v-for="column in props.columns" 
            :key="column.key"
            class="task-cell"
            :style="{ width: (column.width || 200) + 'px' }"
          >
            {{ getColumnValue(task, column) }}
          </div>
        </div>
      </div>
      
      <!-- 右侧甘特图区域 -->
      <div class="gantt-chart" ref="chartRef" @scroll="onChartScroll">
        <div class="gantt-grid" :style="{ width: totalWidth + 'px', height: tasks.length * rowHeight + 'px' }">
          <!-- 垂直网格线 -->
          <div 
            v-for="date in timelineData" 
            :key="'grid-' + date.key"
            class="grid-line vertical"
            :style="{ left: date.left + 'px', width: cellWidth + 'px' }"
          ></div>
          

        </div>
        
        <!-- 任务条 -->
        <div 
          v-for="(task, index) in tasks" 
          :key="task.id"
          class="task-bar-container"
          :style="{ top: index * rowHeight + 'px', height: rowHeight + 'px', width: totalWidth + 'px' }"
        >
          <div 
            class="task-bar"
            :class="{ 'dragging': draggingTask?.id === task.id }"
            :style="getTaskBarStyle(task)"
            @mousedown="startDrag($event, task)"
          >
            <div class="task-bar-content">
              <span class="task-title">{{ task.name }}</span>
              <span class="task-progress">{{ task.progress }}%</span>
            </div>
            <div class="task-bar-progress" :style="{ width: task.progress + '%' }"></div>
            
            <!-- 进度拖动手柄 -->
            <div 
              class="progress-handle"
              :style="{ left: task.progress + '%' }"
              @mousedown.stop="startProgressDrag($event, task)"
            ></div>
            
            <!-- 左侧调整手柄 -->
            <div 
              class="resize-handle left"
              @mousedown.stop="startResize($event, task, 'left')"
            ></div>
            
            <!-- 右侧调整手柄 -->
            <div
              class="resize-handle right"
              @mousedown.stop="startResize($event, task, 'right')"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

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

interface TimelineItem {
  key: string
  label: string
  date: Date
  left: number
}

interface YearGroup {
  year: number
  startLeft: number
  width: number
  months: MonthGroup[]
}

interface MonthGroup {
  year: number
  month: number
  startLeft: number
  width: number
  days: TimelineItem[]
}

defineOptions({
  name: 'CGantt'
})

const props = withDefaults(defineProps<{
  tasks: GanttTask[]
  startDate?: Date
  endDate?: Date
  cellWidth?: number
  rowHeight?: number
  dateFormat?: string
  columns?: GanttColumn[]
}>(), {
  cellWidth: 60,
  rowHeight: 40,
  dateFormat: 'MM/DD',
  columns: () => [{ key: 'name', label: '任务名称', width: 200 }]
})

const emit = defineEmits<{
  'task-update': [task: GanttTask]
  'task-click': [task: GanttTask]
}>()

// 获取列值的函数
function getColumnValue(task: GanttTask, column: GanttColumn): string {
  const value = (task as any)[column.key]
  
  if (column.formatter) {
    return column.formatter(value, task)
  }
  
  // 默认格式化
  if (column.key === 'startDate' || column.key === 'endDate') {
    return value instanceof Date ? value.toLocaleDateString('zh-CN') : String(value || '')
  }
  
  if (column.key === 'progress') {
    return typeof value === 'number' ? `${value}%` : String(value || '')
  }
  
  return String(value || '')
}

const chartRef = ref<HTMLElement>()
const sidebarRef = ref<HTMLElement>()
const timelineHeaderRef = ref<HTMLElement>()
const draggingTask = ref<GanttTask | null>(null)
const resizingTask = ref<{ task: GanttTask; direction: 'left' | 'right' } | null>(null)
const progressDragging = ref<GanttTask | null>(null)
const dragStartX = ref(0)
const dragStartDate = ref<Date>()
const dragStartProgress = ref(0)
const isScrollSyncing = ref(false)

// 计算时间轴数据
const timelineData = computed<TimelineItem[]>(() => {
  const start = props.startDate || getMinDate()
  const end = props.endDate || getMaxDate()
  const timeline: TimelineItem[] = []
  
  const current = new Date(start)
  let left = 0
  
  while (current <= end) {
    timeline.push({
      key: current.toISOString(),
      label: formatDate(current),
      date: new Date(current),
      left
    })
    
    current.setDate(current.getDate() + 1)
    left += props.cellWidth
  }
  
  return timeline
})

// 计算时间轴总宽度
const totalWidth = computed(() => {
  return timelineData.value.length * props.cellWidth
})

// 计算年份分组
const yearGroups = computed<YearGroup[]>(() => {
  const groups: YearGroup[] = []
  const yearMap = new Map<number, { startLeft: number; endLeft: number; months: MonthGroup[] }>()
  
  timelineData.value.forEach(item => {
    const year = item.date.getFullYear()
    if (!yearMap.has(year)) {
      yearMap.set(year, { startLeft: item.left, endLeft: item.left + props.cellWidth, months: [] })
    } else {
      yearMap.get(year)!.endLeft = item.left + props.cellWidth
    }
  })
  
  yearMap.forEach((value, year) => {
    groups.push({
      year,
      startLeft: value.startLeft,
      width: value.endLeft - value.startLeft,
      months: []
    })
  })
  
  return groups.sort((a, b) => a.year - b.year)
})

// 计算月份分组
const monthGroups = computed<MonthGroup[]>(() => {
  const groups: MonthGroup[] = []
  const monthMap = new Map<string, { startLeft: number; endLeft: number; year: number; month: number }>()
  
  timelineData.value.forEach(item => {
    const year = item.date.getFullYear()
    const month = item.date.getMonth() + 1
    const key = `${year}-${month}`
    
    if (!monthMap.has(key)) {
      monthMap.set(key, { startLeft: item.left, endLeft: item.left + props.cellWidth, year, month })
    } else {
      monthMap.get(key)!.endLeft = item.left + props.cellWidth
    }
  })
  
  monthMap.forEach((value, key) => {
    groups.push({
      year: value.year,
      month: value.month,
      startLeft: value.startLeft,
      width: value.endLeft - value.startLeft,
      days: []
    })
  })
  
  return groups.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year
    return a.month - b.month
  })
})

// 获取任务的最小日期
function getMinDate(): Date {
  if (!props.tasks.length) return new Date()
  return new Date(Math.min(...props.tasks.map(task => task.startDate.getTime())))
}

// 获取任务的最大日期
function getMaxDate(): Date {
  if (!props.tasks.length) return new Date()
  const maxDate = new Date(Math.max(...props.tasks.map(task => task.endDate.getTime())))
  maxDate.setDate(maxDate.getDate() + 7) // 添加一周的缓冲
  return maxDate
}

// 格式化日期
function formatDate(date: Date): string {
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return `${month}/${day}`
}

// 计算任务条样式
function getTaskBarStyle(task: GanttTask) {
  const startDate = props.startDate || getMinDate()
  
  // 找到任务开始日期对应的时间轴项
  const taskStartTime = new Date(task.startDate.getFullYear(), task.startDate.getMonth(), task.startDate.getDate()).getTime()
  const startTimelineItem = timelineData.value.find(item => {
    const itemTime = new Date(item.date.getFullYear(), item.date.getMonth(), item.date.getDate()).getTime()
    return itemTime === taskStartTime
  })
  
  // 计算任务持续天数
  const duration = Math.floor((task.endDate.getTime() - task.startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1
  
  return {
    left: (startTimelineItem?.left || 0) + 'px',
    width: duration * props.cellWidth + 'px',
    backgroundColor: task.color || '#409eff'
  }
}

// 开始拖拽
function startDrag(event: MouseEvent, task: GanttTask) {
  event.preventDefault()
  draggingTask.value = task
  dragStartX.value = event.clientX
  dragStartDate.value = new Date(task.startDate)
  
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', endDrag)
}

// 拖拽中
function onDrag(event: MouseEvent) {
  if (!draggingTask.value) return
  
  const deltaX = event.clientX - dragStartX.value
  const daysDelta = Math.round(deltaX / props.cellWidth)
  
  const newStartDate = new Date(dragStartDate.value!)
  newStartDate.setDate(newStartDate.getDate() + daysDelta)
  
  // 确保新日期在时间轴范围内
  const startDate = props.startDate || getMinDate()
  const endDate = props.endDate || getMaxDate()
  
  if (newStartDate >= startDate && newStartDate <= endDate) {
    const duration = draggingTask.value.endDate.getTime() - draggingTask.value.startDate.getTime()
    const newEndDate = new Date(newStartDate.getTime() + duration)
    
    draggingTask.value.startDate = newStartDate
    draggingTask.value.endDate = newEndDate
  }
}

// 结束拖拽
function endDrag() {
  if (draggingTask.value) {
    emit('task-update', { ...draggingTask.value })
    draggingTask.value = null
  }
  
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', endDrag)
}

// 同步滚动 - 时间轴头部滚动时同步甘特图主体
function onTimelineScroll() {
  if (isScrollSyncing.value || !timelineHeaderRef.value || !chartRef.value) return
  
  isScrollSyncing.value = true
  chartRef.value.scrollLeft = timelineHeaderRef.value.scrollLeft
  
  nextTick(() => {
    isScrollSyncing.value = false
  })
}

// 同步滚动 - 甘特图主体滚动时同步时间轴头部和侧边栏
function onChartScroll() {
  if (isScrollSyncing.value || !timelineHeaderRef.value || !chartRef.value) return
  
  isScrollSyncing.value = true
  // 同步横向滚动
  timelineHeaderRef.value.scrollLeft = chartRef.value.scrollLeft
  // 同步纵向滚动
  if (sidebarRef.value) {
    sidebarRef.value.scrollTop = chartRef.value.scrollTop
  }
  
  nextTick(() => {
    isScrollSyncing.value = false
  })
}

// 同步滚动 - 侧边栏滚动时同步甘特图主体
function onSidebarScroll() {
  if (isScrollSyncing.value || !sidebarRef.value || !chartRef.value) return
  
  isScrollSyncing.value = true
  chartRef.value.scrollTop = sidebarRef.value.scrollTop
  
  nextTick(() => {
    isScrollSyncing.value = false
  })
}

// 开始调整大小
function startResize(event: MouseEvent, task: GanttTask, direction: 'left' | 'right') {
  event.preventDefault()
  resizingTask.value = { task, direction }
  dragStartX.value = event.clientX
  dragStartDate.value = direction === 'left' ? new Date(task.startDate) : new Date(task.endDate)
  
  document.addEventListener('mousemove', onResize)
  document.addEventListener('mouseup', endResize)
}

// 调整大小中
function onResize(event: MouseEvent) {
  if (!resizingTask.value) return
  
  const deltaX = event.clientX - dragStartX.value
  const daysDelta = Math.round(deltaX / props.cellWidth)
  
  const { task, direction } = resizingTask.value
  
  if (direction === 'left') {
    const newStartDate = new Date(dragStartDate.value!)
    newStartDate.setDate(newStartDate.getDate() + daysDelta)
    
    if (newStartDate < task.endDate) {
      task.startDate = newStartDate
    }
  } else {
    const newEndDate = new Date(dragStartDate.value!)
    newEndDate.setDate(newEndDate.getDate() + daysDelta)
    
    if (newEndDate > task.startDate) {
      task.endDate = newEndDate
    }
  }
}

// 结束调整大小
function endResize() {
  if (resizingTask.value) {
    emit('task-update', { ...resizingTask.value.task })
    resizingTask.value = null
  }
  
  document.removeEventListener('mousemove', onResize)
  document.removeEventListener('mouseup', endResize)
}

// 开始拖拽进度
function startProgressDrag(event: MouseEvent, task: GanttTask) {
  event.preventDefault()
  progressDragging.value = task
  dragStartX.value = event.clientX
  dragStartProgress.value = task.progress
  
  document.addEventListener('mousemove', onProgressDrag)
  document.addEventListener('mouseup', endProgressDrag)
}

// 拖拽进度中
function onProgressDrag(event: MouseEvent) {
  if (!progressDragging.value) return
  
  const deltaX = event.clientX - dragStartX.value
  const taskBarWidth = getTaskBarWidth(progressDragging.value)
  const progressDelta = (deltaX / taskBarWidth) * 100
  
  let newProgress = dragStartProgress.value + progressDelta
  newProgress = Math.max(0, Math.min(100, newProgress)) // 限制在0-100之间
  
  progressDragging.value.progress = Math.round(newProgress)
}

// 结束拖拽进度
function endProgressDrag() {
  if (progressDragging.value) {
    emit('task-update', { ...progressDragging.value })
    progressDragging.value = null
  }
  
  document.removeEventListener('mousemove', onProgressDrag)
  document.removeEventListener('mouseup', endProgressDrag)
}

// 获取任务条宽度
function getTaskBarWidth(task: GanttTask): number {
  const duration = Math.floor((task.endDate.getTime() - task.startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1
  return duration * props.cellWidth
}

// 任务点击事件
function onTaskClick(task: GanttTask) {
  emit('task-click', task)
}

// 清理事件监听器
onUnmounted(() => {
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', endDrag)
  document.removeEventListener('mousemove', onResize)
  document.removeEventListener('mouseup', endResize)
  document.removeEventListener('mousemove', onProgressDrag)
  document.removeEventListener('mouseup', endProgressDrag)
})
</script>

<style lang="scss" scoped>
.c-gantt {
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  
  .gantt-header {
    display: flex;
    border-bottom: 1px solid #e4e7ed;
    background: #f5f7fa;
    
    .gantt-sidebar-header {
      border-right: 1px solid #e4e7ed;
      background: #fafafa;
      display: flex;
      align-items: center;
      height: 105px; /* 与右侧时间轴总高度保持一致 (40+35+30) */
      box-sizing: border-box;
      
      .sidebar-header-cell {
        padding: 12px 16px;
        font-weight: 600;
        border-right: 1px solid #e4e7ed;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        box-sizing: border-box;
        
        &:last-child {
          border-right: none;
        }
      }
    }
    
    .gantt-timeline-header {
      flex: 1;
      overflow-x: hidden;
      position: relative;
      
      .timeline-year-row {
        position: relative;
        height: 40px;
        border-bottom: 1px solid #e4e7ed;
        background: #f8f9fa;
        
        .timeline-year-cell {
          position: absolute;
          top: 0;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
          color: #303133;
          border-right: 1px solid #e4e7ed;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          
          &:hover {
            background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
          }
        }
      }
      
      .timeline-month-row {
        position: relative;
        height: 35px;
        border-bottom: 1px solid #e4e7ed;
        background: #f1f3f4;
        
        .timeline-month-cell {
          position: absolute;
          top: 0;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          font-size: 13px;
          color: #495057;
          border-right: 1px solid #e4e7ed;
          background: linear-gradient(135deg, #f1f3f4 0%, #e9ecef 100%);
          
          &:hover {
            background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
          }
        }
      }
      
      .timeline-day-row {
        position: relative;
        height: 30px;
        background: #ffffff;

        .timeline-day-cell {
          position: absolute;
          top: 0;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #e4e7ed;
          font-size: 12px;
          color: #606266;
          transition: all 0.2s ease;
          
          &:hover {
            background: #f8f9fa;
            color: #303133;
          }
          
          &:last-child {
            border-right: none;
          }
        }
      }
    }
  }
  
  .gantt-body {
    display: flex;
    max-height: 400px;
    overflow: hidden;
    
    .gantt-sidebar {
      border-right: 1px solid #e4e7ed;
      background: #fafafa;
      overflow-y: auto;
      max-height: 400px;
      
      /* Firefox - 隐藏滚动条 */
      scrollbar-width: none;
      
      /* Webkit浏览器 - 隐藏滚动条 */
      &::-webkit-scrollbar {
        width: 0;
        display: none;
      }
      
      &::-webkit-scrollbar-track {
        display: none;
      }
      
      &::-webkit-scrollbar-thumb {
        display: none;
      }
      
      .task-row {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e4e7ed;
        box-sizing: border-box;
        
        .task-cell {
          padding: 0 16px;
          border-right: 1px solid #e4e7ed;
          font-size: 14px;
          color: #303133;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          
          &:last-child {
            border-right: none;
          }
        }
        
        &:last-child {
          border-bottom: none;
        }
      }
    }
    
    .gantt-chart {
      flex: 1;
      position: relative;
      overflow-x: auto;
      overflow-y: auto;
      max-height: 400px;
      
      /* Firefox - 隐藏滚动条 */
      scrollbar-width: none;
      
      /* Webkit浏览器 - 隐藏滚动条 */
      &::-webkit-scrollbar {
        width: 0;
        height: 0;
        display: none;
      }
      
      &::-webkit-scrollbar-track {
        display: none;
      }
      
      &::-webkit-scrollbar-thumb {
        display: none;
      }
      
      .gantt-grid {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        
        .grid-line {
          position: absolute;
          
          &.vertical {
            top: 0;
            bottom: 0;
            border-right: 1px solid #e4e7ed;
            
            &:last-child {
              border-right: none;
            }
          }
          
          &.horizontal {
            left: 0;
            right: 0;
            border-bottom: 1px solid #e4e7ed;
            height: 1px;
            
            &:last-child {
              border-bottom: none;
            }
          }
        }
      }
      
      .task-bar-container {
        position: absolute;
        left: 0;
        border-bottom: 1px solid #e4e7ed;
        box-sizing: border-box;
        
        &:last-child {
          border-bottom: none;
        }
        
        .task-bar {
          position: absolute;
          top: 8px;
          height: 24px;
          border-radius: 12px;
          cursor: move;
          transition: all 0.2s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          
          &:hover {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            transform: translateY(-1px);
          }
          
          &.dragging {
            opacity: 0.8;
            z-index: 10;
          }
          
          .task-bar-content {
            position: relative;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            padding: 0 8px;
            color: white;
            font-size: 12px;
            
            .task-title {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              flex: 1;
            }
            
            .task-progress {
              font-weight: 600;
              margin-left: 8px;
            }
          }
          
          .task-bar-progress {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 12px;
            transition: width 0.3s ease;
          }
          
          .progress-handle {
            position: absolute;
            top: -2px;
            width: 8px;
            height: 28px;
            background: #ffffff;
            border: 2px solid #409eff;
            border-radius: 4px;
            cursor: ew-resize;
            transform: translateX(-50%);
            opacity: 0;
            transition: opacity 0.2s ease;
            z-index: 3;
            
            &:hover {
              opacity: 1;
              box-shadow: 0 2px 8px rgba(64, 158, 255, 0.3);
            }
          }
          
          &:hover .progress-handle {
            opacity: 0.8;
          }
          
          .resize-handle {
            position: absolute;
            top: 0;
            width: 6px;
            height: 100%;
            cursor: ew-resize;
            opacity: 0;
            transition: opacity 0.2s ease;
            
            &.left {
              left: -3px;
              background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8));
            }
            
            &.right {
              right: -3px;
              background: linear-gradient(to left, transparent, rgba(255, 255, 255, 0.8));
            }
          }
          
          &:hover .resize-handle {
            opacity: 1;
          }
        }
      }
    }
  }
}

// 滚动条样式
.gantt-chart::-webkit-scrollbar,
.gantt-timeline-header::-webkit-scrollbar {
  height: 6px;
}

.gantt-chart::-webkit-scrollbar-track,
.gantt-timeline-header::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.gantt-chart::-webkit-scrollbar-thumb,
.gantt-timeline-header::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.gantt-chart::-webkit-scrollbar-thumb:hover,
.gantt-timeline-header::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>