import { App } from 'vue'
import Form from './src/form.vue'

const name = 'CForm'
Form.name = name

Form.install = (app: App) => {
  app.component(name, Form)
}

export default Form 