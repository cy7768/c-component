import { App } from 'vue'
import Button from './button/src/button.vue'
import Input from './input/src/input.vue'

const components = {
  CButton: Button,
  CInput: Input
}

export default {
  install: (app: App) => {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  }
}

export { Button as CButton, Input as CInput }