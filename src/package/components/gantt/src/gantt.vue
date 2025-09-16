<template>
  <div class="c-gantt">
    <!-- 时间滚动选择器 - 移到顶部并改为横向布局 -->
    <div class="gantt-time-scroller">
      <div class="scroller-controls">
        <div class="scroller-horizontal-layout">
          <div class="scroller-group">
            <label>年:</label>
            <div class="scroller-wrapper">
              <div class="custom-slider-container">
                <input 
                  type="range" 
                  :min="minYear" 
                  :max="maxYear" 
                  v-model="currentYear" 
                  @input="onYearChange"
                  class="time-slider year-slider"
                  id="year-slider"
                />
                <div class="slider-thumb-label year-thumb" 
                     :style="getThumbStyle('year')"
                     @mousedown="startThumbDrag($event, 'year')"
                     :class="{ 'dragging': isDraggingThumb && dragThumbType === 'year' }">
                  {{ currentYear }}
                </div>
              </div>
            </div>
          </div>
          
          <div class="scroller-group">
            <label>月:</label>
            <div class="scroller-wrapper">
              <div class="custom-slider-container">
                <input 
                  type="range" 
                  min="1" 
                  max="12" 
                  v-model="currentMonth" 
                  @input="onMonthChange"
                  class="time-slider month-slider"
                  id="month-slider"
                />
                <div class="slider-thumb-label month-thumb" 
                     :style="getThumbStyle('month')"
                     @mousedown="startThumbDrag($event, 'month')"
                     :class="{ 'dragging': isDraggingThumb && dragThumbType === 'month' }">
                  {{ currentMonth }}
                </div>
              </div>
            </div>
          </div>
          
          <div class="scroller-group">
            <label>日:</label>
            <div class="scroller-wrapper">
              <div class="custom-slider-container">
                <input 
                  type="range" 
                  min="1" 
                  :max="daysInCurrentMonth" 
                  v-model="currentDay" 
                  @input="onDayChange"
                  class="time-slider day-slider"
                  id="day-slider"
                />
                <div class="slider-thumb-label day-thumb" 
                     :style="getThumbStyle('day')"
                     @mousedown="startThumbDrag($event, 'day')"
                     :class="{ 'dragging': isDraggingThumb && dragThumbType === 'day' }">
                  {{ currentDay }}
                </div>
              </div>
            </div>
          </div>
          
          <div class="scroller-actions">
            <button @click="goToToday" class="action-btn">今天</button>
            <button @click="resetView" class="action-btn">重置</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 头部时间轴 -->
    <div class="gantt-header">
      <div class="gantt-sidebar-header" :style="{ width: sidebarWidth + 'px' }">
        <div 
          v-for="column in props.columns" 
          :key="column.key"
          class="sidebar-header-cell"
          :style="{ width: (column.width || 200) + 'px' }"
        >
          {{ column.label }}
        </div>
      </div>
      
      <!-- 分隔线占位空间 -->
      <div class="gantt-header-spacer"></div>
      
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
      <div class="gantt-sidebar" ref="sidebarRef" @scroll="onSidebarScroll" :style="{ width: sidebarWidth + 'px' }">
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
      
      <!-- 可拖拽的分隔线 -->
      <div 
        class="gantt-resizer" 
        @mousedown="startSidebarResize"
        :class="{ 'resizing': isResizing }"
      >
        <div class="resizer-handle"></div>
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
          <!-- 年份背景分块 -->
          <div class="year-blocks">
            <div 
              v-for="(yearGroup, index) in visibleYearGroups" 
              :key="'year-block-' + yearGroup.year"
              class="year-block"
              :class="`year-block-${yearGroups.findIndex(g => g.year === yearGroup.year) % 4}`"
              :style="{ left: yearGroup.startLeft + 'px', width: yearGroup.width + 'px' }"
            >
              <div class="year-label">{{ currentThumbDate }}</div>
            </div>
          </div>
          
          <div class="scrollbar-thumb" ref="scrollbarThumbRef" @mousedown="startScrollbarDrag">
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

// 滑块标签拖拽相关数据
const isDraggingThumb = ref(false)
const dragThumbType = ref<'year' | 'month' | 'day' | null>(null)
const thumbDragStartX = ref(0)
const thumbDragStartValue = ref(0)

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

