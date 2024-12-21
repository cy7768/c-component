import { App } from 'vue'
import Button from './button/src/button.vue'
import Input from './input/src/input.vue'
import Table from './table/src/table.vue'
import Form from './form/src/form.vue'

const components = {
  CButton: Button,
  CInput: Input,
  CTable: Table,
  CForm: Form
}

export default {
  install: (app: App) => {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  }
}

export { Button as CButton, Input as CInput, Table as CTable, Form as CForm }