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
            <div class="task-bar-progress" :style="{ width: task.progress + '%', borderRadius: Math.min(computedTaskBarHeight / 2, 12) + 'px' }"></div>
            
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
    
    <!-- 带时间标记的滚动条 -->    
    <div class="gantt-timeline-scrollbar">
      <div class="scrollbar-container" :style="{ marginLeft: sidebarWidth + 'px' }">
        <div class="scrollbar-track" ref="scrollbarTrackRef" @click="onScrollbarClick">
          <div class="scrollbar-thumb" ref="scrollbarThumbRef" @mousedown="startScrollbarDrag">
            <div class="thumb-date-label" :style="thumbDateLabelStyle">{{ currentThumbDate }}</div>
          </div>
          <!-- 按天显示的时间刻度标记 -->
          <div class="timeline-marks" :style="{ width: totalWidth + 'px' }">
            <div 
              v-for="mark in timelineMarks" 
              :key="mark.key"
              class="timeline-mark"
              :class="[mark.type, `year-${mark.year}`]"
              :style="{ left: mark.left + 'px' }"
              :data-year="mark.year"
            >
              <div class="mark-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 时间滚动选择器 -->
    <div class="gantt-time-scroller">
      <div class="scroller-controls" :style="{ marginLeft: sidebarWidth + 'px' }">
        <div class="scroller-vertical-layout">
          <div class="scroller-group">
            <label>年:</label>
            <div class="scroller-wrapper">
              <input 
                type="range" 
                :min="minYear" 
                :max="maxYear" 
                v-model="currentYear" 
                @input="onYearChange"
                class="time-slider year-slider"
              />
              <span class="scroller-value">{{ currentYear }}</span>
            </div>
          </div>
          
          <div class="scroller-group">
            <label>月:</label>
            <div class="scroller-wrapper">
              <input 
                type="range" 
                min="1" 
                max="12" 
                v-model="currentMonth" 
                @input="onMonthChange"
                class="time-slider month-slider"
              />
              <span class="scroller-value">{{ currentMonth }}</span>
            </div>
          </div>
          
          <div class="scroller-group">
            <label>日:</label>
            <div class="scroller-wrapper">
              <input 
                type="range" 
                min="1" 
                :max="daysInCurrentMonth" 
                v-model="currentDay" 
                @input="onDayChange"
                class="time-slider day-slider"
              />
              <span class="scroller-value">{{ currentDay }}</span>
            </div>
          </div>
          
          <div class="scroller-actions">
            <button @click="goToToday" class="action-btn">今天</button>
            <button @click="resetView" class="action-btn">重置</button>
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
}

interface MonthGroup {
  year: number
  month: number
  startLeft: number
  width: number
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
  taskBarHeight?: number
  dateFormat?: string
  columns?: GanttColumn[]
  scrollRatio?: number
  scrollUnit?: 'day' | 'month' | 'year'
}>(), {
  cellWidth: 60,
  rowHeight: 40,
  taskBarHeight: 24,
  dateFormat: 'MM/DD',
  columns: () => [{ key: 'name', label: '任务名称', width: 200 }],
  scrollRatio: 1,
  scrollUnit: 'month'
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
const scrollbarThumbRef = ref<HTMLElement>()
const draggingTask = ref<GanttTask | null>(null)
const resizingTask = ref<{ task: GanttTask; direction: 'left' | 'right' } | null>(null)
const progressDragging = ref<GanttTask | null>(null)
const dragStartX = ref(0)
const dragStartDate = ref<Date>()
const dragStartProgress = ref(0)
const isScrollSyncing = ref(false)

// 滚动条相关数据
const scrollbarTrackRef = ref<HTMLElement>()
const isScrollbarDragging = ref(false)
const scrollbarDragStartX = ref(0)
const scrollbarDragStartScrollLeft = ref(0)

// 时间滚动选择器相关数据

const currentYear = ref(new Date().getFullYear())
const currentMonth = ref(new Date().getMonth() + 1)
const currentDay = ref(new Date().getDate())

// 滑块位置状态（用于响应式更新日期显示）
const thumbPosition = ref({ left: 0, width: 0 })

// 年份范围
const minYear = computed(() => {
  const startYear = props.startDate ? props.startDate.getFullYear() : new Date().getFullYear() - 5
  return startYear
})
const maxYear = computed(() => {
  const endYear = props.endDate ? props.endDate.getFullYear() : new Date().getFullYear() + 5
  return endYear
})

// 当前月份的天数
const daysInCurrentMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 0).getDate()
})

