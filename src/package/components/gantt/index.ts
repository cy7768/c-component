import { App } from 'vue'
import Gantt from './src/gantt.vue'

// 明确定义组件名称
const name = 'CGantt'
Gantt.name = name

Gantt.install = (app: App) => {
  app.component(name, Gantt)
}

export default Gantt