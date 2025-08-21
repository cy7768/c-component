import { App } from 'vue'
import Button from './button/src/button.vue'
import Input from './input/src/input.vue'
import Table from './table/src/table.vue'
import Form from './form/src/form.vue'
import Search from './form/src/search.vue'
import Dialog from './dialog/src/dialog.vue'
const components = {
  CButton: Button,
  CInput: Input,
  CTable: Table,
  CForm: Form,
  CSearch: Search,
  CDialog: Dialog
}

export default {
  install: (app: App) => {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  }
}

export { Button as CButton, Input as CInput, Table as CTable, Form as CForm, Search as CSearch, Dialog as CDialog }