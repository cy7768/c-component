import { App } from 'vue'
import Table from './src/table.vue'

const name = 'CTable'
Table.name = name

Table.install = (app: App) => {
  app.component(name, Table)
}

export default Table 