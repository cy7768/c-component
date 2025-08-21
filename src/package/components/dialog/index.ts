import {App} from 'vue'
import Dialog from './src/dialog.vue'

const name = 'CDialog'
Dialog.name = name


Dialog.install = (app: App) => {
  app.component(name, Dialog)
}


export {Dialog}
