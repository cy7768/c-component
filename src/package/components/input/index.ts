import { App } from 'vue'
import Input from './src/input.vue'

// 明确定义组件名称
const name = 'CInput'
Input.name = name

Input.install = (app: App) => {
  app.component(name, Input)
}

export default Input 