// 根据滑块位置计算对应的日期
function getDateFromThumbPosition(): Date | null {
  if (!chartRef.value || !scrollbarTrackRef.value || timelineData.value.length === 0) {
    return null
  }
  
  const chartElement = chartRef.value
  // 确保滚动位置在有效边界内
  const maxScrollLeft = chartElement.scrollWidth - chartElement.clientWidth
  const currentScrollLeft = Math.max(0, Math.min(maxScrollLeft, chartElement.scrollLeft))
  
  // 根据边界限制后的滚动位置计算对应的日期
  const targetPixelPosition = currentScrollLeft
  
  // 查找最接近的日期
  let closestDate = timelineData.value[0].date
  let minDistance = Math.abs(timelineData.value[0].left - targetPixelPosition)
  
  for (const item of timelineData.value) {
    const distance = Math.abs(item.left - targetPixelPosition)
    if (distance < minDistance) {
      minDistance = distance
      closestDate = item.date
    }
  }
  
  return closestDate
}

// 计算当前滑块指示的日期（始终显示滑块实际指示的时间）
const currentThumbDate = computed(() => {
  // 验证时间轴数据是否存在
  if (timelineData.value.length === 0) {
    return ''
  }
  
  // 添加对scrollPosition的响应式依赖，确保滑块位置变化时重新计算
  scrollPosition.value // 触发响应式依赖
  
  // 始终显示滑块实际指示的日期
  const thumbDate = getDateFromThumbPosition()
  if (thumbDate) {
    const year = thumbDate.getFullYear()
    const month = thumbDate.getMonth() + 1
    const day = thumbDate.getDate()
    return `${year}/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`
  }
  
  return ''
})



// 时间刻度标记计算
const timelineMarks = computed(() => {
  return timelineData.value.map(item => ({
    key: `day-${item.key}`,
    left: item.left,
    year: item.date.getFullYear()
  }))
})

// 响应式的侧边栏宽度
const dynamicSidebarWidth = ref(0)

// 拖拽相关状态
const isResizing = ref(false)
const startX = ref(0)
const startWidth = ref(0)
const resizeAnimationFrame = ref<number | null>(null)
const dragAnimationFrame = ref<number | null>(null)
const progressAnimationFrame = ref<number | null>(null)
const scrollAnimationFrame = ref<number | null>(null)
const thumbUpdateAnimationFrame = ref<number | null>(null)

// 宽度限制
const minSidebarWidth = 200
const maxSidebarWidth = 800

// 计算左侧边栏宽度
const sidebarWidth = computed(() => {
  const defaultWidth = props.columns.reduce((sum, col) => sum + (col.width || 200), 0)
  return dynamicSidebarWidth.value || defaultWidth
})