// 计算当前滑块指示的日期（严格按照步进器配置）
const currentThumbDate = computed(() => {
  // 直接使用步进器的年月日值，不依赖滑块位置计算
  const year = currentYear.value
  const month = currentMonth.value
  const day = currentDay.value
  
  // 验证日期是否在时间轴数据范围内
  if (timelineData.value.length === 0) {
    return ''
  }
  
  // 检查步进器配置的日期是否在时间轴中存在
  const targetTime = new Date(year, month - 1, day).getTime()
  const hasData = timelineData.value.some(item => {
    const itemTime = new Date(item.date.getFullYear(), item.date.getMonth(), item.date.getDate()).getTime()
    return itemTime === targetTime
  })
  
  // 如果没有数据则忽略（返回空字符串）
  if (!hasData) {
    return ''
  }
  
  // 格式化显示步进器配置的日期
  return `${year}/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`
})

// 计算滑块日期标签的定位样式
const thumbDateLabelStyle = computed(() => {
  if (!scrollbarTrackRef.value) return {}
  
  const trackWidth = scrollbarTrackRef.value.clientWidth
  const thumbCenter = thumbPosition.value.left + thumbPosition.value.width / 2
  const labelHalfWidth = 40 // 标签宽度的一半
  
  // 边界检查和样式计算
  if (thumbCenter > trackWidth - labelHalfWidth) {
    return { transform: 'translateX(-100%)', left: '100%' }
  } else if (thumbCenter < labelHalfWidth) {
    return { transform: 'translateX(0)', left: '0%' }
  }
  
  return { transform: 'translateX(-50%)', left: '50%' }
})

// 时间刻度标记计算
const timelineMarks = computed(() => {
  return timelineData.value.map(item => ({
    key: `day-${item.key}`,
    left: item.left,
    year: item.date.getFullYear()
  }))
})

// 计算左侧边栏宽度
const sidebarWidth = computed(() => {
  return props.columns.reduce((sum, col) => sum + (col.width || 200), 0)
})

