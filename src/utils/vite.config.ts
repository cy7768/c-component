import { defineConfig } from 'vite';
import { resolve } from 'path';


export default defineConfig({

  build: {
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'sup-utlis',
      fileName: (format) => `sup-utlis.${format === 'es' ? 'mjs' : 'js'}`
    },

    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }

    }

  }

}); 