// 初始化动态宽度
onMounted(() => {
  dynamicSidebarWidth.value = props.columns.reduce((sum, col) => sum + (col.width || 200), 0)
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

// 滚动位置状态（用于触发年份分块更新）
const scrollPosition = ref(0)

// 计算可见的年份分块（基于滚动位置）
const visibleYearGroups = computed<YearGroup[]>(() => {
  // 使用scrollPosition来确保响应式更新
  const currentScrollLeft = scrollPosition.value
  
  if (!chartRef.value || !scrollbarTrackRef.value) return yearGroups.value
  
  const trackWidth = scrollbarTrackRef.value.clientWidth || 0
  
  return yearGroups.value.map(yearGroup => {
    // 计算年份分块在滚动条轨道中的相对位置
    const relativeLeft = yearGroup.startLeft - currentScrollLeft
    const relativeWidth = yearGroup.width
    
    // 只显示在可视区域内的年份分块
    if (relativeLeft + relativeWidth > 0 && relativeLeft < trackWidth) {
      return {
        ...yearGroup,
        startLeft: Math.max(0, relativeLeft),
        width: Math.min(relativeWidth, trackWidth - Math.max(0, relativeLeft))
      }
    }
    
    return null
  }).filter(Boolean) as YearGroup[]
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
    
    // 使用requestAnimationFrame优化性能
    if (!dragAnimationFrame.value) {
      dragAnimationFrame.value = requestAnimationFrame(() => {
        if (draggingTask.value) {
          draggingTask.value.startDate = newStartDate
          draggingTask.value.endDate = newEndDate
        }
        dragAnimationFrame.value = null
      })
    }
  }
}

// 结束拖拽
function endDrag() {
  if (draggingTask.value) {
    emit('task-update', { ...draggingTask.value })
    draggingTask.value = null
  }
  
  // 清理动画帧
  if (dragAnimationFrame.value) {
    cancelAnimationFrame(dragAnimationFrame.value)
    dragAnimationFrame.value = null
  }
  
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', endDrag)
}

// 开始侧边栏宽度调整
function startSidebarResize(event: MouseEvent) {
  isResizing.value = true
  startX.value = event.clientX
  startWidth.value = sidebarWidth.value
  
  document.addEventListener('mousemove', onSidebarResize)
  document.addEventListener('mouseup', endSidebarResize)
  
  // 防止文本选择
  event.preventDefault()
}

// 侧边栏宽度调整过程
function onSidebarResize(event: MouseEvent) {
  if (!isResizing.value) return
  
  const deltaX = event.clientX - startX.value
  const newWidth = startWidth.value + deltaX
  
  // 应用宽度限制
  const clampedWidth = Math.max(minSidebarWidth, Math.min(maxSidebarWidth, newWidth))
  
  // 使用requestAnimationFrame优化性能
  if (!resizeAnimationFrame.value) {
    resizeAnimationFrame.value = requestAnimationFrame(() => {
      dynamicSidebarWidth.value = clampedWidth
      resizeAnimationFrame.value = null
    })
  }
}

// 结束侧边栏宽度调整
function endSidebarResize() {
  isResizing.value = false
  
  // 清理未完成的动画帧
  if (resizeAnimationFrame.value) {
    cancelAnimationFrame(resizeAnimationFrame.value)
    resizeAnimationFrame.value = null
  }
  
  // 拖拽结束后更新滚动滑块位置，避免拖拽过程中的频繁更新
  updateScrollbarThumbPosition()
  
  document.removeEventListener('mousemove', onSidebarResize)
  document.removeEventListener('mouseup', endSidebarResize)
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
  
  // 使用requestAnimationFrame节流，避免频繁更新导致颤抖
  if (!thumbUpdateAnimationFrame.value) {
    thumbUpdateAnimationFrame.value = requestAnimationFrame(() => {
      if (!chartRef.value || !scrollbarTrackRef.value || !scrollbarThumbRef.value) {
        thumbUpdateAnimationFrame.value = null
        return
      }
      
      const chartElement = chartRef.value
      const trackElement = scrollbarTrackRef.value
      const thumbElement = scrollbarThumbRef.value
      
      // 计算滚动条滑块的位置和大小
      const scrollRatio = chartElement.scrollLeft / (chartElement.scrollWidth - chartElement.clientWidth)
      const thumbWidth = (chartElement.clientWidth / chartElement.scrollWidth) * trackElement.clientWidth
      let thumbLeft = scrollRatio * (trackElement.clientWidth - thumbWidth)
      
      // 滑块实际视觉宽度（三角形样式：左右各8px边框）
      const thumbVisualWidth = 16
      
      // 边界检查：确保滑块不会超过轨道边界
      const maxThumbLeft = trackElement.clientWidth - thumbVisualWidth
      thumbLeft = Math.max(0, Math.min(maxThumbLeft, thumbLeft))
      
      // 使用transform代替直接修改left属性，提升性能
      // 直接计算最终位置，避免复杂的transform计算
      thumbElement.style.width = thumbWidth + 'px'
      thumbElement.style.transform = `translateX(${thumbLeft}px)`
      
      // 更新响应式状态以触发日期显示更新和年份分块更新
      thumbPosition.value = { left: thumbLeft, width: thumbWidth }
      scrollPosition.value = chartElement.scrollLeft
      
      thumbUpdateAnimationFrame.value = null
    })
  }
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
  
  // 计算步进器设置的日期对应的最小滚动位置
  const stepperDate = new Date(currentYear.value, currentMonth.value - 1, currentDay.value)
  const minScrollLeft = getDatePixelPosition(stepperDate)
  
  // 限制滚动范围：不能滑动到步进器时间之前，且不能超过最大滚动范围
  const clampedScrollLeft = Math.max(minScrollLeft, Math.min(maxScrollLeft, newScrollLeft))
  
  // 使用requestAnimationFrame优化滚动性能
  if (!scrollAnimationFrame.value) {
    scrollAnimationFrame.value = requestAnimationFrame(() => {
      if (chartRef.value && timelineHeaderRef.value) {
        isScrollSyncing.value = true
        chartRef.value.scrollLeft = clampedScrollLeft
        timelineHeaderRef.value.scrollLeft = clampedScrollLeft
        
        // 更新滑块位置以触发日期显示更新
        updateScrollbarThumbPosition()
        
        nextTick(() => {
          isScrollSyncing.value = false
        })
      }
      scrollAnimationFrame.value = null
    })
  }
}

// 滚动条拖拽结束
function endScrollbarDrag() {
  isScrollbarDragging.value = false
  
  // 清理滚动动画帧
  if (scrollAnimationFrame.value) {
    cancelAnimationFrame(scrollAnimationFrame.value)
    scrollAnimationFrame.value = null
  }
  
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
  
  // 计算步进器设置的日期对应的最小滚动位置
  const stepperDate = new Date(currentYear.value, currentMonth.value - 1, currentDay.value)
  const minScrollLeft = getDatePixelPosition(stepperDate)
  
  // 限制滚动范围：不能滑动到步进器时间之前
  const clampedTargetScrollLeft = Math.max(minScrollLeft, Math.min(maxScrollLeft, targetScrollLeft))
  
  isScrollSyncing.value = true
  chartElement.scrollLeft = clampedTargetScrollLeft
  if (timelineHeaderRef.value) {
    timelineHeaderRef.value.scrollLeft = clampedTargetScrollLeft
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
  
  // 使用requestAnimationFrame优化性能
  if (!progressAnimationFrame.value) {
    progressAnimationFrame.value = requestAnimationFrame(() => {
      if (progressDragging.value) {
        progressDragging.value.progress = Math.round(newProgress)
      }
      progressAnimationFrame.value = null
    })
  }
}

// 结束拖拽进度
function endProgressDrag() {
  if (progressDragging.value) {
    emit('task-update', { ...progressDragging.value })
    progressDragging.value = null
  }
  
  // 清理动画帧
  if (progressAnimationFrame.value) {
    cancelAnimationFrame(progressAnimationFrame.value)
    progressAnimationFrame.value = null
  }
  
  document.removeEventListener('mousemove', onProgressDrag)
  document.removeEventListener('mouseup', endProgressDrag)
}

// 获取任务条宽度
function getTaskBarWidth(task: GanttTask): number {
  const duration = Math.floor((task.endDate.getTime() - task.startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1
  return duration * props.cellWidth
}

// 计算滑块标签位置
function getThumbStyle(type: 'year' | 'month' | 'day') {
  let value: number
  let min: number
  let max: number
  
  switch (type) {
    case 'year':
      value = currentYear.value
      min = minYear.value
      max = maxYear.value
      break
    case 'month':
      value = currentMonth.value
      min = 1
      max = 12
      break
    case 'day':
      value = currentDay.value
      min = 1
      max = daysInCurrentMonth.value
      break
  }
  
  // 计算滑块位置百分比
  const percentage = ((value - min) / (max - min)) * 100
  
  return {
    left: `${percentage}%`,
    transform: 'translateX(-50%)' // 以标签中心为基准进行定位
  }
}



// 初始化
onMounted(() => {
  // 组件挂载后的初始化逻辑
  nextTick(() => {
    // 初始化时滑块位置为步进器设置的时间位置
    const stepperDate = new Date(currentYear.value, currentMonth.value - 1, currentDay.value)
    scrollToDate(stepperDate)
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
  
  // 确保步进器变化时立即同步滑块位置
  nextTick(() => {
    updateScrollbarThumbPosition()
  })
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

// 获取日期对应的像素位置
function getDatePixelPosition(targetDate: Date): number {
  const targetTime = targetDate.getTime()
  
  // 在时间轴数据中查找目标日期
  for (let i = 0; i < timelineData.value.length; i++) {
    const item = timelineData.value[i]
    const itemTime = new Date(item.date.getFullYear(), item.date.getMonth(), item.date.getDate()).getTime()
    
    if (itemTime === targetTime) {
      return item.left
    }
  }
  
  // 如果没有找到精确匹配，返回最接近的位置
  let closestIndex = 0
  let minDiff = Math.abs(timelineData.value[0].date.getTime() - targetTime)
  
  for (let i = 1; i < timelineData.value.length; i++) {
    const diff = Math.abs(timelineData.value[i].date.getTime() - targetTime)
    if (diff < minDiff) {
      minDiff = diff
      closestIndex = i
    }
  }
  
  return timelineData.value[closestIndex].left
}

// 开始拖拽滑块标签
function startThumbDrag(event: MouseEvent, type: 'year' | 'month' | 'day') {
  isDraggingThumb.value = true
  dragThumbType.value = type
  thumbDragStartX.value = event.clientX
  
  // 记录开始拖拽时的数值
  switch (type) {
    case 'year':
      thumbDragStartValue.value = currentYear.value
      break
    case 'month':
      thumbDragStartValue.value = currentMonth.value
      break
    case 'day':
      thumbDragStartValue.value = currentDay.value
      break
  }
  
  // 添加全局事件监听器
  document.addEventListener('mousemove', onThumbDrag)
  document.addEventListener('mouseup', endThumbDrag)
  
  // 防止文本选择和默认行为
  event.preventDefault()
  event.stopPropagation()
}

// 拖拽滑块标签过程
function onThumbDrag(event: MouseEvent) {
  if (!isDraggingThumb.value || !dragThumbType.value) return
  
  const deltaX = event.clientX - thumbDragStartX.value
  const sliderElement = document.getElementById(`${dragThumbType.value}-slider`) as HTMLInputElement
  
  if (!sliderElement) return
  
  // 获取滑块的宽度和范围
  const sliderRect = sliderElement.getBoundingClientRect()
  const sliderWidth = sliderRect.width
  
  let min: number, max: number
  switch (dragThumbType.value) {
    case 'year':
      min = minYear.value
      max = maxYear.value
      break
    case 'month':
      min = 1
      max = 12
      break
    case 'day':
      min = 1
      max = daysInCurrentMonth.value
      break
  }
  
  // 计算新的数值
  const range = max - min
  const pixelPerUnit = sliderWidth / range
  const unitChange = deltaX / pixelPerUnit
  let newValue = Math.round(thumbDragStartValue.value + unitChange)
  
  // 限制在有效范围内
  newValue = Math.max(min, Math.min(max, newValue))
  
  // 更新对应的数值
  switch (dragThumbType.value) {
    case 'year':
      if (newValue !== currentYear.value) {
        currentYear.value = newValue
        onYearChange()
      }
      break
    case 'month':
      if (newValue !== currentMonth.value) {
        currentMonth.value = newValue
        onMonthChange()
      }
      break
    case 'day':
      if (newValue !== currentDay.value) {
        currentDay.value = newValue
        onDayChange()
      }
      break
  }
}

// 结束拖拽滑块标签
function endThumbDrag() {
  isDraggingThumb.value = false
  dragThumbType.value = null
  
  // 移除全局事件监听器
  document.removeEventListener('mousemove', onThumbDrag)
  document.removeEventListener('mouseup', endThumbDrag)
}

// 对齐滚动位置到日期边界
function alignScrollToDateBoundary(scrollLeft: number): number {
  // 将滚动位置对齐到最近的日期边界（cellWidth的倍数）
  return Math.round(scrollLeft / props.cellWidth) * props.cellWidth
}

function scrollToDate(targetDate: Date) {
  if (!chartRef.value || !timelineHeaderRef.value) return
  
  // 使用精确的日期到像素位置映射
  const targetPixelPosition = getDatePixelPosition(targetDate)
  const scrollLeft = Math.max(0, targetPixelPosition)
  
  // 对齐到日期边界确保精确定位
  const alignedScrollLeft = alignScrollToDateBoundary(scrollLeft)
  const maxScrollLeft = chartRef.value.scrollWidth - chartRef.value.clientWidth
  const clampedScrollLeft = Math.max(0, Math.min(maxScrollLeft, alignedScrollLeft))
  
  isScrollSyncing.value = true
  chartRef.value.scrollLeft = clampedScrollLeft
  timelineHeaderRef.value.scrollLeft = clampedScrollLeft
  
  // 立即更新滑块位置
  updateScrollbarThumbPosition()
  
  // 步进器改变后再次确保滑块位置同步
  nextTick(() => {
    updateScrollbarThumbPosition()
    isScrollSyncing.value = false
  })
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
    ['mouseup', endScrollbarDrag],
    ['mousemove', onSidebarResize],
    ['mouseup', endSidebarResize]
  ]
  
  events.forEach(([event, handler]) => {
    document.removeEventListener(event as string, handler as EventListener)
  })
}

onUnmounted(() => {
  cleanupEventListeners()
  
  // 清理所有动画帧
  if (resizeAnimationFrame.value) {
    cancelAnimationFrame(resizeAnimationFrame.value)
    resizeAnimationFrame.value = null
  }
  if (dragAnimationFrame.value) {
    cancelAnimationFrame(dragAnimationFrame.value)
    dragAnimationFrame.value = null
  }
  if (progressAnimationFrame.value) {
    cancelAnimationFrame(progressAnimationFrame.value)
    progressAnimationFrame.value = null
  }
  if (scrollAnimationFrame.value) {
    cancelAnimationFrame(scrollAnimationFrame.value)
    scrollAnimationFrame.value = null
  }
  if (thumbUpdateAnimationFrame.value) {
    cancelAnimationFrame(thumbUpdateAnimationFrame.value)
    thumbUpdateAnimationFrame.value = null
  }
})
</script>

<style lang="scss" scoped>
@use './css/index.scss';
</style>