// 计算任务条高度（带限制）
const computedTaskBarHeight = computed(() => {
  const minHeight = 12
  const maxHeight = props.rowHeight - 8
  return Math.max(minHeight, Math.min(props.taskBarHeight, maxHeight))
})

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
  const yearMap = new Map<number, { startLeft: number; endLeft: number }>()
  
  timelineData.value.forEach(item => {
    const year = item.date.getFullYear()
    if (!yearMap.has(year)) {
      yearMap.set(year, { startLeft: item.left, endLeft: item.left + props.cellWidth })
    } else {
      yearMap.get(year)!.endLeft = item.left + props.cellWidth
    }
  })
  
  yearMap.forEach((value, year) => {
    groups.push({
      year,
      startLeft: value.startLeft,
      width: value.endLeft - value.startLeft
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
      width: value.endLeft - value.startLeft
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
  // 找到任务开始日期对应的时间轴项
  const taskStartTime = new Date(task.startDate.getFullYear(), task.startDate.getMonth(), task.startDate.getDate()).getTime()
  const startTimelineItem = timelineData.value.find(item => {
    const itemTime = new Date(item.date.getFullYear(), item.date.getMonth(), item.date.getDate()).getTime()
    return itemTime === taskStartTime
  })
  
  // 计算任务持续天数和样式
  const duration = Math.floor((task.endDate.getTime() - task.startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1
  const topOffset = (props.rowHeight - computedTaskBarHeight.value) / 2
  const borderRadius = Math.min(computedTaskBarHeight.value / 2, 12)
  
  return {
    left: (startTimelineItem?.left || 0) + 'px',
    width: duration * props.cellWidth + 'px',
    height: computedTaskBarHeight.value + 'px',
    top: topOffset + 'px',
    borderRadius: borderRadius + 'px',
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
  
  // 更新滚动条位置
  updateScrollbarThumbPosition()
  
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

// 滚动条相关方法
function updateScrollbarThumbPosition() {
  if (!chartRef.value || !scrollbarTrackRef.value || !scrollbarThumbRef.value) return
  
  const chartElement = chartRef.value
  const trackElement = scrollbarTrackRef.value
  const thumbElement = scrollbarThumbRef.value
  
  // 计算滚动条滑块的位置和大小
  const scrollRatio = chartElement.scrollLeft / (chartElement.scrollWidth - chartElement.clientWidth)
  const thumbWidth = (chartElement.clientWidth / chartElement.scrollWidth) * trackElement.clientWidth
  const thumbLeft = scrollRatio * (trackElement.clientWidth - thumbWidth)
  
  // 更新DOM样式
  thumbElement.style.width = thumbWidth + 'px'
  thumbElement.style.left = thumbLeft + 'px'
  
  // 更新响应式状态以触发日期显示更新
  thumbPosition.value = { left: thumbLeft, width: thumbWidth }
  
  // 滑块位置仅用于显示，不更新步进器值（以步进器数据为准）
}

// 滚动条拖拽开始
function startScrollbarDrag(event: MouseEvent) {
  event.preventDefault()
  isScrollbarDragging.value = true
  scrollbarDragStartX.value = event.clientX
  scrollbarDragStartScrollLeft.value = chartRef.value?.scrollLeft || 0
  
  document.addEventListener('mousemove', onScrollbarDrag)
  document.addEventListener('mouseup', endScrollbarDrag)
}

// 滚动条拖拽中
function onScrollbarDrag(event: MouseEvent) {
  if (!isScrollbarDragging.value || !chartRef.value || !scrollbarTrackRef.value) return
  
  const deltaX = event.clientX - scrollbarDragStartX.value
  const trackWidth = scrollbarTrackRef.value.clientWidth
  const chartElement = chartRef.value
  
  // 计算滚动比例
  const scrollRatio = deltaX / trackWidth
  const maxScrollLeft = chartElement.scrollWidth - chartElement.clientWidth
  const newScrollLeft = scrollbarDragStartScrollLeft.value + (scrollRatio * maxScrollLeft)
  
  // 限制滚动范围
  const clampedScrollLeft = Math.max(0, Math.min(maxScrollLeft, newScrollLeft))
  
  isScrollSyncing.value = true
  chartElement.scrollLeft = clampedScrollLeft
  if (timelineHeaderRef.value) {
    timelineHeaderRef.value.scrollLeft = clampedScrollLeft
  }
  
  // 更新滑块位置以触发日期显示更新
  updateScrollbarThumbPosition()
  
  nextTick(() => {
    isScrollSyncing.value = false
  })
}

// 滚动条拖拽结束
function endScrollbarDrag() {
  isScrollbarDragging.value = false
  document.removeEventListener('mousemove', onScrollbarDrag)
  document.removeEventListener('mouseup', endScrollbarDrag)
}

// 滚动条点击
function onScrollbarClick(event: MouseEvent) {
  if (!chartRef.value || !scrollbarTrackRef.value || !scrollbarThumbRef.value) return
  if (event.target === scrollbarThumbRef.value) return // 点击滑块时不处理
  
  const trackElement = scrollbarTrackRef.value
  const rect = trackElement.getBoundingClientRect()
  const clickX = event.clientX - rect.left
  const trackWidth = trackElement.clientWidth
  
  const chartElement = chartRef.value
  const maxScrollLeft = chartElement.scrollWidth - chartElement.clientWidth
  const targetScrollLeft = (clickX / trackWidth) * maxScrollLeft
  
  isScrollSyncing.value = true
  chartElement.scrollLeft = targetScrollLeft
  if (timelineHeaderRef.value) {
    timelineHeaderRef.value.scrollLeft = targetScrollLeft
  }
  
  updateScrollbarThumbPosition()
  
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



// 初始化
onMounted(() => {
  // 组件挂载后的初始化逻辑
  nextTick(() => {
    updateScrollbarThumbPosition()
  })
})

// 时间滚动选择器方法
function onYearChange() {
  updateCurrentDate()
}

function onMonthChange() {
  // 检查当前日期是否超出新月份的天数范围
  const maxDays = new Date(currentYear.value, currentMonth.value, 0).getDate()
  if (currentDay.value > maxDays) {
    currentDay.value = maxDays
  }
  updateCurrentDate()
}

function onDayChange() {
  updateCurrentDate()
}

function updateCurrentDate() {
  const newDate = new Date(currentYear.value, currentMonth.value - 1, currentDay.value)
  scrollToDate(newDate)
}

function goToToday() {
  const today = new Date()
  currentYear.value = today.getFullYear()
  currentMonth.value = today.getMonth() + 1
  currentDay.value = today.getDate()
  scrollToDate(today)
  
  // 确保滑块位置与步进器同步
  nextTick(() => {
    updateScrollbarThumbPosition()
  })
}

function resetView() {
  const today = new Date()
  currentYear.value = today.getFullYear()
  currentMonth.value = today.getMonth() + 1
  currentDay.value = today.getDate()
  if (chartRef.value && timelineHeaderRef.value) {
    chartRef.value.scrollLeft = 0
    timelineHeaderRef.value.scrollLeft = 0
  }
}

function scrollToDate(targetDate: Date) {
  if (!chartRef.value || !timelineHeaderRef.value) return
  
  // 找到目标日期在时间轴中的位置
  const targetTime = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate()).getTime()
  const targetItem = timelineData.value.find(item => {
    const itemTime = new Date(item.date.getFullYear(), item.date.getMonth(), item.date.getDate()).getTime()
    return itemTime === targetTime
  })
  
  if (targetItem) {
    const scrollLeft = Math.max(0, targetItem.left - chartRef.value.clientWidth / 2)
    
    isScrollSyncing.value = true
     chartRef.value.scrollLeft = scrollLeft
     timelineHeaderRef.value.scrollLeft = scrollLeft
     
     // 步进器改变后同步更新滑块位置
     nextTick(() => {
       updateScrollbarThumbPosition()
       isScrollSyncing.value = false
     })
  }
}

// 清理事件监听器
function cleanupEventListeners() {
  const events = [
    ['mousemove', onDrag],
    ['mouseup', endDrag],
    ['mousemove', onResize],
    ['mouseup', endResize],
    ['mousemove', onProgressDrag],
    ['mouseup', endProgressDrag],
    ['mousemove', onScrollbarDrag],
    ['mouseup', endScrollbarDrag]
  ]
  
  events.forEach(([event, handler]) => {
    document.removeEventListener(event as string, handler as EventListener)
  })
}

onUnmounted(() => {
  cleanupEventListeners()
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
      
      /* 隐藏滚动条 */
      scrollbar-width: none;
      &::-webkit-scrollbar {
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
      
      /* 隐藏滚动条 */
      scrollbar-width: none;
      &::-webkit-scrollbar {
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



/* 带时间标记的滚动条样式 */
.gantt-timeline-scrollbar {
  height: 50px;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-top: 10px;
}

.scrollbar-container {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding: 0 10px;
}

.scrollbar-track {
  position: relative;
  width: 100%;
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  cursor: pointer;
  overflow: visible;
  margin-bottom: 2px;
}

.scrollbar-thumb {
  position: absolute;
  top: -4px;
  height: 16px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 12px solid #409eff;
  cursor: grab;
  transition: border-bottom-color 0.2s ease;
  transform: translateX(-50%);
}

.scrollbar-thumb:hover {
  border-bottom-color: #337ecc;
}

.scrollbar-thumb:active {
  cursor: grabbing;
  border-bottom-color: #2b6cb0;
}

.thumb-date-label {
  position: absolute;
  top: 16px;
  font-size: 10px;
  color: #606266;
  background: rgba(255, 255, 255, 0.9);
  padding: 2px 6px;
  border-radius: 3px;
  border: 1px solid #e4e7ed;
  white-space: nowrap;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transition: transform 0.2s ease, left 0.2s ease;
}

.timeline-marks {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  pointer-events: none;
}

.timeline-mark {
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mark-line {
  width: 1px;
  background: #909399;
  margin-bottom: 2px;
}

.mark-label {
  font-size: 10px;
  color: #606266;
  white-space: nowrap;
  background: rgba(255, 255, 255, 0.8);
  padding: 1px 3px;
  border-radius: 2px;
  line-height: 1;
}

.timeline-mark.day {
  .mark-line {
    height: 100%;
    width: 1px;
    background: #909399;
  }
}

/* 年份颜色循环 */
.timeline-mark[data-year] .mark-line {
  background: #909399;
}

.timeline-mark[data-year="2024"] .mark-line,
.timeline-mark[data-year="2029"] .mark-line {
  background: #e6a23c;
}

.timeline-mark[data-year="2025"] .mark-line,
.timeline-mark[data-year="2030"] .mark-line {
  background: #67c23a;
}

.timeline-mark[data-year="2026"] .mark-line {
  background: #409eff;
}

.timeline-mark[data-year="2027"] .mark-line {
  background: #f56c6c;
}

/* 时间滚动选择器样式 */
.gantt-time-scroller {
  height: auto;
  min-height: 180px;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  display: flex;
  align-items: stretch;
}

.scroller-controls {
  display: flex;
  width: 100%;
  padding: 15px;
}

.scroller-vertical-layout {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

.scroller-group {
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
}

.scroller-group label {
  font-size: 14px;
  color: #495057;
  font-weight: 500;
  min-width: 40px;
  flex-shrink: 0;
}

.scroller-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
  width: 100%;
}

.time-slider {
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: #e9ecef;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
}

.time-slider::-webkit-slider-thumb {
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #007bff;
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
}

.time-slider::-webkit-slider-thumb:hover {
  background: #0056b3;
  transform: scale(1.1);
}

.time-slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #007bff;
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.year-slider {
  background: linear-gradient(to right, #e3f2fd 0%, #bbdefb 100%);
}

.month-slider {
  background: linear-gradient(to right, #f3e5f5 0%, #ce93d8 100%);
}

.day-slider {
  background: linear-gradient(to right, #e8f5e8 0%, #a5d6a7 100%);
}

.scroller-value {
  min-width: 40px;
  text-align: center;
  font-size: 14px;
  color: #212529;
  font-weight: 600;
  background: white;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
}

.scroller-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 10px;
}

.action-btn {
  padding: 8px 16px;
  border: 1px solid #007bff;
  background: white;
  color: #007bff;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s;
  white-space: nowrap;
}

.action-btn:hover {
  background: #007bff;
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);
}

.action-btn:active {
  background: #0056b3;
  border-color: #0056b3;
  transform: translateY(0);
}
</style>