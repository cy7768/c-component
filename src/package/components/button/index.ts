import { App } from 'vue'
import Button from './src/button.vue'

// 明确定义组件名称
const name = 'CButton'
Button.name = name

Button.install = (app: App) => {
  app.component(name, Button)
}

export default Button 